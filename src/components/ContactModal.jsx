import React, { useState, useEffect } from 'react';
import '../styles/ContactModal.css';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'digital-growth'
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

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          &times;
        </button>

        <div className="modal-header">
          <h3>Partner With <span className="gradient-text">Click On Media</span></h3>
          <p>Let's scale your brand with revenue-driven media and digital performance.</p>
        </div>

        {isSubmitted ? (
          <div className="modal-success-message">
            <div className="success-icon">✓</div>
            <h4>Thank you!</h4>
            <p>Our growth strategist will connect with you within 24 hours.</p>
          </div>
        ) : (
          <form className="modal-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="clientName">Full Name</label>
              <input 
                type="text" 
                id="clientName" 
                placeholder="e.g. John Doe" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="clientEmail">Work Email</label>
              <input 
                type="email" 
                id="clientEmail" 
                placeholder="e.g. john@company.com" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="clientService">Interested Service</label>
              <select 
                id="clientService"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="digital-growth">Full Digital Growth Strategy</option>
                <option value="performance-ads">Performance Marketing & Ads</option>
                <option value="brand-media">Brand Media & Content Production</option>
                <option value="seo-organic">SEO & Organic Reach</option>
              </select>
            </div>

            <button type="submit" className="btn btn-submit">
              Schedule Free Strategy Call
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
