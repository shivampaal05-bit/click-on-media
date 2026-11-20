import React, { useState } from 'react';
import '../styles/MonetizationPage.css';

export default function MonetizationPage({ onOpenContact, onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (idx) => {
    setActiveFaq(prev => (prev === idx ? null : idx));
  };

  const monetizationPillars = [
    {
      title: 'YouTube Channel Monetization',
      desc: 'Complete assistance to achieve 1,000 authentic subscribers and 4,000 valid public watch hours under official YouTube Partner Program policies.',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      title: 'Facebook Page & In-Stream Ads',
      desc: 'Turn your Facebook video views into dollars with In-Stream Ads setup, 60,000 on-demand minutes qualification, and Meta monetization approval.',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      title: 'Instagram Reels & Brand Partnerships',
      desc: 'Monetize viral short-form content, activate Instagram creator bonuses, and secure high-paying paid sponsorship deals with leading brands.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      title: 'High-CPM Niche Research & SEO',
      desc: 'Target high-paying advertisers across Finance, Tech, Health, and Real Estate niches to maximize your RPM ($15 to $40+ per 1,000 views).',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m14 10 4-4"></path>
          <path d="m10 14-4 4"></path>
          <path d="m14 14 4 4"></path>
          <path d="m10 10-4-4"></path>
        </svg>
      )
    },
    {
      title: 'High-CTR Thumbnails & Title Formulas',
      desc: 'Custom click-worthy 3D thumbnails and emotional curiosity titles tested to generate 12%+ click-through rates (CTR) on browse and suggested feeds.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      )
    },
    {
      title: 'Copyright & Strike Resolution',
      desc: 'Clean up demonetized channels, resolve yellow dollar signs, copyright claims, reuse content issues, and re-apply for monetization with 100% compliance.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    }
  ];

  const packages = [
    {
      name: 'Monetization Launch',
      badge: 'Starter Creator',
      price: '₹19,999',
      features: [
        'Complete Channel & Page Audit',
        'Watch Time & Follower Strategy Roadmap',
        'Official AdSense & Payout Setup',
        'Copyright & Community Policy Review',
        '10 Custom High-CTR Thumbnail Templates'
      ]
    },
    {
      name: 'Growth & Monetization Pro',
      badge: 'Most Popular',
      price: '₹34,999',
      isPopular: true,
      features: [
        'End-to-End YouTube & Meta Monetization',
        'Organic Engagement Booster Campaigns',
        '30 High-Retention Script & Title Formulas',
        'High CPM Niche Keyword & Tag Research',
        'Priority Strike & Reused Content Dispute Support',
        '1-on-1 Monthly Revenue Review Call'
      ]
    },
    {
      name: 'Full Channel Management',
      badge: 'Enterprises & Influencers',
      price: 'Custom / Rev Share',
      features: [
        'Complete Channel Management & Uploads',
        '4K Video Editing + Viral Shorts Production',
        'Direct Brand Deal Sponsorship Brokering',
        'Multi-Platform Syndication (YT, FB, Insta)',
        'Dedicated Creative Director & Video Team',
        'Monthly Payout & Profit Growth Reports'
      ]
    }
  ];

  const faqs = [
    {
      q: 'How long does it take to monetize a YouTube channel?',
      a: 'With strategic niche selection, high-retention video editing, and targeted optimization from Click On Media, channels typically reach the required 1,000 subscribers and 4,000 watch hours in 60 to 90 days.'
    },
    {
      q: 'Can you help if my channel got demonetized for "Reused Content"?',
      a: 'Yes. We audit your existing video library, remove flagged content, replace licensed assets, craft a legitimate Appeal Video in accordance with YouTube guidelines, and guide your channel to re-approval.'
    },
    {
      q: 'Do you monetize Facebook Pages and Instagram Reels too?',
      a: 'Yes, we optimize Meta Creator Studio for In-Stream video ads, Stars, and Subscriptions, helping creators in Gorakhpur and worldwide generate monthly foreign currency revenue.'
    }
  ];

  return (
    <div className="monetization-page-wrapper">
      
      {/* Breadcrumb Navigation */}
      <div className="webdev-breadcrumb-bar">
        <div className="monetization-container breadcrumb-inner">
          <button type="button" className="breadcrumb-home-link" onClick={onNavigateHome}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Monetization &amp; Channel Growth</span>
        </div>
      </div>

      {/* 1. Hero Section with Video */}
      <section className="monetization-hero-section">
        <div className="monetization-container">
          <div className="monetization-hero-grid">
            
            <div className="monetization-hero-content">
              <div className="monetization-eyebrow-badge">
                <span className="badge-dot"></span>
                <span>YOUTUBE &amp; SOCIAL MEDIA MONETIZATION</span>
              </div>
              <h1 className="monetization-main-title">
                Turn Your Content Into <span className="title-logo-gradient">Predictable Monthly Revenue</span>
              </h1>
              <p className="monetization-hero-desc">
                From YouTube Partner Program qualification to high-CPM advertiser deals and Facebook In-Stream Ads. 
                Click On Media is Gorakhpur's premier creator monetization and growth accelerator.
              </p>
              <div className="monetization-actions-row">
                <button type="button" className="btn-monetization-primary" onClick={onOpenContact}>
                  Get Channel Audit →
                </button>
                <a href="tel:+918303534063" className="btn-monetization-secondary">
                  Call: +91 8303534063
                </a>
              </div>
            </div>

            <div className="monetization-hero-visual">
              <div className="monetization-video-card">
                <video 
                  className="monetization-preview-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  poster="/assets/monetization.jpg"
                >
                  <source src="/assets/service-monetization.mp4" type="video/mp4" />
                </video>
                <div className="monetization-floating-pill">
                  <span className="money-sparkle">✦</span>
                  <span>100% Policy-Safe Monetization</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Pillars Grid */}
      <section className="monetization-pillars-section">
        <div className="monetization-container">
          <div className="monetization-center-header">
            <span className="monetization-tag">HOW WE MONETIZE</span>
            <h2 className="monetization-section-title">
              Complete <span className="title-logo-gradient">Revenue Ecosystem</span> for Creators
            </h2>
          </div>

          <div className="monetization-pillars-grid">
            {monetizationPillars.map((pillar, idx) => (
              <div className="monetization-card" key={idx}>
                <div className="pillar-icon-circle">
                  {pillar.icon}
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Channel Showcase Banner */}
      <section className="monetization-showcase-section">
        <div className="monetization-container">
          <div className="monetization-showcase-card">
            <div className="showcase-info">
              <span className="showcase-tag">CHANNEL CASE STUDY</span>
              <h2>High-CTR Thumbnails &amp; Full Channel Packaging</h2>
              <p>
                We produce broadcast-quality custom graphics, 4K thumbnails, channel art, and viral video pacing 
                that consistently hits above average click-through rates and high viewer watch retention.
              </p>
              <button type="button" className="btn-showcase-start" onClick={onOpenContact}>
                Monetize My Channel Now ↗
              </button>
            </div>
            <div className="showcase-media-box">
              <img src="/assets/all-services/ytbanner.jpg" alt="YouTube Channel Monetization Showcase" className="showcase-banner-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Packages */}
      <section className="monetization-pricing-section">
        <div className="monetization-container">
          <div className="monetization-center-header">
            <span className="monetization-tag">GROWTH PLANS</span>
            <h2 className="monetization-section-title">
              Monetization <span className="title-logo-gradient">Packages</span>
            </h2>
          </div>

          <div className="monetization-pricing-grid">
            {packages.map((pkg, idx) => (
              <div className={`monetization-pricing-card ${pkg.isPopular ? 'popular' : ''}`} key={idx}>
                {pkg.isPopular && <div className="popular-ribbon">Recommended</div>}
                <span className="pkg-type-badge">{pkg.badge}</span>
                <h3 className="pkg-plan-name">{pkg.name}</h3>
                <div className="pkg-cost-wrap">
                  <span className="pkg-cost">{pkg.price}</span>
                </div>
                <ul className="pkg-perks-list">
                  {pkg.features.map((item, fIdx) => (
                    <li key={fIdx}>
                      <span className="perk-check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button type="button" className="btn-monetization-plan" onClick={onOpenContact}>
                  Choose {pkg.name} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="monetization-faqs-section">
        <div className="monetization-container">
          <div className="monetization-center-header">
            <span className="monetization-tag">QUESTIONS &amp; ANSWERS</span>
            <h2 className="monetization-section-title">
              Monetization <span className="title-logo-gradient">FAQs</span>
            </h2>
          </div>

          <div className="monetization-faqs-list">
            {faqs.map((faq, idx) => (
              <div className={`monetization-faq-box ${activeFaq === idx ? 'open' : ''}`} key={idx}>
                <button type="button" className="faq-toggle-btn" onClick={() => toggleFaq(idx)}>
                  <span>{faq.q}</span>
                  <span className="faq-sign">{activeFaq === idx ? '−' : '+'}</span>
                </button>
                {activeFaq === idx && (
                  <div className="faq-details">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Consultation Bar */}
      <section className="monetization-cta-bar">
        <div className="monetization-container">
          <div className="monetization-cta-content">
            <div className="cta-left">
              <span className="cta-badge">FREE ELIGIBILITY CHECK</span>
              <h3>Check if your YouTube channel or Facebook page is ready for ads</h3>
              <p>Talk directly with our monetization experts at Click On Media Gorakhpur.</p>
            </div>
            <div className="cta-right">
              <button type="button" className="btn-cta-white" onClick={onOpenContact}>
                Free Monetization Check →
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
