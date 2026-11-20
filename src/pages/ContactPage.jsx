import React, { useState } from 'react';
import '../styles/ContactPage.css';

export default function ContactPage({ onNavigateHome }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="contact-page-wrapper">
      {/* 1. Page Header matching video frame */}
      <section className="contact-hero-section">
        <div className="contact-page-container">
          <div className="contact-eyebrow-badge">
            <span className="eyebrow-dot"></span>
            <span>CONTACT US • GORAKHPUR</span>
          </div>
          <h1 className="contact-main-heading">
            Click On Media Best Digital Marketing &amp; Software Development Company In Gorakhpur
          </h1>
          <p className="contact-sub-text">
            Have questions about digital marketing, custom software, SEO, or media production? 
            Connect with our core team directly.
          </p>
        </div>
      </section>

      {/* 2. Top 3 Contact Cards (Address, Call Now, Email Us) matching video layout */}
      <section className="contact-cards-section">
        <div className="contact-page-container">
          <div className="contact-cards-grid">
            
            {/* Card 1: Address */}
            <div className="contact-info-card">
              <div className="card-top-header">
                <h3 className="card-title">Address</h3>
                <div className="card-icon-circle address-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
              </div>
              <div className="card-content-area">
                <ul className="address-list">
                  <li>
                    <span className="bullet-point">•</span>
                    <span>Near Adalat Restaurant, Pipal Dada, Shri Ganga Tiraha, Mohaddipur, Gorakhpur, Uttar Pradesh 273008</span>
                  </li>
                </ul>
              </div>
              <div className="card-image-box">
                <img 
                  src="/assets/contact/contact-address.jpg" 
                  alt="Click On Media Gorakhpur Location Navigation" 
                  className="card-media-img" 
                />
              </div>
            </div>

            {/* Card 2: Call Now */}
            <div className="contact-info-card">
              <div className="card-top-header">
                <h3 className="card-title">Call Now</h3>
                <div className="card-icon-circle phone-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </div>
              <div className="card-content-area">
                <div className="phone-links-list">
                  <a href="tel:+918303534063" className="contact-data-link">
                    +91 8303534063
                  </a>
                  <a 
                    href="https://wa.me/918303534063?text=Hi%20Click%20On%20Media!%20I%20want%20to%20inquire%20about%20your%20services." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-whatsapp-badge"
                  >
                    <span>Chat on WhatsApp →</span>
                  </a>
                </div>
              </div>
              <div className="card-image-box">
                <img 
                  src="/assets/contact/contact-call.jpg" 
                  alt="Customer Support Desk Click On Media" 
                  className="card-media-img" 
                />
              </div>
            </div>

            {/* Card 3: Email Us */}
            <div className="contact-info-card">
              <div className="card-top-header">
                <h3 className="card-title">Email Us</h3>
                <div className="card-icon-circle email-icon-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </div>
              </div>
              <div className="card-content-area">
                <div className="email-links-list">
                  <a href="mailto:mailid-clickonmedia3@gmail.com" className="contact-data-link">
                    mailid-clickonmedia3@gmail.com
                  </a>
                  <a href="mailto:info@clickonmedia.in" className="contact-data-link">
                    info@clickonmedia.in
                  </a>
                </div>
              </div>
              <div className="card-image-box">
                <img 
                  src="/assets/contact/contact-email.jpg" 
                  alt="Email Support Click On Media" 
                  className="card-media-img" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Form & "Get In Touch With Us Today" Section matching video */}
      <section className="contact-form-section">
        <div className="contact-page-container">
          <div className="contact-form-grid">
            
            {/* Left Column: Headline, Bio & Social Follow */}
            <div className="contact-narrative-col">
              <span className="contact-badge-pill">Contact Us</span>
              <h2 className="narrative-heading">
                Get in touch with us today
              </h2>
              <p className="narrative-text">
                Ready to transform your digital landscape? Whether you're looking to enhance your online presence 
                or develop cutting-edge software solutions, our team of experts is here to help. Get in touch with us 
                today to discover how we can drive your business forward with innovative strategies and state-of-the-art technology.
              </p>

              <div className="contact-socials-block">
                <h4 className="socials-title">Follow Us:</h4>
                <div className="socials-icons-row">
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn facebook" 
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn instagram" 
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn youtube" 
                    aria-label="YouTube"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#fff"></polygon>
                    </svg>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-icon-btn linkedin" 
                    aria-label="LinkedIn"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form matching video */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                {submitted ? (
                  <div className="form-success-banner">
                    <div className="success-icon-badge">✓</div>
                    <h3>Thank you for reaching out!</h3>
                    <p>Your message has been sent successfully. Our Gorakhpur consulting team will contact you within 24 hours.</p>
                    <button 
                      type="button" 
                      className="btn-form-reset"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-actual-form">
                    <div className="form-row-two-col">
                      <div className="form-field-group">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName" 
                          placeholder="First Name" 
                          value={formData.firstName}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="form-field-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          name="lastName" 
                          placeholder="Last Name" 
                          value={formData.lastName}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>

                    <div className="form-row-two-col">
                      <div className="form-field-group">
                        <label htmlFor="phone">Phone</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          placeholder="Phone Number" 
                          value={formData.phone}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                      <div className="form-field-group">
                        <label htmlFor="email">Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          placeholder="Email Address" 
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                      </div>
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="subject">Subjects</label>
                      <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        placeholder="Subjects / Requirement" 
                        value={formData.subject}
                        onChange={handleChange}
                        required 
                      />
                    </div>

                    <div className="form-field-group">
                      <label htmlFor="message">Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="5" 
                        placeholder="Describe your project, website goals, or software needs..." 
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn-send-message" disabled={loading}>
                      <span>{loading ? 'Sending...' : 'Send A Message'}</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="btn-arrow-icon">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Bottom Map / Navigation Bar */}
      <section className="contact-office-banner">
        <div className="contact-page-container">
          <div className="office-banner-content">
            <div className="office-text">
              <span className="office-tag">VISIT OUR GORAKHPUR HEADQUARTERS</span>
              <h3>Near Adalat Restaurant, Pipal Dada, Shri Ganga Tiraha, Mohaddipur, Gorakhpur (UP) 273008</h3>
              <p>Open Monday – Saturday: 10:00 AM – 7:30 PM | Direct Hotline: +91 8303534063</p>
            </div>
            <div className="office-actions">
              <a 
                href="https://maps.google.com/?q=Mohaddipur+Gorakhpur+Click+On+Media" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-office-map"
              >
                <span>Get Driving Directions ↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
