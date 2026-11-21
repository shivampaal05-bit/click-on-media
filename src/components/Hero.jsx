import React, { useRef, useState, useEffect } from 'react';
import AudioToggle from './AudioToggle.jsx';
import '../styles/Hero.css';

const FULL_HEADLINE = "Everything Your Business Needs to Grow in the Digital World.";
const FULL_DESC = "We help businesses grow with Social Media Marketing, Website Development, SEO, Google & Meta Ads, WhatsApp Marketing, Graphic Design, Video Editing, Custom Software, CRM Solutions and Digital Monetization.";

export default function Hero({ onOpenContact, onNavigate }) {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  
  // 3D Mouse Parallax State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Typewriter Progress States
  const [typedHeadline, setTypedHeadline] = useState("");
  const [typedDesc, setTypedDesc] = useState("");
  const [showBadge, setShowBadge] = useState(false);
  const [showPillars, setShowPillars] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Guarantee autoplay under strict browser media policies
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => {
        console.log('Video autoplay prevented, waiting for user interaction:', err);
      });
    }
  }, []);

  // Progressive Typewriter synced as video plays
  useEffect(() => {
    let headlineIndex = 0;
    let descIndex = 0;
    let headlineInterval = null;
    let descInterval = null;

    // 1. Badge reveals almost immediately
    const badgeTimer = setTimeout(() => {
      setShowBadge(true);
    }, 250);

    // 2. Headline starts typing letter-by-letter
    const headlineTimer = setTimeout(() => {
      headlineInterval = setInterval(() => {
        if (headlineIndex < FULL_HEADLINE.length) {
          headlineIndex++;
          setTypedHeadline(FULL_HEADLINE.slice(0, headlineIndex));
        } else {
          clearInterval(headlineInterval);
          setShowPillars(true);
          
          // 3. Description starts typing once headline & pillars reveal
          setTimeout(() => {
            descInterval = setInterval(() => {
              if (descIndex < FULL_DESC.length) {
                // Type in small natural chunks of 2-3 chars for smooth streaming feel
                descIndex = Math.min(FULL_DESC.length, descIndex + 2);
                setTypedDesc(FULL_DESC.slice(0, descIndex));
              } else {
                clearInterval(descInterval);
                setShowActions(true);
                setIsTypingComplete(true);
              }
            }, 25);
          }, 350);
        }
      }, 38);
    }, 600);

    return () => {
      clearTimeout(badgeTimer);
      clearTimeout(headlineTimer);
      if (headlineInterval) clearInterval(headlineInterval);
      if (descInterval) clearInterval(descInterval);
    };
  }, []);

  // 3D Parallax Mouse Tracking
  const handleMouseMove = (e) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 2, y: y * 2 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

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

  const handleViewServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('services');
    }
  };

  // Render Headline with Click On Media Brand Gradient on "Digital World."
  const renderStyledHeadline = () => {
    const targetWord = "Digital World.";
    const prefix = "Everything Your Business Needs to Grow in the ";
    
    if (typedHeadline.length <= prefix.length) {
      return (
        <>
          {typedHeadline}
          {!isTypingComplete && <span className="typewriter-cursor">|</span>}
        </>
      );
    }

    const styledPart = typedHeadline.slice(prefix.length);
    return (
      <>
        {prefix}
        <span className="hero-gradient-text">{styledPart}</span>
        {!isTypingComplete && <span className="typewriter-cursor">|</span>}
      </>
    );
  };

  return (
    <section 
      className="hero-section" 
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. 3D Spatial Video Background Wrapper */}
      <div 
        className="video-background-wrapper 3d-depth-stage"
        style={{
          transform: `perspective(1200px) rotateX(${tilt.y * -3.5}deg) rotateY(${tilt.x * 3.5}deg) scale3d(1.04, 1.04, 1.04)`
        }}
      >
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
        
        {/* 3D Cinematic Atmosphere Overlay (Crystal Clear Center, Ambient Depth Vignette) */}
        <div className="video-overlay" />
        <div className="hero-3d-ambient-glow" />
      </div>

      {/* 2. Centered Glassmorphic Hero Content (NO Solid Background - 100% Video Visible) */}
      <div 
        className="hero-center-wrapper"
        style={{
          transform: `perspective(1200px) translateZ(40px) rotateX(${tilt.y * -1.2}deg) rotateY(${tilt.x * 1.2}deg)`
        }}
      >
        <div className="hero-transparent-content">
          
          {/* Eyebrow Badge: ALL-IN-ONE DIGITAL SOLUTIONS AGENCY */}
          <div className={`hero-center-badge ${showBadge ? 'visible' : ''}`}>
            <span className="badge-sparkle">✦</span>
            <span className="badge-text">ALL-IN-ONE DIGITAL SOLUTIONS AGENCY</span>
            <span className="badge-pulse-dot" />
          </div>

          {/* Main Headline with Dynamic Typewriter Effect */}
          <h1 className="hero-center-title">
            {renderStyledHeadline()}
          </h1>

          {/* Pillars: Marketing • Technology • Creativity */}
          <div className={`hero-pillars-row ${showPillars ? 'visible' : ''}`}>
            <span className="pillar-item pillar-marketing">Marketing</span>
            <span className="pillar-bullet">•</span>
            <span className="pillar-item pillar-tech">Technology</span>
            <span className="pillar-bullet">•</span>
            <span className="pillar-item pillar-creativity">Creativity</span>
          </div>

          {/* Description Paragraph with Smooth Progressive Streaming */}
          <p className={`hero-center-description ${showPillars ? 'visible' : ''}`}>
            {typedDesc || (showPillars ? "We help businesses grow..." : "")}
            {!isTypingComplete && typedDesc.length > 0 && typedDesc.length < FULL_DESC.length && (
              <span className="typewriter-cursor desc-cursor">|</span>
            )}
          </p>

          {/* Action CTA Buttons */}
          <div className={`hero-center-actions ${showActions ? 'visible' : ''}`}>
            <button 
              type="button" 
              className="btn-hero-primary" 
              onClick={onOpenContact}
            >
              <span className="btn-shine" />
              <span>Get a Free Consultation</span>
              <span className="btn-arrow">→</span>
            </button>

            <button 
              type="button" 
              className="btn-hero-secondary" 
              onClick={handleViewServices}
            >
              <span>View Our Services</span>
            </button>
          </div>

          {/* Bottom Banner Ribbon: GROW YOUR BRAND • REACH MORE CUSTOMERS • AUTOMATE YOUR BUSINESS */}
          <div className={`hero-growth-ribbon ${showActions ? 'visible' : ''}`}>
            <span className="ribbon-sparkle">★</span>
            <span className="ribbon-text">GROW YOUR BRAND</span>
            <span className="ribbon-dot">•</span>
            <span className="ribbon-text">REACH MORE CUSTOMERS</span>
            <span className="ribbon-dot">•</span>
            <span className="ribbon-text">AUTOMATE YOUR BUSINESS</span>
            <span className="ribbon-sparkle">★</span>
          </div>

        </div>
      </div>

      {/* 3. Continuous Running Marquee Ticker at Bottom */}
      <div className="schbang-ticker-bar">
        <div className="schbang-ticker-track">
          {[...Array(4)].map((_, idx) => (
            <div className="schbang-ticker-cluster" key={idx}>
              <span className="ticker-item">
                GROW YOUR BRAND <span className="ticker-highlight">• REACH MORE CUSTOMERS</span>
              </span>
              <span className="ticker-burst">✸</span>
              <span className="ticker-item">
                AUTOMATE YOUR BUSINESS <span className="ticker-highlight">• 100% ROI</span>
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
