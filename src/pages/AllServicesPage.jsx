import React, { useState } from 'react';
import '../styles/AllServicesPage.css';

export default function AllServicesPage({ onOpenContact, onNavigateHome, onNavigateService }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const categories = [
    { id: 'all', label: 'All Services (10+)' },
    { id: 'development', label: 'Web & Software' },
    { id: 'marketing', label: 'Digital Marketing & Ads' },
    { id: 'creative', label: 'Creative & Video Media' }
  ];

  const servicesList = [
    {
      id: 'website-development',
      title: 'Website Development',
      badge: 'Web Excellence',
      category: 'development',
      route: 'website-development',
      desc: 'Crafting custom, responsive, and high-speed websites that showcase your brand and drive business growth with Click On Media in Gorakhpur.',
      img: './assets/all-services/service-img-1.jpg',
      features: ['Modern React & Next.js Stack', 'Mobile Responsive UI/UX', 'Search Engine Optimized', 'Lightning-Fast Load Speeds']
    },
    {
      id: 'custom-software',
      title: 'Custom Software Development',
      badge: 'Bespoke Software',
      category: 'development',
      route: 'custom-software',
      desc: 'Tailored enterprise software, automated inventory management, and custom business management tools designed for high efficiency.',
      img: './assets/software-dev.jpg',
      features: ['GST Billing Software', 'School & Institute ERP', 'Cloud Database Sync', 'Desktop & Web Applications']
    },
    {
      id: 'crm-solutions',
      title: 'CRM Solutions',
      badge: 'Customer Relations',
      category: 'development',
      route: 'crm',
      desc: 'Smart Customer Relationship Management (CRM) tools to manage leads, track client sales pipelines, and automate follow-ups.',
      img: './assets/all-services/billing.PNG',
      features: ['Lead Capture & Funnel Automation', 'Billing & Invoice Generation', 'Customer Database Management', 'Multi-User Staff Permissions']
    },
    {
      id: 'digital-marketing',
      title: 'SEO - Website + Google Business',
      badge: 'Growth & SEO',
      category: 'marketing',
      route: 'digital-marketing',
      desc: 'Boost your online presence and reach your target audience with data-driven SEO, Google Search, and organic ranking strategies from Click On Media in Gorakhpur.',
      img: './assets/all-services/service-img-2.jpg',
      features: ['Local Gorakhpur & National SEO', 'Google Business Profile 3-Pack', 'Conversion Rate Optimization', 'ROI Performance Analytics']
    },
    {
      id: 'social-media-management',
      title: 'Social Media Marketing',
      badge: 'Brand Visibility',
      category: 'marketing',
      route: 'social-media-management',
      desc: 'Enhance your brand\'s online engagement, follower growth, and community loyalty with expert content and social media strategies from Click On Media in Gorakhpur.',
      img: './assets/all-services/service-img-3.jpg',
      features: ['Content Strategy & Scheduling', 'High-Converting Viral Reels', 'Active Community Management', 'Multi-Platform Brand Identity']
    },
    {
      id: 'whatsapp-bulk-messaging',
      title: 'WhatsApp Bulk Messaging',
      badge: 'Direct Reach',
      category: 'marketing',
      route: 'whatsapp-bulk-messaging',
      desc: 'Reach thousands of verified local customers instantly on WhatsApp with official Meta Cloud API, rich media catalogs, and verified green ticks.',
      img: './assets/all-services/socialmediaads.webp',
      features: ['98% Guaranteed Open Rates', 'Meta Cloud API Infrastructure', 'Interactive CTA Buttons & Catalogs', 'Automated Chatbot Triggers']
    },
    {
      id: 'graphics-designing',
      title: 'Graphics Designing',
      badge: 'Brand Identity',
      category: 'creative',
      route: 'graphics-designing',
      desc: 'Elevate your brand identity with stunning graphics, vector logo design, outdoor flex banners, flyers, and cohesive visual identity systems crafted by Click On Media.',
      img: './assets/all-services/service-img-6.jpg',
      features: ['Unique Trademarkable Vector Logos', 'Social Media Creatives & Flex', 'Brochures & Catalogs', 'Editable Source Files (CDR/AI/PSD)']
    },
    {
      id: 'video-editing',
      title: 'Video Editing & 4K Shoot',
      badge: 'Viral Media',
      category: 'creative',
      route: 'video-editing',
      desc: 'Captivate your target audience with professional 4K camera shoots, viral Instagram Reels, YouTube videos, and high-impact promo advertisements.',
      img: './assets/all-services/service-img-5.jpg',
      features: ['Personal Camera On-Site Shoots', 'Cinematic Color Grading & Motion FX', 'Engaging Dynamic Subtitles', 'Sound Design & Studio Audio']
    },
    {
      id: 'ads-management',
      title: 'Ads - Google, Insta, FB & WhatsApp',
      badge: 'Paid Traffic',
      category: 'marketing',
      route: 'digital-marketing',
      desc: 'Maximize your online visibility and drive high-intent, targeted buyer traffic directly to your website with cost-efficient Google Search & Meta PPC Ads.',
      img: './assets/all-services/Google_Ads_CARD.jpg',
      features: ['Laser-Targeted Audience Segments', 'High-ROAS Creative Variations', 'Direct-to-WhatsApp Click Funnels', 'Budget Maximization & Low CPC']
    },
    {
      id: 'monetization',
      title: 'Monetization & Channel Growth',
      badge: 'Revenue Growth',
      category: 'creative',
      route: 'monetization',
      desc: 'Turn your content into monthly income with official Facebook Page and YouTube Channel monetization setup, watch-time strategy, and payout approvals.',
      img: './assets/all-services/ytbanner.jpg',
      features: ['YouTube Partner Program Setup', 'Facebook In-Stream Ads Eligibility', 'High-CTR Custom Thumbnails', 'Payout & Bank Account Approval']
    }
  ];

  const featuredWorks = [
    {
      title: 'Doctor Website',
      client: 'Dr. Pratibha Singh Varanasi',
      subtitle: 'Our Doctor Client Website',
      category: 'Healthcare & Medical Platform',
      img: './assets/all-services/pratibha.png',
      desc: 'Modern healthcare portal featuring appointment scheduling, service catalog, patient testimonials, and localized Google SEO that boosted clinic footfall by 300%.'
    },
    {
      title: 'Mental Health Website',
      client: 'The Samanway Clinical Center',
      subtitle: 'We Made Mental Health Website for Doctor',
      category: 'Wellness & Teleconsultation',
      img: './assets/all-services/samanway.png',
      desc: 'Warm, compassionate digital presence designed for mental health professionals with confidential session bookings and informative wellness resources.'
    },
    {
      title: 'bSchool Management Software',
      client: 'Springfield Academy & Partner Institutes',
      subtitle: 'Cloud-Based Educational ERP Solution',
      category: 'Enterprise Education ERP',
      img: './assets/all-services/school-software.gif',
      desc: 'Our customized School Management Software fulfills all administrative needs. We don\'t sell rigid templates; we tailor to your workflow with secure cloud records and lightning speed.'
    },
    {
      title: 'Billing Software',
      client: 'Retail & Wholesale Enterprises',
      subtitle: 'Custom Billing Software with Hindi & English Invoices',
      category: 'Retail POS & GST Billing',
      img: './assets/all-services/billing.PNG',
      desc: 'Customized GST billing software with instant bilingual Hindi and English invoice generation, barcode scanning, stock tracking, and lifetime cloud sync.'
    }
  ];

  const whyChooseUs = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: 'Customized Software',
      desc: 'Click On Media, the best software development company in Gorakhpur, has proven expertise in building bespoke software tailored to your specific business operations. We do not rely on ready-made rigid templates. Using modern cloud architecture, we build reliable, secure, and fast platforms.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
          <path d="M11 8v6M8 11h6" />
        </svg>
      ),
      title: 'SEO Friendly Websites',
      desc: 'At Click On Media, we design and develop websites meticulously optimized for Google search results. Built with clean, lightweight semantic code, high mobile responsiveness, and schema integration, your site commands top search ranks and attracts consistent buyer traffic.'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      title: 'Affordable Websites and Software',
      desc: 'We provide top-tier web design and software engineering solutions structured to fit your budget. Our transparent pricing ensures you get maximum enterprise value without compromise. Scale your brand with cost-effective digital solutions built for longevity.'
    }
  ];

  const testimonials = [
    {
      name: 'Amarnath Singh',
      role: 'Satisfied Client',
      type: 'Billing Software',
      img: './assets/all-services/M1.avif',
      quote: 'Click On Media made a customized billing software for my business. The billing software was very affordable and also they assured me about my data in cloud for lifetime. Excellent support!'
    },
    {
      name: 'Shreya Sharma',
      role: 'SEO Client',
      type: 'Digital Marketing & SEO',
      img: './assets/all-services/F1.avif',
      quote: 'Best Software & Digital Company Near Me! Click On Media optimized my website with expert SEO services, significantly boosting our customer inquiries and organic keyword rankings.'
    },
    {
      name: 'Nikhil Singh',
      role: 'School Management Client',
      type: 'School ERP Software',
      img: './assets/all-services/M2.avif',
      quote: 'मैंने Click On Media से बहुत ही किफायती दाम में School Management Software खरीदा है और मैं इसे 1 साल से उपयोग कर रहा हूँ। वे बहुत ही पेशेवर हैं और उन्होंने इसे मेरी स्कूल और व्यवसाय की आवश्यकताओं के अनुसार बनाया है।'
    },
    {
      name: 'Dr. Pratibha Singh',
      role: 'Website Client',
      type: 'Doctor Clinic Platform',
      img: './assets/all-services/F2.png',
      quote: 'Click On Media ने मेरे लिए एक वेबसाइट बनाई जिसमें SEO, Google Business Profile, और Social Media Integration शामिल हैं। मैं पूरी तरह से संतुष्ट और खुश हूँ। उनकी टीम ने पेशेवर और प्रभावी डिजिटल समाधान प्रदान किया है।'
    }
  ];

  const handleCardClick = (service) => {
    if (service.route === 'contact') {
      onOpenContact();
    } else if (onNavigateService) {
      onNavigateService(service.route);
    } else {
      window.location.hash = `#/${service.route}`;
    }
  };

  const filteredServices = activeCategory === 'all'
    ? servicesList
    : servicesList.filter(s => s.category === activeCategory);

  return (
    <div className="all-services-page-container">
      {/* 1. BREADCRUMB BAR */}
      <nav className="all-services-breadcrumb-bar" aria-label="Breadcrumb">
        <div className="container-inner">
          <div className="breadcrumb-inner">
            <button 
              type="button" 
              className="breadcrumb-home-link"
              onClick={onNavigateHome}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Home</span>
            </button>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">All Services</span>
          </div>
        </div>
      </nav>

      {/* 2. HERO PAGE HEADER */}
      <header className="all-services-hero-section">
        <div className="container-inner">
          <div className="all-services-hero-card">
            <div className="hero-pill-badge">
              <span>🚀 COMPLETE IT & DIGITAL SOLUTIONS</span>
            </div>
            <h1 className="all-services-hero-title">
              Click On Media <span className="title-logo-gradient">IT & Digital Services</span>
            </h1>
            <p className="all-services-hero-subtitle">
              Excellence from concept to completion: Web & Software Development, Performance SEO, Creative Media, and High-Converting Advertising Solutions in Gorakhpur.
            </p>

            {/* Category Filter Pills */}
            <div className="category-filter-pills" role="tablist">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`filter-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* 3. 9 CORE SERVICES GRID */}
      <section className="services-grid-section">
        <div className="container-inner">
          <div className="services-cards-grid">
            {filteredServices.map((service, index) => (
              <div key={service.id} className="service-card-modern">
                <div className="card-top-header">
                  <div className="card-title-wrap">
                    <span className="card-badge-mini">{service.badge}</span>
                    <h2 className="service-card-title">{service.title}</h2>
                  </div>
                  <button 
                    type="button" 
                    className="card-arrow-btn"
                    onClick={() => handleCardClick(service)}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </button>
                </div>

                <p className="service-card-desc">{service.desc}</p>

                <div className="service-image-container">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="service-card-img" 
                    loading="lazy" 
                  />
                  <div className="service-img-overlay">
                    <button 
                      type="button"
                      className="btn-overlay-explore"
                      onClick={() => handleCardClick(service)}
                    >
                      Explore Service →
                    </button>
                  </div>
                </div>

                <div className="service-card-footer">
                  <div className="features-tags-list">
                    {service.features.map((feat, fIdx) => (
                      <span key={fIdx} className="feature-pill-tag">✓ {feat}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR WORK / FEATURED CLIENT SHOWCASE SECTION */}
      <section className="our-work-section">
        <div className="container-inner">
          <div className="section-header-centered">
            <span className="expertise-badge">PORTFOLIO & LIVE CLIENT WORK</span>
            <h2 className="section-main-heading">
              Click On Media Custom Software & Web <span className="title-logo-gradient">Development in Gorakhpur</span>
            </h2>
            <p className="section-main-sub">
              Excellence from concept to completion: <strong>Website Development</strong> | <strong>Digital Marketing</strong> | <strong>Custom Software Solutions</strong>
            </p>
            <div className="gradient-underline"></div>
          </div>

          <div className="works-grid">
            {featuredWorks.map((work, idx) => (
              <div key={idx} className="work-item-card">
                <div className="work-image-wrap">
                  <img src={work.img} alt={work.title} className="work-preview-img" loading="lazy" />
                  <div className="work-category-badge">{work.category}</div>
                </div>
                <div className="work-content-box">
                  <span className="work-client-tag">{work.client}</span>
                  <h3 className="work-title">{work.title}</h3>
                  <p className="work-subtitle">{work.subtitle}</p>
                  <p className="work-desc">{work.desc}</p>
                  <button 
                    type="button" 
                    className="btn-work-cta"
                    onClick={onOpenContact}
                  >
                    Request Similar Solution →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION */}
      <section className="why-choose-section">
        <div className="container-inner">
          <div className="section-header-centered">
            <span className="expertise-badge">SOFTWARE DEVELOPMENT COMPANY IN GORAKHPUR</span>
            <h2 className="section-main-heading">
              Why Choose <span className="title-logo-gradient">Click On Media ?</span>
            </h2>
            <div className="gradient-underline"></div>
          </div>

          <div className="why-choose-grid">
            {whyChooseUs.map((pillar, idx) => (
              <div key={idx} className="why-card">
                <div className="why-icon-box">
                  {pillar.icon}
                </div>
                <h3 className="why-card-title">{pillar.title}</h3>
                <p className="why-card-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Explore Outstanding Work Callout Card */}
          <div className="explore-work-banner">
            <div className="explore-banner-inner">
              <div className="explore-text-block">
                <div className="explore-icon-glow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="explore-title">Do you want to explore our outstanding work?</h3>
                  <p className="explore-sub">Connect and follow us on our official social media platforms or contact our team directly.</p>
                </div>
              </div>
              <div className="explore-actions-block">
                <a 
                  href="https://www.instagram.com/clickonmedia/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-social-outline"
                >
                  Instagram ↗
                </a>
                <a 
                  href="https://www.facebook.com/clickonmedia/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-social-outline"
                >
                  Facebook ↗
                </a>
                <button 
                  type="button" 
                  className="btn-social-contact"
                  onClick={onOpenContact}
                >
                  Contact Us ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS SECTION */}
      <section className="testimonials-section">
        <div className="container-inner">
          <div className="section-header-centered">
            <span className="expertise-badge">CLIENT TESTIMONIALS</span>
            <h2 className="section-main-heading">
              Our Customers <span className="title-logo-gradient">Love Click On Media</span>
            </h2>
            <div className="gradient-underline"></div>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testi, idx) => (
              <div key={idx} className="testi-card">
                <div className="testi-stars">
                  {'★★★★★'}
                </div>
                <p className="testi-quote">"{testi.quote}"</p>
                <div className="testi-author-row">
                  <img src={testi.img} alt={testi.name} className="testi-avatar" loading="lazy" />
                  <div className="testi-meta">
                    <h4 className="testi-name">{testi.name}</h4>
                    <span className="testi-role">{testi.role}</span>
                    <span className="testi-type">{testi.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CTA BANNER */}
      <section className="all-services-bottom-cta">
        <div className="container-inner">
          <div className="bottom-cta-banner-card">
            <h2 className="bottom-cta-heading">Ready to Accelerate Your Business Growth?</h2>
            <p className="bottom-cta-sub">
              Partner with Click On Media for custom websites, scalable software, high-impact digital marketing, and automated digital menu systems.
            </p>
            <div className="bottom-cta-buttons">
              <button 
                type="button" 
                className="btn-cta-primary"
                onClick={onOpenContact}
              >
                Schedule Free Strategy Call →
              </button>
              <a href="tel:+918303534063" className="btn-cta-secondary">
                📞 +91 8303534063
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
