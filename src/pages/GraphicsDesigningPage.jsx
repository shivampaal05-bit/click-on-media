import React, { useState } from 'react';
import '../styles/GraphicsDesigningPage.css';

export default function GraphicsDesigningPage({ onOpenContact, onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx));
  };

  const designServices = [
    {
      title: 'Vector Logo & Brand Identity',
      desc: 'Distinctive, memorable, and trademarkable logos accompanied by typography systems, color theory, and full brand guideline manuals.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m4.93 4.93 4.24 4.24"></path>
          <path d="m14.83 9.17 4.24-4.24"></path>
          <path d="m14.83 14.83 4.24 4.24"></path>
          <path d="m9.17 14.83-4.24 4.24"></path>
          <circle cx="12" cy="12" r="4"></circle>
        </svg>
      )
    },
    {
      title: 'Social Media Posters & Creatives',
      desc: 'High-conversion Instagram & Facebook post designs, story templates, festival greetings, and promotional offers crafted to boost engagement.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      )
    },
    {
      title: 'Outdoor Flex, Hoardings & Banners',
      desc: 'Massive high-resolution print designs for roadside hoardings, shop flex boards, event backdrops, and standees across Gorakhpur.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" y1="22" x2="4" y2="15"></line>
        </svg>
      )
    },
    {
      title: 'Brochures, Flyers & Pamphlets',
      desc: 'Bi-fold, tri-fold, and multi-page corporate marketing brochures designed with structured visual hierarchy and premium print finishes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      title: 'Product Packaging & Label Design',
      desc: 'Custom box packaging, pouch labels, bottle wrappers, and barcode integration that stands out on retail shelves and e-commerce feeds.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    },
    {
      title: 'Company Profile & Pitch Decks',
      desc: 'Investor-ready PowerPoint presentations, PDF company profiles, product catalogs, and corporate annual report designs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    }
  ];

  const packages = [
    {
      name: 'Brand Identity Starter',
      badge: 'New Startups',
      price: '₹5,999',
      features: [
        '3 Custom Vector Logo Concepts',
        'Official Brand Color Palette & Fonts',
        'Business Card & Letterhead Design',
        'Vector Source Files (AI, SVG, PDF, PNG)',
        'Full Copyright Ownership'
      ]
    },
    {
      name: 'Social Media Creative Suite',
      badge: 'Most Popular',
      price: '₹14,999',
      isPopular: true,
      features: [
        '30 High-Resolution Social Media Posters',
        'Festival & Promotional Creative Banners',
        'Story & Highlight Covers Design',
        'Ad Creative Variants for Meta Ads',
        'Dedicated Senior Graphic Designer'
      ]
    },
    {
      name: 'Corporate Branding Kit',
      badge: 'Enterprises',
      price: '₹24,999',
      features: [
        'Complete Logo + Identity Guideline Book',
        'Company Profile PDF (up to 12 Pages)',
        'Outdoor Hoarding / Flex Banner Designs',
        'Product Catalog & Packaging Artwork',
        'Unlimited Revision Rounds'
      ]
    }
  ];

  const faqs = [
    {
      q: 'Do you provide editable source files for all designs?',
      a: 'Yes! Upon project completion, we hand over full editable vector files including Adobe Illustrator (.AI), CorelDRAW (.CDR), PDF, and high-resolution PNG/JPG formats.'
    },
    {
      q: 'What if I need revisions on a logo or poster?',
      a: 'We offer multiple initial creative directions and include free revision rounds to ensure the final output aligns 100% with your brand vision.'
    }
  ];

  return (
    <div className="graphics-page-wrapper">
      
      {/* Breadcrumb Navigation */}
      <div className="webdev-breadcrumb-bar">
        <div className="graphics-container breadcrumb-inner">
          <button type="button" className="breadcrumb-home-link" onClick={onNavigateHome}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Graphics Designing</span>
        </div>
      </div>

      {/* 1. Hero */}
      <section className="graphics-hero-section">
        <div className="graphics-container">
          <div className="graphics-hero-grid">
            
            <div className="graphics-hero-content">
              <div className="graphics-eyebrow-badge">
                <span className="badge-dot"></span>
                <span>BRAND IDENTITY &amp; GRAPHIC DESIGN</span>
              </div>
              <h1 className="graphics-main-title">
                Visuals that Build Trust &amp; <span className="title-logo-gradient">Drive Sales</span>
              </h1>
              <p className="graphics-hero-desc">
                From trademarkable vector logos and high-CTR social posters to outdoor flex hoardings and corporate profiles. 
                Click On Media crafts compelling visual branding that commands attention across Gorakhpur and India.
              </p>
              <div className="graphics-actions-row">
                <button type="button" className="btn-graphics-primary" onClick={onOpenContact}>
                  Get Design Consultation →
                </button>
                <a href="tel:+918303534063" className="btn-graphics-secondary">
                  Call: +91 8303534063
                </a>
              </div>
            </div>

            <div className="graphics-hero-visual">
              <div className="graphics-video-card">
                <video 
                  className="graphics-preview-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  poster="/assets/branding-creative.jpg"
                >
                  <source src="/assets/service-design.mp4" type="video/mp4" />
                </video>
                <div className="graphics-floating-badge">
                  <span className="design-dot"></span>
                  <span>100% Vector &amp; Print-Ready</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="graphics-services-section">
        <div className="graphics-container">
          <div className="graphics-center-header">
            <span className="graphics-tag">DESIGN SERVICES</span>
            <h2 className="graphics-section-title">
              Complete <span className="title-logo-gradient">Graphic Design Solutions</span>
            </h2>
          </div>

          <div className="graphics-services-grid">
            {designServices.map((srv, idx) => (
              <div className="graphics-service-card" key={idx}>
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
      <section className="graphics-pricing-section">
        <div className="graphics-container">
          <div className="graphics-center-header">
            <span className="graphics-tag">AFFORDABLE DESIGN PLANS</span>
            <h2 className="graphics-section-title">
              Graphic Designing <span className="title-logo-gradient">Packages</span>
            </h2>
          </div>

          <div className="graphics-pricing-grid">
            {packages.map((pkg, idx) => (
              <div className={`graphics-pricing-card ${pkg.isPopular ? 'popular' : ''}`} key={idx}>
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
                  Choose {pkg.name} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQs */}
      <section className="graphics-faqs-section">
        <div className="graphics-container">
          <div className="graphics-center-header">
            <span className="graphics-tag">FAQ</span>
            <h2 className="graphics-section-title">
              Frequently Asked <span className="title-logo-gradient">Design Questions</span>
            </h2>
          </div>

          <div className="graphics-faqs-list">
            {faqs.map((faq, idx) => (
              <div className={`graphics-faq-item ${activeFaq === idx ? 'open' : ''}`} key={idx}>
                <button type="button" className="graphics-faq-question" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <span className="faq-toggle-icon">{activeFaq === idx ? '−' : '+'}</span>
                </button>
                {activeFaq === idx && (
                  <div className="graphics-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Bar */}
      <section className="graphics-cta-bar">
        <div className="graphics-container">
          <div className="graphics-cta-content">
            <div className="cta-left">
              <span className="cta-badge">STAND OUT TODAY</span>
              <h3>Need eye-catching graphics for your brand?</h3>
              <p>Discuss your branding or print campaign with our creative directors in Gorakhpur.</p>
            </div>
            <div className="cta-right">
              <button type="button" className="btn-cta-white" onClick={onOpenContact}>
                Request Design Quote →
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
