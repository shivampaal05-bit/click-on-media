import React, { useState, useEffect } from 'react';
import '../styles/ContactModal.css';

const SERVICES_LIST = [
  'Social Media Marketing',
  'Website Development',
  'WhatsApp Bulk Messaging',
  'Graphics Designing',
  'Video Editing',
  'SEO - Website + Google My Business',
  'Ads - Website + Insta, FB, WhatsApp',
  'Software Development',
  'CRM Solutions',
  'Monetization'
];

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    service: 'Social Media Marketing',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showOriginalCard, setShowOriginalCard] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setShowOriginalCard(false);
    setFormData({
      name: '',
      phone: '',
      business: '',
      service: 'Social Media Marketing',
      message: ''
    });
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Click On Media! I want to get a Free Consultation.\n\n👤 Name: ${formData.name || 'Client'}\n📱 Phone: ${formData.phone || 'Direct'}\n🏢 Business: ${formData.business || 'New Client'}\n💼 Interested In: ${formData.service}\n📝 Requirement: ${formData.message || 'Free Growth Audit'}`
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box modal-consultation-grand" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        {isSubmitted ? (
          /* ================= SUCCESS CONFIRMATION SCREEN ================= */
          <div className="modal-success-container">
            <div className="success-icon-animated">✓</div>
            <span className="success-badge">FREE CONSULTATION CONFIRMED</span>
            <h3 className="success-title">
              Thank You, <span className="gradient-text">{formData.name}</span>!
            </h3>
            <p className="success-desc">
              Your consultation request for <strong>{formData.service}</strong> has been received! Our Senior Growth Consultant will contact you at <strong>{formData.phone}</strong> within <strong>15–30 minutes</strong>.
            </p>

            <div className="success-action-buttons">
              <a 
                href={`https://wa.me/918303534063?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-modal-wa"
              >
                <svg className="social-svg-btn" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.33 7.33 9 7.4 8.74 7.69C8.48 7.97 7.75 8.66 7.75 10.06C7.75 11.46 8.77 12.81 8.91 13C9.05 13.2 10.92 16.08 13.79 17.32C14.47 17.62 15.01 17.8 15.42 17.93C16.11 18.15 16.73 18.12 17.23 18.05C17.78 17.96 18.94 17.34 19.18 16.66C19.42 15.97 19.42 15.38 19.35 15.26C19.28 15.14 19.08 15.07 18.79 14.93C18.5 14.78 17.06 14.07 16.79 13.97C16.53 13.88 16.33 13.83 16.14 14.12C15.94 14.41 15.37 15.07 15.19 15.26C15.02 15.46 14.85 15.48 14.56 15.34C14.26 15.19 13.33 14.89 12.22 13.9C11.36 13.13 10.78 12.18 10.61 11.89C10.45 11.6 10.59 11.44 10.74 11.3C10.87 11.17 11.03 10.95 11.18 10.78C11.32 10.61 11.37 10.49 11.47 10.29C11.57 10.1 11.52 9.92 11.45 9.78C11.37 9.63 10.8 8.24 10.56 7.65C10.33 7.08 10.09 7.16 9.92 7.15C9.76 7.15 9.56 7.33 9.53 7.33Z"/>
                </svg>
                <span>Connect on WhatsApp Now</span>
              </a>

              <button 
                type="button" 
                className="btn-modal-done"
                onClick={handleReset}
              >
                Close Window
              </button>
            </div>

            <div className="modal-trust-footer-center">
              <p>📍 Near Adalat Restaurant, Pipal Dada, Shri Ganga Tiraha, Mohaddipur, Gorakhpur - 273008</p>
              <p>📞 Call: +91 8303534063, 7905382491</p>
            </div>
          </div>
        ) : (
          /* ================= MAIN CONSULTATION 2-COLUMN MODAL ================= */
          <div className="modal-two-col-layout">
            
            {/* ---------------- LEFT COLUMN: OFFICIAL BRAND & DIRECT CONTACT CARD ---------------- */}
            <div className="modal-brand-col">
              {/* Official Brand Header matching Flyer */}
              <div className="brand-flyer-header">
                <div className="brand-logo-title-wrap">
                  <div className="flyer-c-logo">
                    <svg className="c-svg-emblem" viewBox="0 0 60 60" fill="none">
                      <defs>
                        <linearGradient id="cBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#0284c7" />
                        </linearGradient>
                        <linearGradient id="cOrangeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ff7a00" />
                          <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                      </defs>
                      {/* Outer circular swoosh 'C' */}
                      <path 
                        d="M 46 16 C 38 7 20 8 13 18 C 6 28 8 44 20 50 C 30 55 42 50 46 42" 
                        stroke="url(#cBlueGrad)" 
                        strokeWidth="6.5" 
                        strokeLinecap="round" 
                      />
                      {/* Bar chart columns */}
                      <rect x="23" y="32" width="3" height="10" rx="1.5" fill="#38bdf8" />
                      <rect x="28.5" y="27" width="3" height="15" rx="1.5" fill="#38bdf8" />
                      <rect x="34" y="21" width="3" height="21" rx="1.5" fill="#38bdf8" />
                      {/* Growth arrow */}
                      <path 
                        d="M 17 38 L 47 14 M 47 14 L 37 13 M 47 14 L 46 24" 
                        stroke="url(#cOrangeGrad)" 
                        strokeWidth="3.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                      {/* Pointer cursor */}
                      <path 
                        d="M 27 22 L 31 30 L 28 31 L 27 22 Z" 
                        fill="#0284c7" 
                      />
                    </svg>
                  </div>
                  <div className="flyer-brand-names">
                    <h3 className="flyer-clickon">Click On</h3>
                    <h4 className="flyer-media">MEDIA</h4>
                  </div>
                </div>
                <div className="flyer-tagline">
                  <span>Your Digital Growth Partner</span>
                </div>
              </div>

              {/* Direct Phone Numbers matching Flyer */}
              <div className="flyer-contact-row">
                <div className="flyer-contact-icon phone-glow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="flyer-phones-list">
                  <a href="tel:+918303534063" className="phone-link-bold">+91 8303534063</a>
                  <span className="phone-sep">,</span>
                  <a href="tel:+917905382491" className="phone-link-bold">7905382491</a>
                </div>
              </div>

              {/* Official Gorakhpur Address matching Flyer (Clickable to Google Maps) */}
              <div className="flyer-address-row">
                <div className="flyer-contact-icon pin-glow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <a 
                  href="https://maps.google.com/?q=Near+Adalat+Restaurant,+Pipal+Dada,+Shri+Ganga+Tiraha,+Mohaddipur,+Gorakhpur,+Uttar+Pradesh+273008" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flyer-address-text"
                  title="Click to view location on Google Maps"
                >
                  Near Adalat Restaurant, Pipal Dada, Shri Ganga Tiraha, Mohaddipur, Gorakhpur, Uttar Pradesh 273008
                </a>
              </div>

              {/* Social Media Channels (WhatsApp, Instagram, Facebook, Phone) */}
              <div className="modal-socials-box">
                <span className="socials-label">Connect Instantly With Us:</span>
                <div className="socials-icons-grid">
                  {/* WhatsApp */}
                  <a 
                    href="https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I%20want%20to%20get%20a%20Free%20Consultation%20for%20my%20business." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn social-wa"
                    title="Chat on WhatsApp (+91 8303534063)"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.33 7.33 9 7.4 8.74 7.69C8.48 7.97 7.75 8.66 7.75 10.06C7.75 11.46 8.77 12.81 8.91 13C9.05 13.2 10.92 16.08 13.79 17.32C14.47 17.62 15.01 17.8 15.42 17.93C16.11 18.15 16.73 18.12 17.23 18.05C17.78 17.96 18.94 17.34 19.18 16.66C19.42 15.97 19.42 15.38 19.35 15.26C19.28 15.14 19.08 15.07 18.79 14.93C18.5 14.78 17.06 14.07 16.79 13.97C16.53 13.88 16.33 13.83 16.14 14.12C15.94 14.41 15.37 15.07 15.19 15.26C15.02 15.46 14.85 15.48 14.56 15.34C14.26 15.19 13.33 14.89 12.22 13.9C11.36 13.13 10.78 12.18 10.61 11.89C10.45 11.6 10.59 11.44 10.74 11.3C10.87 11.17 11.03 10.95 11.18 10.78C11.32 10.61 11.37 10.49 11.47 10.29C11.57 10.1 11.52 9.92 11.45 9.78C11.37 9.63 10.8 8.24 10.56 7.65C10.33 7.08 10.09 7.16 9.92 7.15C9.76 7.15 9.56 7.33 9.53 7.33Z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>

                  {/* Instagram */}
                  <a 
                    href="https://www.instagram.com/clickonmedia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn social-insta"
                    title="Follow on Instagram (@clickonmedia)"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>

                  {/* Facebook */}
                  <a 
                    href="https://www.facebook.com/clickonmedia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn social-fb"
                    title="Connect on Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>

                  {/* Call Direct */}
                  <a 
                    href="tel:+918303534063" 
                    className="social-btn social-phone"
                    title="Call directly (+91 8303534063)"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>Call Us</span>
                  </a>
                </div>
              </div>

              {/* Toggle to view printed card image */}
              <div className="card-toggle-wrap">
                <button 
                  type="button" 
                  className="btn-toggle-flyer-card"
                  onClick={() => setShowOriginalCard(!showOriginalCard)}
                >
                  {showOriginalCard ? '◂ Show Interactive Details' : '🖼️ View Original Printed Card Photo'}
                </button>
              </div>

              {showOriginalCard ? (
                <div className="original-card-view">
                  <img 
                    src="/assets/clickonmedia-official-card.jpg" 
                    alt="Click On Media Official Card" 
                    className="original-card-img" 
                  />
                </div>
              ) : (
                /* QR Code & "scan me" Section matching Flyer */
                <div className="flyer-qr-wrapper">
                  <a 
                    href="https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I%20scanned%20your%20QR%20code%20for%20Free%20Consultation."
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="qr-card-link"
                    title="Click or Scan with WhatsApp"
                  >
                    <img 
                      src="/assets/clickonmedia-qr.jpg" 
                      alt="Scan me on WhatsApp" 
                      className="qr-image"
                    />
                    <div className="qr-badge">
                      <span>scan me</span>
                      <span className="qr-sub">or click to chat</span>
                    </div>
                  </a>

                  {/* Services list matching Flyer */}
                  <div className="flyer-services-box">
                    <div className="our-services-header">
                      <span>Our Services</span>
                    </div>
                    <ul className="flyer-services-list">
                      {SERVICES_LIST.map((srv, idx) => (
                        <li key={idx} className="flyer-service-item">
                          <span className="service-dot">•</span>
                          <span>{srv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

            </div>

            {/* ---------------- RIGHT COLUMN: CONSULTATION BOOKING FORM ---------------- */}
            <div className="modal-form-col">
              <div className="form-header">
                <div className="modal-eyebrow">
                  <span className="modal-sparkle">✦</span>
                  <span>100% FREE STRATEGY SESSION</span>
                  <span className="modal-dot" />
                </div>
                <h3 className="form-title">
                  Schedule Your Free <span className="gradient-text">Growth Call</span>
                </h3>
                <p className="form-subtitle">
                  Fill in your details below. Our strategist in Gorakhpur will contact you with a customized digital growth plan.
                </p>
              </div>

              <form className="modal-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="clientName">Full Name / आपका नाम *</label>
                  <input 
                    type="text" 
                    id="clientName" 
                    placeholder="e.g. Rahul Sharma" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="clientPhone">Mobile / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    id="clientPhone" 
                    placeholder="+91 83035 34063" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="clientBusiness">Business / Shop Name (Optional)</label>
                  <input 
                    type="text" 
                    id="clientBusiness" 
                    placeholder="e.g. Sharma Sarees / Hotel Nirvana / Startup" 
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="clientService">Select Service / सेवा चुनें *</label>
                  <select 
                    id="clientService"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    {SERVICES_LIST.map((srv, idx) => (
                      <option key={idx} value={srv}>{srv}</option>
                    ))}
                    <option value="Complete Digital Solutions">All Services (Complete Digital Growth Bundle)</option>
                    <option value="Full-Stack Courses">Full-Stack & MERN Courses Training</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="clientMessage">Your Requirement / मैसेज (Optional)</label>
                  <textarea 
                    id="clientMessage" 
                    rows="2"
                    placeholder="e.g. Want more sales from Instagram ads and a high-converting website."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn-consultation-submit">
                  <span>Claim Free Growth Consultation</span>
                  <span className="submit-arrow">→</span>
                </button>
              </form>

              {/* Trust Badges */}
              <div className="modal-trust-footer">
                <div className="trust-item">
                  <span className="trust-bullet">⚡</span>
                  <span>Response in 15–30 Mins</span>
                </div>
                <div className="trust-item">
                  <span className="trust-bullet">🔒</span>
                  <span>100% Confidential</span>
                </div>
                <div className="trust-item">
                  <span className="trust-bullet">📍</span>
                  <span>Mohaddipur, Gorakhpur</span>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
