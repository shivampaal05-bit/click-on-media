import React, { useState } from 'react';
import '../styles/VideoEditingPage.css';

export default function VideoEditingPage({ onOpenContact, onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx));
  };

  const videoServices = [
    {
      title: 'Viral Instagram Reels & YT Shorts',
      desc: 'High-energy fast-paced editing, hook generation, sound FX, animated captions, and zoom transitions engineered for maximum algorithm retention.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      title: 'Personal Camera Shoot & On-Location',
      desc: 'Professional 4K cinema cameras, studio lighting, wireless lapel audio, and gimbal equipment for Business, Product, Office & Doctor clinic shoots.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
          <circle cx="12" cy="13" r="4"></circle>
        </svg>
      )
    },
    {
      title: 'Corporate Promo & Brand Commercials',
      desc: 'Cinematic company profiles, factory tours, customer testimonials, and luxury brand ad commercials crafted to establish authority.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7"></polygon>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
        </svg>
      )
    },
    {
      title: 'YouTube Long-Form & Podcast Editing',
      desc: 'Multi-cam angle switching, noise reduction, color grading in DaVinci Resolve, lower-thirds motion graphics, and background music mix.',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      title: 'Product Demos & E-commerce Ads',
      desc: 'High-converting 360-degree product video shoots, unboxing videos, Amazon & Shopify video ads, and UGC-style reviews.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      )
    },
    {
      title: 'Sound Design & 4K Color Grading',
      desc: 'Hollywood-standard cinematic LUTs, color balancing, Foley sound effects, licensed music library, and crisp vocal remastering.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      )
    }
  ];

  const packages = [
    {
      name: 'Reels & Shorts Pack',
      badge: 'Social Media',
      price: '₹9,999',
      features: [
        '15 Edited Viral Reels / Shorts',
        'Dynamic Word-by-Word Subtitles',
        'Sound FX & B-Roll Integration',
        'Trending Audio Sync',
        'Full HD / 4K Deliverables'
      ]
    },
    {
      name: 'Commercial Shoot + Edit',
      badge: 'Most Popular',
      price: '₹21,999',
      isPopular: true,
      features: [
        'Full Day On-Location Camera Shoot (Gorakhpur)',
        '4K Cinema Camera & Wireless Audio Lapel',
        'Office, Product or Doctor Clinic Shoot',
        '1 Main Brand Video + 6 Teaser Reels',
        'Complete Color Grading & Script Assistance'
      ]
    },
    {
      name: 'Full Channel Production',
      badge: 'YouTubers & Brands',
      price: '₹34,999',
      features: [
        '8 Long-Form YouTube Videos Edited',
        '16 Matching Viral Shorts / Reels',
        'Custom 3D High-CTR Thumbnails',
        'YouTube Video SEO & Tags',
        'Dedicated Creative Video Editor'
      ]
    }
  ];

  const faqs = [
    {
      q: 'Do you come to our office/store for shooting in Gorakhpur?',
      a: 'Yes! Our camera crew brings professional 4K cameras, multi-point lighting, and wireless microphones directly to your business premises in Gorakhpur and nearby districts.'
    },
    {
      q: 'What is the turnaround time for reel and video editing?',
      a: 'Standard reels and promotional edits are delivered within 24 to 48 hours with revisions included.'
    }
  ];

  return (
    <div className="video-page-wrapper">
      
      {/* Breadcrumb Navigation */}
      <div className="webdev-breadcrumb-bar">
        <div className="video-container breadcrumb-inner">
          <button type="button" className="breadcrumb-home-link" onClick={onNavigateHome}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Video Editing &amp; Reels Production</span>
        </div>
      </div>

      {/* 1. Hero */}
      <section className="video-hero-section">
        <div className="video-container">
          <div className="video-hero-grid">
            
            <div className="video-hero-content">
              <div className="video-eyebrow-badge">
                <span className="badge-dot"></span>
                <span>4K CINEMATIC SHOOT &amp; VIDEO EDITING</span>
              </div>
              <h1 className="video-main-title">
                Captivate Audiences with <span className="title-logo-gradient">Viral Video Production</span>
              </h1>
              <p className="video-hero-desc">
                From viral Instagram Reels and YouTube podcasts to cinematic corporate brand shoots in Gorakhpur. 
                Click On Media brings cutting-edge storytelling, motion graphics, and sound design to elevate your brand.
              </p>
              <div className="video-actions-row">
                <button type="button" className="btn-video-primary" onClick={onOpenContact}>
                  Book a Video Shoot →
                </button>
                <a href="tel:+918303534063" className="btn-video-secondary">
                  Call: +91 8303534063
                </a>
              </div>
            </div>

            <div className="video-hero-visual">
              <div className="video-player-card">
                <video 
                  className="video-preview-player" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  poster="/assets/video-production.jpg"
                >
                  <source src="/assets/service-video.mp4" type="video/mp4" />
                </video>
                <div className="video-floating-badge">
                  <span className="rec-dot"></span>
                  <span>4K UHD 60 FPS HDR</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="video-services-section">
        <div className="video-container">
          <div className="video-center-header">
            <span className="video-tag">PRODUCTION EXPERTISE</span>
            <h2 className="video-section-title">
              Complete <span className="title-logo-gradient">Filmmaking &amp; Editing</span> Suite
            </h2>
          </div>

          <div className="video-services-grid">
            {videoServices.map((srv, idx) => (
              <div className="video-service-card" key={idx}>
                <div className="service-icon-box">
                  {srv.icon}
                </div>
                <h3 className="service-title">{srv.title}</h3>
                <p className="service-desc">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Packages */}
      <section className="video-pricing-section">
        <div className="video-container">
          <div className="video-center-header">
            <span className="video-tag">FLEXIBLE PACKAGES</span>
            <h2 className="video-section-title">
              Video Production <span className="title-logo-gradient">Plans</span>
            </h2>
          </div>

          <div className="video-pricing-grid">
            {packages.map((pkg, idx) => (
              <div className={`video-pricing-card ${pkg.isPopular ? 'popular' : ''}`} key={idx}>
                {pkg.isPopular && <div className="popular-pill">Most Popular</div>}
                <span className="pkg-badge">{pkg.badge}</span>
                <h3 className="pkg-name">{pkg.name}</h3>
                <div className="pkg-price-wrap">
                  <span className="pkg-price">{pkg.price}</span>
                </div>
                <ul className="pkg-features-list">
                  {pkg.features.map((item, fIdx) => (
                    <li key={fIdx}>
                      <span className="check-icon">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button type="button" className="btn-pkg-action" onClick={onOpenContact}>
                  Book {pkg.name} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQs */}
      <section className="video-faqs-section">
        <div className="video-container">
          <div className="video-center-header">
            <span className="video-tag">FAQ</span>
            <h2 className="video-section-title">
              Video Editing &amp; Shoot <span className="title-logo-gradient">FAQs</span>
            </h2>
          </div>

          <div className="video-faqs-list">
            {faqs.map((faq, idx) => (
              <div className={`video-faq-item ${activeFaq === idx ? 'open' : ''}`} key={idx}>
                <button type="button" className="video-faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <span className="faq-toggle-icon">{activeFaq === idx ? '−' : '+'}</span>
                </button>
                {activeFaq === idx && (
                  <div className="video-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Bar */}
      <section className="video-cta-bar">
        <div className="video-container">
          <div className="video-cta-content">
            <div className="cta-left">
              <span className="cta-badge">LET'S CREATE SOMETHING ICONIC</span>
              <h3>Bring your brand to life with cinematic video</h3>
              <p>Schedule your next commercial video shoot with Click On Media Gorakhpur.</p>
            </div>
            <div className="cta-right">
              <button type="button" className="btn-cta-white" onClick={onOpenContact}>
                Book Consultation →
              </button>
              <a href="https://wa.me/918303534063" target="_blank" rel="noopener noreferrer" className="btn-cta-whatsapp">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
