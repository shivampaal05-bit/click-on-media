import React, { useState } from 'react';
import '../styles/CompanyShowcase.css';

export default function CompanyShowcase({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState(0); // First question open by default

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const projects = [
    {
      id: 'doctor-website',
      category: 'website',
      badge: 'Healthcare & Medical',
      title: 'Doctor Website',
      description: 'Our Doctor Client Website',
      fullDescription: 'Customized healthcare web platform designed for leading medical specialists, featuring seamless online appointment booking, doctor credentials, clinical achievements, and responsive patient communication.',
      image: '/assets/showcase/doctor-preview.jpg',
      url: 'https://client.clickonmedia.in/doctor-specialist',
      tags: ['Specialist Portfolio', 'Patient Booking', 'Doctor Credentials', 'Mobile First'],
      ctaText: 'Request Doctor Website Demo'
    },
    {
      id: 'ecommerce-website',
      category: 'website',
      badge: 'E-Commerce & Retail Store',
      title: 'E-Commerce Store Website',
      description: 'Online Shopping & Order Platform for Retail Businesses',
      fullDescription: 'High-converting online store built for modern retail businesses, featuring live product catalogs, secure payment gateway, order tracking, and mobile-optimized shopping experience.',
      image: '/assets/showcase/ecommerce-preview.jpg',
      url: 'https://client.clickonmedia.in/ecommerce-store',
      tags: ['Online Shopping', 'Payment Gateway', 'Order Management', 'Mobile First'],
      ctaText: 'Request E-Commerce Demo'
    },
    {
      id: 'school-software',
      category: 'software',
      badge: 'Cloud ERP Software',
      title: 'School Management Software',
      description: "Our Customized School Management Software will fulfill all your school needs. We don't sell ready made software we customize according to your needs. Our School Software is cloud based and your data is secured. It uses latest technologies for faster speed and security.",
      image: '/assets/showcase/school-preview.jpg',
      url: 'https://erp.clickonmedia.in/school-academy-portal',
      tags: ['Cloud ERP', 'Student & Staff Database', 'Fee & Due Management', 'Admit Cards', 'Real-Time Analytics'],
      ctaText: 'Request School ERP Demo'
    },
    {
      id: 'billing-software',
      category: 'software',
      badge: 'POS & Billing System',
      title: 'Billing Software',
      description: 'Customized Billing Software for our client with Hindi and English bill generation.',
      fullDescription: 'Fast, secure Point of Sale (POS) and inventory billing system built for retail, wholesale, and multi-branch stores with automated GST invoices, bilingual bill printing, and live sales performance dashboards.',
      image: '/assets/showcase/billing-preview.jpg',
      url: 'https://pos.clickonmedia.in/billing-dashboard',
      tags: ['Hindi & English Billing', 'GST Invoicing', 'Inventory Sync', 'Sales Dashboards', 'Thermal Print'],
      ctaText: 'Request Billing Software Demo'
    }
  ];

  const expertiseItems = [
    {
      id: 'webdev',
      badge: 'Website Development & Design',
      title: 'Your Digital Foundation',
      p1: "In today's digital-first world, your website is more than just an online brochure; it's your 24/7 salesperson, your primary marketing tool, and the foundation of your brand's credibility. For a business in Gorakhpur, having a professional online presence is no longer optional—it's essential for survival and growth. As a premier Website Development Company in Gorakhpur, we build digital experiences that deliver results.",
      p2: "Our process begins with our creative team at the Website Designing Company in Gorakhpur division. They focus on creating a design that is not only visually stunning but also intuitive and user-friendly. We consider your local audience, ensuring the design resonates with the culture and expectations of customers in our region. This technical excellence is a cornerstone of our service, ensuring that your customers have a seamless experience, which directly impacts your reputation and search engine rankings.",
      image: '/assets/showcase/expertise-webdev.jpg',
      imagePosition: 'right',
      ctaText: 'Build Your Website With Us'
    },
    {
      id: 'software',
      badge: 'Custom Software',
      title: 'Solutions for Your Unique Challenges',
      p1: "Many businesses in Gorakhpur run into a wall with generic, off-the-shelf software. It's often inefficient and forces you to adapt your processes to its limitations. This is where our role as a leading Custom Software company in Gorakhpur becomes vital. We believe that technology should adapt to your business, not the other way around.",
      p2: "Imagine a local retailer with a custom inventory management system that automatically tracks sales from their physical and online stores. Or a school with unique software that handles admissions and parent communication seamlessly. This commitment to creating truly bespoke solutions is what makes us confident in our claim to be the best software company in Gorakhpur. Investing in custom software is investing in efficiency, scalability, and a long-term competitive advantage.",
      image: '/assets/showcase/expertise-software.jpg?v=3people',
      imagePosition: 'left',
      ctaText: 'Request Custom Software Demo'
    },
    {
      id: 'seo',
      badge: 'Results-Driven Digital Marketing',
      title: 'Visibility That Converts Into Real Revenue',
      p1: "A great website is useless if no one can find it. As a top-tier digital marketing company in Gorakhpur, we focus on generating tangible results. Our specialized SEO services in Gorakhpur are designed to dominate local search rankings.",
      p2: "Paired with our strategic social media marketing, we don't just build presence; we build a powerful engine for lead generation, Google Maps ranking, and lifelong customer loyalty.",
      image: '/assets/showcase/expertise-seo.jpg',
      imagePosition: 'right',
      ctaText: 'Boost Google Page 1 Rankings'
    }
  ];

  const faqs = [
    {
      question: 'What truly defines the "best IT company in Gorakhpur" in today\'s market?',
      answer: "In today's fast-moving market, the best IT company isn't just about technical code; it's about real business results. For a business in Gorakhpur, it means deep local market understanding, proven delivery in custom software and responsive web design, 100% data security, transparent pricing without hidden fees, and dedicated post-launch support that stays with you as you scale."
    },
    {
      question: 'What is the difference between a Website Designing Company and a Website Development Company?',
      answer: "Website Designing focuses on the visual aesthetics, layout, typography, UI/UX, and branding to ensure your website is attractive and intuitive. Website Development builds the robust engine behind it—backend database logic, API integrations, page speed optimization, security protocols, and custom business functionality. At Click On Media, we provide both under one roof."
    },
    {
      question: 'My business has unique operational needs. How can a Custom Software Company in Gorakhpur help?',
      answer: "Generic off-the-shelf software often forces you to change your daily business operations to fit its rigid templates. A custom software solution is designed 100% around your exact workflow—whether it's multi-store inventory sync, billing in Hindi & English, school fee management, or doctor appointment scheduling. It eliminates inefficiencies and gives you a competitive advantage."
    },
    {
      question: 'What results can I realistically expect from your SEO Services in Gorakhpur in the first six months?',
      answer: "In the first 30–60 days, we conduct complete on-page optimization, technical fixes, and Google Business Profile ranking. By months 3 to 6, your primary business keywords will begin ranking on Google Page 1 in Gorakhpur, driving genuine local customer inquiries, higher website traffic, and consistent inbound leads without paying for every click."
    },
    {
      question: 'How does strategic Social Media Management actually convert followers into paying customers?',
      answer: "Strategic social media management isn't just about posting generic flyers. We produce high-engagement cinematic reels, client testimonial videos, targeted local paid advertising, and direct WhatsApp / lead-generation funnels that guide interested local viewers directly into paying customers."
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="company-showcase-section" id="showcase">
      <div className="showcase-glow-bg" aria-hidden="true" />
      
      <div className="showcase-container">
        
        {/* Top Header matching video exact headline with signature logo colors */}
        <div className="showcase-header">
          <h2 className="showcase-main-title">
            Excellence from <span className="text-logo-gradient">Concept to Completion</span> |{' '}
            <span className="text-logo-gradient">Website Development</span> |{' '}
            <span className="text-logo-gradient">Digital Marketing</span> |{' '}
            <span className="text-logo-gradient">Customized Softwares</span>
          </h2>

          <p className="showcase-subtext">
            Explore our real-world client deployments in healthcare, education, retail, and corporate operations, engineered specifically for growing brands.
          </p>

          {/* Category Filter Pills */}
          <div className="showcase-tabs">
            <button
              className={`showcase-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Featured Work ({projects.length})
            </button>
            <button
              className={`showcase-tab ${activeCategory === 'website' ? 'active' : ''}`}
              onClick={() => setActiveCategory('website')}
            >
              Websites & Portals
            </button>
            <button
              className={`showcase-tab ${activeCategory === 'software' ? 'active' : ''}`}
              onClick={() => setActiveCategory('software')}
            >
              Custom Softwares & ERP
            </button>
          </div>
        </div>

        {/* 2x2 Showcase Grid */}
        <div className="showcase-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="showcase-card">
              
              {/* Browser / Application Window Mockup Chrome */}
              <div className="mockup-window">
                <div className="window-header">
                  <div className="window-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <div className="window-address-bar">
                    <svg className="lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span className="address-text">{project.url}</span>
                  </div>
                  <span className="window-category-tag">{project.badge}</span>
                </div>

                {/* Live Preview Image Container */}
                <div className="mockup-viewport" onClick={onOpenContact}>
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="mockup-img"
                    loading="lazy"
                  />
                  <div className="mockup-overlay">
                    <button className="btn-preview-action" onClick={(e) => { e.stopPropagation(); onOpenContact(); }}>
                      <span>View Live Demo & Architecture</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Meta & Video Text Description */}
              <div className="showcase-card-body">
                <div className="card-title-row">
                  <h3 className="card-title">{project.title}</h3>
                  <span className="verified-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Client Verified
                  </span>
                </div>

                <p className="card-primary-desc">{project.description}</p>
                
                {project.fullDescription && (
                  <p className="card-secondary-desc">{project.fullDescription}</p>
                )}

                {/* Feature Tags */}
                <div className="card-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag-pill">✓ {tag}</span>
                  ))}
                </div>

                {/* Card Action */}
                <div className="card-action-bar">
                  <button className="btn-card-cta" onClick={onOpenContact}>
                    <span>{project.ctaText}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* 1. OUR EXPERTISE Section (Matching Video Exact Pictures & Rows) */}
        <div className="showcase-expertise-section">
          <div className="expertise-header">
            <span className="expertise-badge">OUR EXPERTISE</span>
            <h3 className="expertise-main-title">
              Transforming <span className="text-logo-gradient">Gorakhpur Businesses</span> with Technology
            </h3>
            <p className="expertise-subtext">
              We believe technology should be a tool for growth. Here's a closer look at how our core services are specifically designed to solve the challenges and unlock the potential of businesses right here in Gorakhpur.
            </p>
          </div>

          <div className="expertise-rows-wrapper">
            {expertiseItems.map((item) => (
              <div
                key={item.id}
                className={`expertise-row ${item.imagePosition === 'left' ? 'row-reversed' : ''}`}
              >
                <div className="expertise-text-col">
                  <span className="expertise-item-badge">{item.badge}</span>
                  <h4 className="expertise-item-title">{item.title}</h4>
                  <p className="expertise-item-desc">{item.p1}</p>
                  <p className="expertise-item-desc">{item.p2}</p>
                  <button className="btn-expertise-action" onClick={onOpenContact}>
                    <span>{item.ctaText}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
                <div className="expertise-image-col">
                  <div className="expertise-image-card">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="expertise-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. CLARITY & CONFIDENCE: FAQ Accordion with Expanding Text (As shown in video) */}
        <div className="showcase-faq-section">
          <div className="faq-header">
            <span className="faq-badge">CLARITY & CONFIDENCE</span>
            <h3 className="faq-main-title">
              Your Questions, <span className="text-logo-gradient">Answered</span>
            </h3>
            <p className="faq-subtext">
              We believe in empowering our clients with knowledge. Here are in-depth answers to common questions about navigating the digital landscape in Gorakhpur, designed to help you make the best decisions for your business.
            </p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    className="faq-question-btn"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.question}</span>
                    <span className="faq-toggle-icon">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  <div className={`faq-answer-collapse ${isOpen ? 'open' : ''}`}>
                    <div className="faq-answer-inner">
                      <p className="faq-answer-text">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
