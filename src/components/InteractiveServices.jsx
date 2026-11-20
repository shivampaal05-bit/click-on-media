import React, { useState, useEffect } from 'react';
import '../styles/InteractiveServices.css';
import CompanyShowcase from './CompanyShowcase.jsx';

export default function InteractiveServices({ onOpenContact }) {
  // 8 Core Services matching the official Click On Media banner & real business client needs
  const services = [
    {
      id: 'seo-services',
      tabLabel: 'SEO Services',
      title: 'Search Engine Optimization (SEO)',
      badge: 'Google Page 1 Ranking',
      tagline: 'Improve your Google search rankings, attract genuine local customers searching for your products or services, and get regular business inquiries without paying for every click.',
      image: './assets/seo-performance.jpg',
      video: './assets/service-seo.mp4',
      bgTheme: 'theme-teal',
      duration: '1 to 3 Months',
      metricTitle: 'Target Result',
      metricVal: 'Google Page 1 Ranking',
      features: ['✓ 100% Safe White-Hat SEO', '✓ Google Business Profile (Map) Rank', '✓ Monthly Keyword & Ranking Reports'],
      points: [
        'Website SEO (Organic SEO)',
        'Local SEO (Google Business Profile)',
        'SEO Audit & Competitor Analysis',
        'Keyword Research & Optimization',
        'On-Page & Off-Page SEO'
      ]
    },
    {
      id: 'website-development',
      tabLabel: 'Website Development',
      title: 'Website Design & E-Commerce Development',
      badge: 'Fast & Mobile Friendly',
      tagline: 'Get a modern, fast-loading website or online store tailored for your business, designed to look great on all mobile devices and convert visitors into paying clients.',
      image: './assets/web-dev.jpg',
      video: './assets/service-webdev.mp4',
      bgTheme: 'theme-blue',
      duration: '7 to 15 Days',
      metricTitle: 'Project Delivery',
      metricVal: 'Within 2 Weeks',
      features: ['✓ 100% Mobile & Tablet Responsive', '✓ Clean Design & Fast Loading Speed', '✓ Free 1-Year Hosting & SSL Setup'],
      points: [
        'Business / Corporate Website',
        'E-Commerce Website (Online Store)',
        'Booking / Listing Website (Hotel, Clinic, Service, etc.)',
        'Custom Website Development',
        'Website Maintenance & Support (AMC)'
      ]
    },
    {
      id: 'social-media',
      tabLabel: 'Social Media Management',
      title: 'Social Media Management & Branding',
      badge: 'Daily Active Growth',
      tagline: 'Build an active brand presence on Instagram, Facebook, and LinkedIn with regular creative posts, trending reels, and real follower engagement.',
      image: './assets/social-media.jpg?v=2',
      video: './assets/service-social.mp4?v=2',
      bgTheme: 'theme-magenta',
      duration: 'Monthly Retainer',
      metricTitle: 'Posting Frequency',
      metricVal: 'Daily / Regular Updates',
      features: ['✓ Monthly Content Calendar & Posts', '✓ Trending Reels & Story Updates', '✓ DM & Comment Interaction Support'],
      points: [
        'Facebook, Instagram, YouTube, LinkedIn',
        'Page Setup, Optimization & Branding',
        'Content Planning, Posting & Scheduling',
        'Community Engagement & Audience Growth',
        'Paid Social Media Campaigns (Optional)'
      ]
    },
    {
      id: 'graphic-designing',
      tabLabel: 'Graphic Designing',
      title: 'Professional Graphic & Brand Design',
      badge: 'Print & Digital Ready',
      tagline: 'Get eye-catching social media posters, custom brand logos, shop flex banners, and company profiles designed to match your brand colors and style.',
      image: './assets/branding-creative.jpg',
      video: './assets/service-design.mp4',
      bgTheme: 'theme-orange',
      duration: '24 to 48 Hours',
      metricTitle: 'Turnaround Time',
      metricVal: 'Same Day / 24 Hours',
      features: ['✓ Custom Logo & Brand Colors', '✓ High-Resolution Print Ready Files', '✓ Editable Source Files (CDR/AI/PSD)'],
      points: [
        'Logo Design & Brand Identity',
        'Social Media Creatives & Posters',
        'Banner, Flex, Flyers & Brochures',
        'Product & Ad Creatives',
        'Company Profile, Presentation & Catalogs'
      ]
    },
    {
      id: 'software-development',
      tabLabel: 'Software Development',
      title: 'Business Software & CRM Solutions',
      badge: 'Custom Business Tools',
      tagline: 'Automate your daily shop or office tasks with custom billing software, GST invoicing, client management (CRM), and real-time inventory tracking.',
      image: './assets/software-dev.jpg',
      video: './assets/service-software.mp4',
      bgTheme: 'theme-blue',
      duration: '2 to 4 Weeks',
      metricTitle: 'Technical Support',
      metricVal: 'Dedicated AMC Support',
      features: ['✓ Simple & Easy-to-Use Interface', '✓ GST Billing & Multi-User Access', '✓ Full AMC & Local Technical Support'],
      points: [
        'Custom Software Development',
        'CRM (Customer Relationship Management)',
        'Business Management Software (Billing, Inventory, HR, etc.)',
        'Automation & Workflow Tools',
        'Web & Mobile App Development'
      ]
    },
    {
      id: 'video-reels',
      tabLabel: 'Video & Reels Production',
      title: 'Video Shoot, Reels & Video Editing',
      badge: '4K Shoot & Editing',
      tagline: 'On-site professional camera shoots for your shop, business, or products, combined with fast-paced reel editing and YouTube video production.',
      image: './assets/video-production.jpg',
      video: './assets/service-video.mp4',
      bgTheme: 'theme-rose',
      duration: '3 to 5 Days / Batch',
      metricTitle: 'Video Resolution',
      metricVal: 'Full HD & 4K Quality',
      features: ['✓ On-Site Professional Shoot', '✓ Engaging Subtitles & Sound Effects', '✓ Script Writing & YouTube Setup'],
      points: [
        'Video Shoot (Business, Product & Office)',
        'Video Editing (YouTube, Reels, Ads)',
        'Short Reels & Promo Videos',
        'YouTube Channel Setup & Management',
        'Video Ideas, Scripting & Complete Production'
      ]
    },
    {
      id: 'ads-management',
      tabLabel: 'Ads Management',
      title: 'Google & Meta (Facebook/Insta) Ads',
      badge: 'Targeted Customer Leads',
      tagline: 'Run targeted Google Search and Meta (Facebook & Instagram) ad campaigns to get direct phone calls, WhatsApp messages, and verified leads for your business.',
      image: './assets/ads-management.jpg',
      video: './assets/service-ads.mp4',
      bgTheme: 'theme-orange',
      duration: 'Weekly Optimization',
      metricTitle: 'Lead Quality',
      metricVal: 'Verified Local Inquiries',
      features: ['✓ Targeted Local Area Customers', '✓ Direct Phone Calls & WhatsApp Leads', '✓ Daily Budget & Lead Monitoring'],
      points: [
        'Google Ads (Search, Display, YouTube)',
        'Meta Ads (Facebook & Instagram)',
        'Lead Generation Campaigns',
        'Sales & Conversion Ads',
        'Performance Tracking & ROI Optimization'
      ]
    },
    {
      id: 'monetization-growth',
      tabLabel: 'Monetization & Growth',
      title: 'Facebook & YouTube Monetization',
      badge: 'Direct Monthly Earnings',
      tagline: 'Get your Facebook Page and YouTube channel eligible and approved for official monetization (In-Stream Ads & Partner Program) to start earning regular monthly revenue.',
      image: './assets/monetization.jpg',
      video: './assets/service-monetization.mp4',
      bgTheme: 'theme-purple',
      duration: '15 to 30 Days',
      metricTitle: 'Monetization Setup',
      metricVal: 'Policy Approved & Verified',
      features: ['✓ 100% Policy & Guideline Compliance', '✓ Watch Time & Follower Strategy', '✓ Bank Account & Payout Setup'],
      points: [
        'Facebook Page Monetization (In-Stream Ads)',
        'Instagram Monetization (Reels & Bonuses)',
        'YouTube Channel Monetization (Ads, Membership, Super Chat)',
        'Channel Setup, Optimization & Growth Strategy',
        'Revenue Growth & Complete Channel Management'
      ]
    }
  ];

  const [activeTabId, setActiveTabId] = useState('seo-services');
  const currentService = services.find(s => s.id === activeTabId) || services[0];

  // Listen for navigation events from Navbar Services dropdown
  useEffect(() => {
    const handleSelectService = (e) => {
      const targetId = e.detail;
      if (targetId && services.some(s => s.id === targetId)) {
        setActiveTabId(targetId);
      }
    };
    window.addEventListener('selectService', handleSelectService);
    return () => window.removeEventListener('selectService', handleSelectService);
  }, []);

  return (
    <section className="interactive-services-section" id="services">
      <div className="section-container">
        
        {/* Section Header (Centered WsCube Style) */}
        <div className="wscube-header-block">
          <h2 className="wscube-main-title">
            Complete <span className="text-logo-gradient">Digital Solutions</span> for Your Business
          </h2>
          <p className="wscube-sub-title">
            Choose your service, scale your brand, and turn every click into measurable business revenue.
          </p>
        </div>

        {/* 1. Top Horizontal Tab Pill Navigation (Exact WsCube Tech Sizing) */}
        <div className="wscube-tabs-wrapper">
          <div className="wscube-tabs-scroll-row">
            {services.map(item => {
              const isActive = item.id === activeTabId;
              return (
                <button
                  key={item.id}
                  className={`wscube-tab-pill ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTabId(item.id)}
                  aria-selected={isActive}
                >
                  {item.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Big In-Place Content Card (Exact WsCube Tech Dimensions: 1060px x 500px) */}
        <div className="wscube-card-container course-card" key={currentService.id}>
          {/* Left Column: Feature Video Showcase Box */}
          <div className={`wscube-card-left ${currentService.bgTheme}`}>
            <div className="wscube-img-frame">
              <video 
                key={currentService.id}
                src={currentService.video || './assets/hero-video.mp4'} 
                poster={currentService.image}
                autoPlay 
                loop 
                muted 
                playsInline
                className="wscube-main-video"
              />
            </div>
          </div>

          {/* Right Column: Complete Deliverables & Strategy */}
          <div className="wscube-card-right">
            {/* Top Sparkle Badge */}
            <div className="wscube-badge-row">
              <span className="wscube-top-badge">
                {currentService.badge} <span className="sparkle-icon">✨</span>
              </span>
            </div>

            {/* Service Main Title */}
            <h3 className="wscube-card-title">{currentService.title}</h3>
            
            {/* Subtitle / Overview */}
            <p className="wscube-card-desc">{currentService.tagline}</p>

            {/* Feature Pills Row */}
            <div className="wscube-features-pills">
              {currentService.features.map((feat, idx) => (
                <span className="wscube-feature-tag" key={idx}>
                  {feat}
                </span>
              ))}
            </div>

            {/* Core Deliverables matching WsCube Tech "Covered Projects" strip */}
            <div className="wscube-covered-section">
              <div className="wscube-covered-title-wrap">
                <span className="wscube-covered-line" />
                <span className="wscube-covered-title">Core Deliverables</span>
                <span className="wscube-covered-line" />
              </div>
              <div className="wscube-deliverables-strip">
                {currentService.points.map((pt, idx) => (
                  <span key={idx} className="wscube-deliverable-chip">
                    <span className="chip-check">✓</span> {pt}
                  </span>
                ))}
              </div>
            </div>

            {/* WsCube Stats Box: Duration & Growth Metric */}
            <div className="wscube-stats-box">
              <div className="wscube-stat-unit">
                <div className="wscube-stat-icon">📅</div>
                <div className="wscube-stat-text">
                  <span className="stat-unit-label">Execution Timeline</span>
                  <span className="stat-unit-val">{currentService.duration}</span>
                </div>
              </div>
              <div className="wscube-stat-divider"></div>
              <div className="wscube-stat-unit">
                <div className="wscube-stat-icon">📈</div>
                <div className="wscube-stat-text">
                  <span className="stat-unit-label">{currentService.metricTitle}</span>
                  <span className="stat-unit-val text-orange">{currentService.metricVal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Personal Camera Shoot Strip (From Official Graphic) */}
        <div className="camera-shoot-strip">
          <div className="camera-strip-left">
            <div className="camera-icon-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </div>
            <div className="camera-strip-title-wrap">
              <h4>Personal <span className="text-logo-gradient">Camera Shoot</span></h4>
              <p>On-site professional cinematic shoots for businesses, products, and founders</p>
            </div>
          </div>

          <div className="camera-strip-points">
            <span className="camera-tag">✓ Business Shoot</span>
            <span className="camera-tag">✓ Product Shoot</span>
            <span className="camera-tag">✓ Office / Store Shoot</span>
            <span className="camera-tag">✓ Interview & Testimonial</span>
            <span className="camera-tag">✓ Brand & Promotional Videos</span>
          </div>

          <div className="camera-strip-action">
            <button className="btn-camera-book" onClick={onOpenContact}>
              Book Camera Shoot
            </button>
          </div>
        </div>

        {/* 4. Company Portfolio & Software Showcase (Right below Book Camera Shoot) */}
        <CompanyShowcase onOpenContact={onOpenContact} />

        {/* 5. Banner Contact Strip */}
        <div className="banner-contact-bar">
          <a href="tel:8303534063" className="contact-bar-item">
            <div className="c-bar-icon phone-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div className="c-bar-text">
              <span className="c-label">Call Now</span>
              <span className="c-val">8303534063</span>
            </div>
          </a>

          <a href="mailto:info@clickonmedia.in" className="contact-bar-item">
            <div className="c-bar-icon email-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div className="c-bar-text">
              <span className="c-label">Official Inquiries</span>
              <span className="c-val">info@clickonmedia.in</span>
            </div>
          </a>

          <div className="contact-bar-item address-item">
            <div className="c-bar-icon map-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div className="c-bar-text">
              <span className="c-label">Head Office</span>
              <span className="c-val">Near Adalat Restaurant, Pipal Dada, Mohaddipur, Gorakhpur, UP 273008</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
