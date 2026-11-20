import React, { useState } from 'react';
import '../styles/CrmSolutionsPage.css';

export default function CrmSolutionsPage({ onOpenContact, onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx));
  };

  const crmFeatures = [
    {
      title: 'Automated Lead Management',
      desc: 'Capture leads automatically from Google Ads, Meta (FB & Instagram), Website Forms, and WhatsApp into one unified dashboard.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <line x1="19" y1="8" x2="19" y2="14"></line>
          <line x1="22" y1="11" x2="16" y2="11"></line>
        </svg>
      )
    },
    {
      title: 'Sales Pipeline & Deal Tracking',
      desc: 'Visual Kanban boards to track prospect status, deal stages, quotation proposals, follow-up reminders, and closing probability.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      )
    },
    {
      title: 'GST Invoicing & Billing Integration',
      desc: 'Generate professional GST invoices, delivery challans, payment links, and track pending dues with automatic payment reminders.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
      )
    },
    {
      title: 'WhatsApp & SMS Auto-Notifications',
      desc: 'Instant WhatsApp order receipts, dispatch updates, appointment reminders, and promotional bulk campaigns directly from CRM.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      )
    },
    {
      title: 'Role-Based Staff Access & KPI',
      desc: 'Granular permissions for sales reps, accountants, managers, and admins with staff performance logs and commission tracking.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      title: 'Lifetime Cloud Assurance & Backups',
      desc: 'Encrypted cloud storage hosted on AWS / Google Cloud with automated daily backups ensuring your business data is 100% safe forever.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
        </svg>
      )
    }
  ];

  const crmShowcases = [
    {
      title: 'Billing & Accounting CRM',
      subtitle: 'Inventory, GST & Retail Pos Software',
      img: '/assets/all-services/billing.PNG',
      desc: 'Engineered for wholesale distributors, retail supermarkets, and manufacturers across Gorakhpur. Includes barcode generation, stock tracking, and ledger reports.'
    },
    {
      title: 'bSchool ERP & Institution CRM',
      subtitle: 'Complete School & College Management',
      img: '/assets/all-services/school-software.gif',
      desc: 'Automates student admissions, online fee payments with SMS receipts, attendance biometric sync, report cards, and parent communication portal.'
    }
  ];

  const crmPackages = [
    {
      name: 'Starter CRM',
      badge: 'Small Business',
      price: '₹14,999',
      billing: 'one-time setup + cloud',
      features: [
        'Up to 3 Staff User Logins',
        'Lead Capture from Website & WhatsApp',
        'Customer Database & History',
        'Basic Invoicing & Quotations',
        'Standard Email Support'
      ]
    },
    {
      name: 'Business Pro CRM',
      badge: 'Most Popular',
      price: '₹29,999',
      billing: 'complete bespoke deployment',
      isPopular: true,
      features: [
        'Up to 15 Staff User Logins',
        'Full Sales Pipeline & Kanban Funnel',
        'Official WhatsApp API Integration',
        'Automated GST Invoicing & Payment Links',
        'Custom Roles & Staff Commission Reports',
        'Priority Phone & On-Site Support'
      ]
    },
    {
      name: 'Enterprise Custom CRM',
      badge: 'Large Organizations',
      price: 'Custom Quote',
      billing: 'tailored architecture',
      features: [
        'Unlimited Staff & Multi-Branch Access',
        'Custom ERP & Inventory Module',
        'Dedicated Cloud Server (AWS / GCP)',
        'Biometric / Hardware Device Sync',
        'Mobile App (Android & iOS) Companion',
        '24/7 Dedicated Account Engineer'
      ]
    }
  ];

  const faqs = [
    {
      q: 'What is a CRM and how will it help my business in Gorakhpur?',
      a: 'A CRM (Customer Relationship Management) system organizes all your customer leads, inquiry calls, sales pipelines, orders, and payment records into one centralized software. It ensures no customer inquiry is forgotten, automates follow-up messages on WhatsApp, and boosts sales conversions by up to 40%.'
    },
    {
      q: 'Can the CRM integrate with our WhatsApp and Google / Meta Ads?',
      a: 'Yes! Whenever a prospect clicks on your Facebook, Instagram, or Google ad and fills out a form or messages your WhatsApp, their details are instantly captured in your CRM dashboard with lead source tagging and automated welcome messages.'
    },
    {
      q: 'Is our business data secure and backed up?',
      a: 'Absolutely. We host your CRM on enterprise cloud servers with 256-bit SSL encryption, automated daily offsite backups, and strict role-based access control so only authorized staff can see sensitive financial figures.'
    },
    {
      q: 'Do you provide local training and support in Gorakhpur?',
      a: 'Yes, our Gorakhpur technical team provides on-site staff training at your office, user documentation, and lifetime telephone and WhatsApp technical support.'
    }
  ];

  return (
    <div className="crm-page-wrapper">
      
      {/* Breadcrumb Navigation */}
      <div className="webdev-breadcrumb-bar">
        <div className="crm-container breadcrumb-inner">
          <button type="button" className="breadcrumb-home-link" onClick={onNavigateHome}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">CRM Solutions</span>
        </div>
      </div>

      {/* 1. Hero Section with Video */}
      <section className="crm-hero-section">
        <div className="crm-container">
          <div className="crm-hero-grid">
            
            <div className="crm-hero-content">
              <div className="crm-eyebrow-badge">
                <span className="badge-dot"></span>
                <span>ENTERPRISE CRM &amp; BUSINESS SOFTWARE</span>
              </div>
              <h1 className="crm-main-title">
                Smart <span className="title-logo-gradient">CRM Solutions</span> to Scale Your Sales &amp; Operations
              </h1>
              <p className="crm-hero-desc">
                Never lose a customer lead again. Track inquiries, automate WhatsApp follow-ups, 
                generate GST bills, and monitor team performance with Click On Media's bespoke CRM systems in Gorakhpur.
              </p>
              <div className="crm-actions-row">
                <button type="button" className="btn-crm-primary" onClick={onOpenContact}>
                  Book Free CRM Demo →
                </button>
                <a href="tel:+918303534063" className="btn-crm-secondary">
                  Call: +91 8303534063
                </a>
              </div>
            </div>

            <div className="crm-hero-visual">
              <div className="crm-video-card">
                <video 
                  className="crm-preview-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  poster="/assets/software-dev.jpg"
                >
                  <source src="/assets/service-software.mp4" type="video/mp4" />
                </video>
                <div className="crm-floating-badge">
                  <span className="crm-pulse-dot"></span>
                  <span>99.9% Cloud Uptime SLA</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Features Grid */}
      <section className="crm-features-section">
        <div className="crm-container">
          <div className="crm-center-header">
            <span className="crm-tag">CORE CAPABILITIES</span>
            <h2 className="crm-section-title">
              Everything Your Business Needs to <span className="title-logo-gradient">Automate &amp; Grow</span>
            </h2>
          </div>

          <div className="crm-features-grid">
            {crmFeatures.map((feat, idx) => (
              <div className="crm-feature-card" key={idx}>
                <div className="crm-feature-icon">
                  {feat.icon}
                </div>
                <h3 className="feature-title">{feat.title}</h3>
                <p className="feature-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Live Software Showcase (Billing & School CRM) */}
      <section className="crm-showcase-section">
        <div className="crm-container">
          <div className="crm-center-header">
            <span className="crm-tag">PROVEN IMPLEMENTATIONS</span>
            <h2 className="crm-section-title">
              Deployed Across <span className="title-logo-gradient">Retail, Education &amp; Services</span>
            </h2>
          </div>

          <div className="crm-showcase-grid">
            {crmShowcases.map((showcase, idx) => (
              <div className="crm-showcase-card" key={idx}>
                <div className="showcase-img-box">
                  <img src={showcase.img} alt={showcase.title} className="showcase-img" />
                </div>
                <div className="showcase-content">
                  <span className="showcase-subtitle">{showcase.subtitle}</span>
                  <h3 className="showcase-title">{showcase.title}</h3>
                  <p className="showcase-desc">{showcase.desc}</p>
                  <button type="button" className="btn-showcase-demo" onClick={onOpenContact}>
                    Request Live Walkthrough ↗
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing / Investment Packages */}
      <section className="crm-pricing-section">
        <div className="crm-container">
          <div className="crm-center-header">
            <span className="crm-tag">INVESTMENT PLANS</span>
            <h2 className="crm-section-title">
              Transparent <span className="title-logo-gradient">CRM Packages</span>
            </h2>
          </div>

          <div className="crm-pricing-grid">
            {crmPackages.map((pkg, idx) => (
              <div className={`crm-pricing-card ${pkg.isPopular ? 'popular' : ''}`} key={idx}>
                {pkg.isPopular && <div className="popular-pill">Recommended</div>}
                <span className="pkg-badge">{pkg.badge}</span>
                <h3 className="pkg-name">{pkg.name}</h3>
                <div className="pkg-price-wrap">
                  <span className="pkg-price">{pkg.price}</span>
                  <span className="pkg-billing">/ {pkg.billing}</span>
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
                  Choose {pkg.name} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <section className="crm-faqs-section">
        <div className="crm-container">
          <div className="crm-center-header">
            <span className="crm-tag">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="crm-section-title">
              Common Questions About <span className="title-logo-gradient">CRM Systems</span>
            </h2>
          </div>

          <div className="crm-faqs-list">
            {faqs.map((faq, idx) => (
              <div className={`crm-faq-item ${activeFaq === idx ? 'open' : ''}`} key={idx}>
                <button type="button" className="crm-faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <span className="faq-toggle-icon">{activeFaq === idx ? '−' : '+'}</span>
                </button>
                {activeFaq === idx && (
                  <div className="crm-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA Consultation Bar */}
      <section className="crm-cta-bar">
        <div className="crm-container">
          <div className="crm-cta-content">
            <div className="cta-left">
              <span className="cta-badge">GET STARTED TODAY</span>
              <h3>Ready to automate your business with a custom CRM?</h3>
              <p>Schedule a 30-minute interactive live demo tailored to your business workflow in Gorakhpur.</p>
            </div>
            <div className="cta-right">
              <button type="button" className="btn-cta-white" onClick={onOpenContact}>
                Schedule Live Demo →
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
