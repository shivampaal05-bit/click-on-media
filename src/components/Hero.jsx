import React, { useRef, useState, useEffect } from 'react';
import AudioToggle from './AudioToggle.jsx';
import '../styles/Hero.css';

export default function Hero({ onOpenContact }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Guarantee autoplay under strict browser media policies
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => {
        console.log('Video autoplay prevented, waiting for user interaction:', err);
      });
    }
  }, []);

  const handleToggleAudio = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.95,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section" id="hero">
      {/* 1. Fullscreen Background Video */}
      <div className="video-background-wrapper">
        <video 
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
        >
          <source src="/assets/hero-video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        {/* Cinematic Dual Dark Overlay */}
        <div className="video-overlay" />
      </div>



      {/* 3. Continuous Running Marquee Ticker in "Complete Digital Solutions" Color Scheme (#38bdf8 Cyan/Sky) */}
      <div className="schbang-ticker-bar">
        <div className="schbang-ticker-track">
          {[...Array(4)].map((_, idx) => (
            <div className="schbang-ticker-cluster" key={idx}>
              <span className="ticker-item">
                COMPLETE <span className="ticker-highlight">DIGITAL SOLUTIONS</span>
              </span>
              <span className="ticker-burst">✸</span>
              <span className="ticker-item">
                YOUR <span className="ticker-highlight">DIGITAL GROWTH</span> PARTNER
              </span>
              <span className="ticker-burst">✸</span>
              <span className="ticker-item ticker-brand">
                CLICK ON <span className="ticker-highlight">MEDIA</span>
              </span>
              <span className="ticker-burst">✸</span>
              <span className="ticker-item">
                HIGH PERFORMANCE <span className="ticker-highlight">SEO & WEB</span>
              </span>
              <span className="ticker-burst">✸</span>
              <span className="ticker-item">
                4K VIDEO & <span className="ticker-highlight">VIRAL REELS</span>
              </span>
              <span className="ticker-burst">✸</span>
              <span className="ticker-item">
                ADS & <span className="ticker-highlight">MONETIZATION</span>
              </span>
              <span className="ticker-burst">✸</span>
            </div>
          ))}
        </div>
      </div>

      {/* Audio Mute/Unmute Toggle Button */}
      <AudioToggle isMuted={isMuted} onToggle={handleToggleAudio} />

      {/* Mouse Wheel Scroll Indicator */}
      <div 
        className="scroll-indicator" 
        onClick={handleScrollDown}
        role="button"
        tabIndex={0}
        aria-label="Scroll down"
      >
        <div className="mouse-icon">
          <div className="wheel" />
        </div>
      </div>
    </section>
  );
}
