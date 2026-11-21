import React, { useState, useEffect } from 'react';
import '../styles/ContactModal.css';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'website-dev',
    mode: 'phone-call',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
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
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: 'website-dev',
      mode: 'phone-call',
      message: ''
    });
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Click On Media! I would like to book a Free Growth Consultation.\nName: ${formData.name || 'Client'}\nPhone: ${formData.phone || 'Direct'}\nInterested Service: ${formData.service}`
  );

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box modal-consultation" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        {isSubmitted ? (
          <div className="modal-success-container">
            <div className="success-icon-animated">✓</div>
            <span className="success-badge">CONSULTATION CONFIRMED</span>
            <h3 className="success-title">Thank You, <span className="gradient-text">{formData.name}</span>!</h3>
            <p className="success-desc">
              Your Free 1-on-1 Strategy Session request has been logged. Our Senior Growth Strategist in Gorakhpur will connect with you within <strong>15-30 minutes</strong> at <strong>{formData.phone}</strong>.
            </p>

            <div className="success-action-buttons">
              <a 
                href={`https://wa.me/918303534063?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-modal-wa"
              >
                <span>Connect on WhatsApp Now</span>
                <span className="wa-arrow">→</span>
              </a>

              <button 
                type="button" 
                className="btn-modal-done"
                onClick={handleReset}
              >
                Close Window
              </button>
            </div>

            <div className="modal-trust-footer">
              <p>📍 Office: Near Adalat Restaurant, Mohaddipur, Gorakhpur</p>
              <p>📞 Direct: +91 8303534063, 7905382491</p>
            </div>
          </div>
        ) : (
          <div className="modal-inner-content">
            {/* Modal Header */}
            <div className="modal-header">
              <div className="modal-eyebrow">
                <span className="modal-sparkle">✦</span>
                <span>100% FREE STRATEGY SESSION</span>
                <span className="modal-dot" />
              </div>
              <h2 className="modal-main-title">
                Get Your Free <span className="gradient-text">Growth Consultation</span>
              </h2>
              <p className="modal-subtitle">
                Talk directly to Click On Media experts. Discover the right digital roadmap to scale your business, traffic, and revenue in Gorakhpur and beyond.
              </p>
            </div>

            {/* Quick Instant Contact Options */}
            <div className="modal-quick-contacts">
              <a href="tel:+918303534063" className="quick-contact-pill call-pill">
                <span className="quick-icon">📞</span>
                <div className="quick-text">
                  <span className="quick-label">Call Directly</span>
                  <span className="quick-val">+91 8303534063</span>
                </div>
              </a>

              <a 
                href="https://wa.me/918303534063?text=Hi%20Click%20On%20Media,%20I%20want%20to%20get%20a%20Free%20Consultation%20for%20my%20business." 
                target="_blank" 
                rel="noopener noreferrer"
                className="quick-contact-pill wa-pill"
              >
                <span className="quick-icon">💬</span>
                <div className="quick-text">
                  <span className="quick-label">WhatsApp Chat</span>
                  <span className="quick-val">Instant Reply</span>
                </div>
              </a>
            </div>

            <div className="modal-divider">
              <span>OR FILL THE FORM FOR A DETAILED AUDIT</span>
            </div>

            {/* Comprehensive Consultation Form */}
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="clientName">Your Name / आपका नाम *</label>
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
                  <label htmlFor="clientPhone">Phone / WhatsApp Number *</label>
                  <input 
                    type="tel" 
                    id="clientPhone" 
                    placeholder="+91 98765 43210" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label htmlFor="clientEmail">Email Address (Optional)</label>
                  <input 
                    type="email" 
                    id="clientEmail" 
                    placeholder="e.g. rahul@company.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="clientService">Interested Service / सेवा चुनें *</label>
                  <select 
                    id="clientService"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="website-dev">Website Development (Custom & WordPress)</option>
                    <option value="software-dev">Custom Software & Web Application</option>
                    <option value="crm-solutions">CRM Solutions & Business Automation</option>
                    <option value="social-media">Social Media Marketing & Management</option>
                    <option value="meta-google-ads">High-ROI Meta & Google Ads</option>
                    <option value="whatsapp-bulk">WhatsApp Bulk Messaging & API</option>
                    <option value="graphics-design">Graphic Designing & Branding</option>
                    <option value="video-editing">4K Video Editing & Viral Reels</option>
                    <option value="seo-services">SEO (Google Ranking & GMB Maps)</option>
                    <option value="monetization">YouTube & Digital Monetization</option>
                    <option value="courses">Full-Stack & MERN Courses Training</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Preferred Consultation Mode</label>
                <div className="consultation-modes-grid">
                  <label className={`mode-choice ${formData.mode === 'phone-call' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="mode" 
                      value="phone-call" 
                      checked={formData.mode === 'phone-call'}
                      onChange={() => setFormData({ ...formData, mode: 'phone-call' })}
                    />
                    <span>📞 Phone Call</span>
                  </label>

                  <label className={`mode-choice ${formData.mode === 'whatsapp' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="mode" 
                      value="whatsapp" 
                      checked={formData.mode === 'whatsapp'}
                      onChange={() => setFormData({ ...formData, mode: 'whatsapp' })}
                    />
                    <span>💬 WhatsApp</span>
                  </label>

                  <label className={`mode-choice ${formData.mode === 'office-visit' ? 'selected' : ''}`}>
                    <input 
                      type="radio" 
                      name="mode" 
                      value="office-visit" 
                      checked={formData.mode === 'office-visit'}
                      onChange={() => setFormData({ ...formData, mode: 'office-visit' })}
                    />
                    <span>🏢 Office Visit</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="clientMessage">Tell us about your business or goals (Optional)</label>
                <textarea 
                  id="clientMessage" 
                  rows="2"
                  placeholder="e.g. Looking for a high-converting website and Instagram ads to increase local sales."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-consultation-submit">
                <span>Book Free Strategy Consultation</span>
                <span className="submit-arrow">→</span>
              </button>
            </form>

            <div className="modal-trust-footer">
              <div className="trust-item">
                <span className="trust-bullet">⚡</span>
                <span>Fast Response: 15-30 Mins</span>
              </div>
              <div className="trust-item">
                <span className="trust-bullet">🔒</span>
                <span>100% Confidential & Free</span>
              </div>
              <div className="trust-item">
                <span className="trust-bullet">📍</span>
                <span>Mohaddipur, Gorakhpur</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
