import React, { useState } from 'react';
import '../styles/WhatsAppMarketingPage.css';

export default function WhatsAppMarketingPage({ onOpenContact, onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx));
  };

  const whatsappFeatures = [
    {
      title: 'Official Meta WhatsApp Cloud API',
      desc: 'Send authorized bulk promotional and transactional notifications with verified business profile and zero risk of phone number ban.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 12 15 16 10"></polyline>
        </svg>
      )
    },
    {
      title: '98% Open Rate Broadcasts',
      desc: 'Deliver rich media messages (Images, PDFs, Catalogs, Videos, and Interactive Clickable CTA buttons) directly to customers in Gorakhpur and India.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      title: 'Automated Chatbot & Auto-Reply',
      desc: '24/7 AI chatbot responds to customer pricing inquiries, sends digital catalogs, books appointments, and captures lead phone numbers automatically.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2"></rect>
          <circle cx="12" cy="5" r="2"></circle>
          <path d="M12 7v4"></path>
          <line x1="8" y1="16" x2="8" y2="16"></line>
          <line x1="16" y1="16" x2="16" y2="16"></line>
        </svg>
      )
    },
    {
      title: 'Green Tick Verification Assistance',
      desc: 'Complete guidance and documentation support to get official Meta Verified Green Badge for your business brand name.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="9 12 12 15 16 10"></polyline>
        </svg>
      )
    },
    {
      title: 'Click-to-WhatsApp Ads Funnels',
      desc: 'Run targeted Instagram and Facebook Ads that open directly inside WhatsApp chat, driving 5x more immediate paying customer inquiries.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 3 21 3 21 9"></polyline>
          <polyline points="9 21 3 21 3 15"></polyline>
          <line x1="21" y1="3" x2="14" y2="10"></line>
          <line x1="3" y1="21" x2="10" y2="14"></line>
        </svg>
      )
    },
    {
      title: 'Real-Time Delivery & Read Reports',
      desc: 'Live analytical dashboard showing sent, delivered, read, and button click metrics with downloadable Excel reports for your sales team.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      )
    }
  ];

  const packages = [
    {
      name: 'Starter Bulk WhatsApp',
      badge: 'Local Retailers',
      price: '₹4,999',
      features: [
        '10,000 Verified WhatsApp Credits',
        'Official Meta Cloud Setup',
        'Image + Text + Call-to-Action Buttons',
        'Detailed Read Delivery Report',
        'Zero Number Ban Guarantee'
      ]
    },
    {
      name: 'Business Growth Bulk',
      badge: 'Most Popular',
      price: '₹12,499',
      isPopular: true,
      features: [
        '30,000 Verified WhatsApp Credits',
        'Interactive AI Chatbot Auto-Responder',
        'Multi-Agent Web Shared Inbox',
        'CRM & Website Webhook Integration',
        'Custom Message Template Approvals',
        'Dedicated Campaign Manager'
      ]
    },
    {
      name: 'Enterprise Bulk & API',
      badge: 'Institutions & Brands',
      price: '₹24,999',
      features: [
        '1,00,000+ Credits Custom Volume',
        'Green Tick Verification Submission',
        'Full ERP/Software REST API Sync',
        'Automated Transactional Dispatch SMS/WA',
        '24/7 Dedicated Server Infrastructure'
      ]
    }
  ];

  const faqs = [
    {
      q: 'Will my WhatsApp business number get blocked or banned?',
      a: 'No! Unlike unauthorized third-party bulk tools, Click On Media uses the official Meta WhatsApp Business Cloud API. All message templates are pre-approved by Meta, ensuring 100% legal compliance and zero risk of number ban.'
    },
    {
      q: 'Can customers reply to our bulk messages?',
      a: 'Yes! Customers can reply with a single tap using interactive Quick Reply buttons, and your sales team can chat with them live from our shared multi-agent web inbox.'
    }
  ];

  return (
    <div className="wa-page-wrapper">
      
      {/* Breadcrumb Navigation */}
      <div className="webdev-breadcrumb-bar">
        <div className="wa-container breadcrumb-inner">
          <button type="button" className="breadcrumb-home-link" onClick={onNavigateHome}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">WhatsApp Bulk Messaging</span>
        </div>
      </div>

      {/* 1. Hero */}
      <section className="wa-hero-section">
        <div className="wa-container">
          <div className="wa-hero-grid">
            
            <div className="wa-hero-content">
              <div className="wa-eyebrow-badge">
                <span className="badge-dot"></span>
                <span>OFFICIAL META WHATSAPP BULK SOLUTIONS</span>
              </div>
              <h1 className="wa-main-title">
                Reach Thousands Instantly with <span className="title-logo-gradient">WhatsApp Bulk Messaging</span>
              </h1>
              <p className="wa-hero-desc">
                Achieve 98% open rates with official Meta WhatsApp Cloud API broadcasts. 
                Send personalized offers, interactive catalogs, and payment reminders directly to your customers' WhatsApp.
              </p>
              <div className="wa-actions-row">
                <button type="button" className="btn-wa-primary" onClick={onOpenContact}>
                  Launch WhatsApp Campaign →
                </button>
                <a href="https://wa.me/918303534063" target="_blank" rel="noopener noreferrer" className="btn-wa-secondary">
                  Chat With Us
                </a>
              </div>
            </div>

            <div className="wa-hero-visual">
              <div className="wa-video-card">
                <video 
                  className="wa-preview-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  poster="/assets/all-services/socialmediaads.webp"
                >
                  <source src="/assets/service-ads.mp4" type="video/mp4" />
                </video>
                <div className="wa-floating-badge">
                  <span className="wa-badge-check">✓</span>
                  <span>Official Meta Cloud API</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Features */}
      <section className="wa-features-section">
        <div className="wa-container">
          <div className="wa-center-header">
            <span className="wa-tag">BULK BROADCASTING EXCELLENCE</span>
            <h2 className="wa-section-title">
              Why WhatsApp Beats Traditional <span className="title-logo-gradient">SMS &amp; Email</span>
            </h2>
          </div>

          <div className="wa-features-grid">
            {whatsappFeatures.map((feat, idx) => (
              <div className="wa-feature-card" key={idx}>
                <div className="wa-feature-icon">
                  {feat.icon}
                </div>
                <h3 className="feature-title">{feat.title}</h3>
                <p className="feature-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Packages */}
      <section className="wa-pricing-section">
        <div className="wa-container">
          <div className="wa-center-header">
            <span className="wa-tag">AFFORDABLE BROADCAST PLANS</span>
            <h2 className="wa-section-title">
              WhatsApp Bulk <span className="title-logo-gradient">Credit Packages</span>
            </h2>
          </div>

          <div className="wa-pricing-grid">
            {packages.map((pkg, idx) => (
              <div className={`wa-pricing-card ${pkg.isPopular ? 'popular' : ''}`} key={idx}>
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
                  Get Started with {pkg.name} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQs */}
      <section className="wa-faqs-section">
        <div className="wa-container">
          <div className="wa-center-header">
            <span className="wa-tag">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="wa-section-title">
              Everything You Need to Know About <span className="title-logo-gradient">WhatsApp Bulk Messaging</span>
            </h2>
          </div>

          <div className="wa-faqs-list">
            {faqs.map((faq, idx) => (
              <div className={`wa-faq-item ${activeFaq === idx ? 'open' : ''}`} key={idx}>
                <button type="button" className="wa-faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <span className="faq-toggle-icon">{activeFaq === idx ? '−' : '+'}</span>
                </button>
                {activeFaq === idx && (
                  <div className="wa-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Bar */}
      <section className="wa-cta-bar">
        <div className="wa-container">
          <div className="wa-cta-content">
            <div className="cta-left">
              <span className="cta-badge">FAST SETUP IN 24 HOURS</span>
              <h3>Start connecting with your customers on WhatsApp today</h3>
              <p>Speak with our official Meta API integration specialists in Gorakhpur.</p>
            </div>
            <div className="cta-right">
              <button type="button" className="btn-cta-white" onClick={onOpenContact}>
                Contact Our Specialists →
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
