import React from 'react';
import '../styles/Footer.css';

export default function Footer({ onOpenContact, onNavigate }) {
  const cities = [
    'Gorakhpur (HQ)', 'Delhi NCR', 'Mumbai', 'Bengaluru', 'Hyderabad', 'Pune', 'Kolkata', 
    'Lucknow', 'Varanasi', 'Jaipur', 'Chandigarh', 'Dubai', 'London', 'New York', 'Singapore'
  ];

  const handleNav = (target) => {
    if (target === 'website-development') {
      if (onNavigate) {
        onNavigate('website-development');
      } else {
        window.location.hash = '#/website-development';
      }
    } else if (target === 'digital-marketing') {
      if (onNavigate) {
        onNavigate('digital-marketing');
      } else {
        window.location.hash = '#/digital-marketing';
      }
    } else if (target === 'social-media-management') {
      if (onNavigate) {
        onNavigate('social-media-management');
      } else {
        window.location.hash = '#/social-media-management';
      }
    } else if (target === 'custom-software') {
      if (onNavigate) {
        onNavigate('custom-software');
      } else {
        window.location.hash = '#/custom-software';
      }
    } else if (target === 'digital-menu') {
      if (onNavigate) {
        onNavigate('digital-menu');
      } else {
        window.location.hash = '#/digital-menu';
      }
    } else if (target === 'courses') {
      if (onNavigate) {
        onNavigate('courses');
      } else {
        window.location.hash = '#/courses';
      }
    } else if (target === 'services' || target === 'all-services') {
      if (onNavigate) {
        onNavigate('services');
      } else {
        window.location.hash = '#/services';
      }
    } else {
      if (onNavigate) {
        onNavigate('home');
      }
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  return (
    <footer className="site-footer">
      {/* Global Reach / Live Markets Bar */}
      <div className="footer-markets-bar">
        <div className="section-container">
          <div className="markets-badge">Complete Digital Solutions for Your Business 🚀</div>
          <h3 className="markets-title">We Scale High-Growth Brands Across 25+ Global Hubs</h3>
          <div className="markets-pills-wrap">
            {cities.map((city, idx) => (
              <React.Fragment key={idx}>
                <span className="city-pill">{city}</span>
                {idx < cities.length - 1 && <span className="city-divider">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Content */}
      <div className="footer-main-content">
        <div className="section-container">
          <div className="footer-grid">
            {/* Column 1: Brand Info */}
            <div className="footer-col brand-col">
              <a 
                href="#/" 
                className="footer-logo-link" 
                aria-label="Click On Media Home"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home');
                  else window.location.hash = '#/';
                }}
              >
                <img src="./assets/logo-light.png" alt="Click On Media" className="footer-logo-img" />
              </a>
              <p className="footer-about-text">
                Click On Media — Your Digital Growth Partner. Complete digital solutions including SEO, Web & Software Development, Social Media Management, Graphic Designing, Video/Reels Production, Ads Management, and Channel Monetization.
              </p>
              <div className="footer-social-links">
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter / X">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer-col">
              <h4 className="footer-col-title">Our Services</h4>
              <ul className="footer-links-list">
                <li><button type="button" className="footer-text-btn" onClick={() => handleNav('services')} style={{ color: '#38bdf8', fontWeight: 700 }}>All Services (Complete Overview)</button></li>
                <li><button type="button" className="footer-text-btn" onClick={() => handleNav('digital-marketing')}>Digital Marketing</button></li>
                <li><button type="button" className="footer-text-btn" onClick={() => handleNav('website-development')}>Website Development</button></li>
                <li><button type="button" className="footer-text-btn" onClick={() => handleNav('social-media-management')}>Social Media Management</button></li>
                <li><button type="button" className="footer-text-btn" onClick={() => handleNav('custom-software')}>Custom Software Development</button></li>
                <li><button type="button" className="footer-text-btn" onClick={() => handleNav('digital-menu')}>Digital Menu Solutions</button></li>
                <li><button type="button" className="footer-text-btn" onClick={() => handleNav('courses')}>Full-Stack & MERN Courses</button></li>
                <li><button type="button" className="footer-text-btn" onClick={() => handleNav('#services')}>Graphic Designing</button></li>
                <li><button type="button" className="footer-text-btn" onClick={() => handleNav('#services')}>Video & Reels Production</button></li>
                <li><button type="button" className="footer-text-btn" onClick={() => handleNav('#services')}>Ads Management</button></li>
                <li><button type="button" className="footer-text-btn" onClick={() => handleNav('#services')}>Monetization & Growth</button></li>
              </ul>
            </div>

            {/* Column 3: Contact Box matching Official Banner */}
            <div className="footer-col">
              <div className="footer-support-card">
                <h4>Connect With Us</h4>
                <p>Call or WhatsApp directly:</p>
                <a href="tel:8303534063" className="support-email-link">
                  +91 8303534063
                </a>
                <p style={{ marginTop: '8px' }}>Email Us:</p>
                <a href="mailto:info@clickonmedia.in" className="support-email-link" style={{ fontSize: '0.9rem' }}>
                  info@clickonmedia.in
                </a>
                <a href="mailto:mailid-clickonmedia3@gmail.com" className="support-email-link" style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  mailid-clickonmedia3@gmail.com
                </a>
                <button className="btn-footer-consult" onClick={onOpenContact}>
                  Schedule Free Strategy Call
                </button>
              </div>
            </div>

            {/* Column 4: Head Office Location */}
            <div className="footer-col">
              <h4 className="footer-col-title">Head Office</h4>
              <p className="app-subtext" style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
                Near Adalat Restaurant, Pipal Dada, Shri Ganga Tiraha, Mohaddipur, Gorakhpur, Uttar Pradesh 273008
              </p>
              <div className="deck-download-box">
                <button className="btn-deck-download" onClick={onOpenContact}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  <span>Download Service Brochure</span>
                </button>
              </div>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="footer-copyright-bar">
            <p>Copyright © 2018–2026 Click On Media. All rights reserved.</p>
            <p className="footer-tagline-small">Click On Media — Your Digital Growth Partner</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
