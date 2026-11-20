import React, { useState } from 'react';
import '../styles/SocialMediaManagementPage.css';

export default function SocialMediaManagementPage({ onOpenContact, onNavigateHome }) {
  const [activeIndustry, setActiveIndustry] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleIndustry = (index) => {
    setActiveIndustry(prev => (prev === index ? null : index));
  };

  const toggleFaq = (index) => {
    setActiveFaq(prev => (prev === index ? null : index));
  };

  const services = [
    {
      title: 'Social Media Strategy & Planning',
      desc: 'Customized strategies for local and national targeting to achieve maximum growth and ROI.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    },
    {
      title: 'Content Creation',
      desc: 'High-quality posts, reels, graphics, and videos that engage your audience and build your brand.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <path d="M2 2l7.586 7.586" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      )
    },
    {
      title: 'Facebook & Instagram Ads',
      desc: 'Targeted ad campaigns designed to bring in more leads and convert potential customers.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4.5c1.45-1.47 4.5-2 4.5-2" />
          <path d="M12 15v5s3.03-.55 4.5-2c1.47-1.45 2-4.5 2-4.5" />
        </svg>
      )
    },
    {
      title: 'Profile Optimization',
      desc: 'Optimization of Facebook, Instagram, LinkedIn, Twitter, and YouTube profiles for better visibility.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      title: 'Community Engagement',
      desc: 'Handling comments, messages, and reviews to build a strong relationship with your audience.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      )
    },
    {
      title: 'Analytics & Reporting',
      desc: 'Detailed monthly reports with insights and optimization strategies for continuous growth.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    }
  ];

  const industries = [
    {
      title: 'Healthcare: Clinics, Hospitals, and Diagnostic Centers',
      icon: '🏥',
      content: 'In healthcare, trust and credibility are paramount. We create patient awareness video reels, doctor advice clips, treatment explainers, and health camp announcements. We optimize local Google reviews and handle patient direct inquiries smoothly to build lasting community trust across Gorakhpur.'
    },
    {
      title: 'Restaurants, Cafes & Hospitality',
      icon: '🍔',
      content: 'Food is visual. We produce mouth-watering cinematic food reels, behind-the-scenes chef stories, festive menus, and weekend offers. We partner with local Gorakhpur food creators and run location-targeted Instagram campaigns that drive massive footfalls and direct table reservations.'
    },
    {
      title: 'Real Estate: Builders and Developers',
      icon: '🏢',
      content: 'High-ticket property sales require visual proof and premium authority. We create drone site walkthroughs, 3D architectural renders, project milestone updates, and targeted Facebook & Instagram lead generation campaigns capturing genuine local buyers and NRI investors.'
    },
    {
      title: 'Education: Schools, Colleges & Coaching Institutes',
      icon: '🎓',
      content: 'Education admissions thrive on social proof. We produce student topper interviews, faculty showcases, interactive campus tours, and timely admission countdown campaigns on Instagram & Meta that capture verified parent inquiries.'
    },
    {
      title: 'Retail & Fashion: Shops, Boutiques, and Showrooms',
      icon: '🛍️',
      content: 'For retail showrooms and boutiques, visual aesthetics drive sales. We design seasonal collection previews, festive discount reels, outfit-of-the-day fashion stories, and location-targeted ads driving foot traffic straight to your showroom in Gorakhpur.'
    }
  ];

  const processSteps = [
    {
      title: 'Discovery & Strategy',
      emoji: '🎯',
      desc: 'We understand your business goals, target audience, and competitors to create a customized social media strategy that works for your industry.'
    },
    {
      title: 'Content Creation & Scheduling',
      emoji: '✍️',
      desc: 'Our creative team designs high-quality posts, reels, graphics, and videos. We schedule a full month of content, optimized for platforms like Facebook, Instagram, and LinkedIn.'
    },
    {
      title: 'Execution, Ads & Engagement',
      emoji: '🚀',
      desc: 'We publish content consistently, run targeted social media ad campaigns, and engage with your community to build stronger customer relationships.'
    },
    {
      title: 'Reporting & Optimization',
      emoji: '📊',
      desc: 'Every month, we analyze performance with detailed social media analytics and refine strategies for continuous growth and improved ROI.'
    },
    {
      title: 'Ongoing Support',
      emoji: '🤝',
      desc: "We don't just post and leave. Our team provides regular consultations and proactive ideas to keep your brand ahead of competitors."
    }
  ];

  const whyChooseCards = [
    {
      title: 'Local Expertise, Global Standards',
      icon: '✨',
      desc: "We're based in Gorakhpur, so we understand the local market, but our strategies are built with global best practices."
    },
    {
      title: 'Affordable & Transparent Packages',
      icon: '💲',
      desc: 'Flexible plans designed to fit every business size — no hidden charges, only value.'
    },
    {
      title: 'Creative & Engaging Content',
      icon: '🎨',
      desc: 'From eye-catching posts and reels to professional ad campaigns, we make your brand stand out.'
    },
    {
      title: 'Dedicated Social Media Experts',
      icon: '🤝',
      desc: 'Our team manages everything — content, ads, engagement, and reports — while you focus on running your business.'
    },
    {
      title: 'Results That Matter',
      icon: '📈',
      desc: 'At Click On Media, we focus on generating leads, conversions, and measurable growth — not just likes and followers.'
    }
  ];

  const faqs = [
    {
      q: 'What truly defines the "best IT company in Gorakhpur" in today\'s market?',
      a: 'The best IT and digital marketing company in Gorakhpur is defined not just by technical capability, but by its ability to deliver measurable business growth and real ROI. Click On Media combines enterprise-level technical engineering (SEO, web development, custom software) with creative social media marketing and transparent monthly analytics reporting tailored to Gorakhpur businesses.'
    },
    {
      q: 'What is the difference between a Website Designing Company and a Website Development Company?',
      a: 'A Website Designing company focuses on visual aesthetics, layouts, color palettes, and UI/UX styling. A Website Development company writes robust code, builds database systems, implements payment gateways, and ensures fast loading speeds and SEO architecture. At Click On Media, we are a full-service agency providing both world-class UI/UX design and production-grade software development.'
    },
    {
      q: 'My business has unique operational needs. How can a Custom Software Company in Gorakhpur help?',
      a: 'Off-the-shelf software often forces you to change your workflow. Click On Media builds customized cloud software, billing engines, CRM dashboards, and inventory ERPs tailored precisely to how your business operates in Gorakhpur, saving hours of manual work and cutting operational costs.'
    },
    {
      q: 'What results can I realistically expect from your SEO Services in Gorakhpur in the first six months?',
      a: 'Within the first 60 days, technical errors are fixed, site speed improves, and Google begins indexing your target keywords. Between months 3 and 6, your website gains organic domain authority, moving into the top 3-5 Google search positions for local Gorakhpur queries, resulting in consistent inbound calls, inquiries, and customer visits.'
    },
    {
      q: 'How does strategic Social Media Management actually convert followers into paying customers?',
      a: 'We bridge the gap between attention and conversion. We create problem-solving content, share client testimonials to build trust, run targeted lead generation ad campaigns with clear calls-to-action (WhatsApp direct chat, phone calls, form fills), and actively manage community DMs so interested followers immediately become paying customers.'
    }
  ];

  return (
    <div className="smm-page-container">
      {/* Breadcrumb Navigation Bar */}
      <div className="smm-breadcrumb-bar">
        <div className="container-inner breadcrumb-inner">
          <button type="button" className="breadcrumb-home-link" onClick={onNavigateHome}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Social Media Management</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="smm-hero-section">
        <div className="smm-hero-glow"></div>
        <div className="container-inner">
          <div className="smm-hero-content">
            <h1 className="smm-hero-title">
              Best <span className="title-logo-gradient">Social Media Management Company</span> in Gorakhpur | Click On Media
            </h1>

            <p className="smm-hero-subtitle">
              As the leading social media management company in Gorakhpur, <strong>Click On Media</strong> offers professional marketing and management services to help your business thrive.
            </p>

            <div className="smm-hero-pills">
              <span className="smm-pill">• Custom Strategy</span>
              <span className="smm-pill">• Content Creation</span>
              <span className="smm-pill">• Community Growth</span>
            </div>

            <div className="smm-hero-actions">
              <button 
                type="button" 
                className="btn-smm-primary"
                onClick={onOpenContact}
              >
                <span>See The Benefits</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <a href="tel:+918303534063" className="btn-smm-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 8303534063</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR SOCIAL MEDIA MANAGEMENT SERVICES (6 CARDS) */}
      <section className="smm-section smm-services-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              Our <span className="title-logo-gradient">Social Media Management Services</span> in Gorakhpur
            </h2>
            <p className="section-main-sub">
              We provide end-to-end social media marketing services designed to help your business grow, engage, and convert more customers.
            </p>
          </div>

          <div className="smm-services-grid">
            {services.map((srv, idx) => (
              <div key={idx} className="smm-service-card">
                <div className="smm-service-icon">
                  {srv.icon}
                </div>
                <h3 className="smm-service-title">{srv.title}</h3>
                <p className="smm-service-desc">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR EXPERTISE: A DEEP DIVE INTO THE INDUSTRIES WE SERVE */}
      <section className="smm-section smm-expertise-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">OUR EXPERTISE</span>
            <h2 className="section-main-heading">
              A Deep Dive into the <span className="title-logo-gradient">Industries We Serve</span>
            </h2>
            <p className="section-main-sub">
              A generic strategy doesn't work. Click on an industry below to see our detailed, data-driven, and customized approach for businesses in Gorakhpur.
            </p>
          </div>

          <div className="smm-industries-accordion">
            {industries.map((ind, idx) => {
              const isOpen = activeIndustry === idx;
              return (
                <div key={idx} className={`smm-industry-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="smm-industry-btn"
                    onClick={() => toggleIndustry(idx)}
                    aria-expanded={isOpen}
                  >
                    <div className="smm-industry-btn-left">
                      <span className="industry-emoji">{ind.icon}</span>
                      <span className="industry-name">{ind.title}</span>
                    </div>
                    <span className={`smm-industry-plus ${isOpen ? 'rotate' : ''}`}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="smm-industry-pane">
                      <p className="industry-content-text">{ind.content}</p>
                      <button 
                        type="button" 
                        className="btn-industry-inquire"
                        onClick={onOpenContact}
                      >
                        Inquire for {ind.title.split(':')[0]} →
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Local Agency Callout Card */}
          <div className="smm-local-agency-card">
            <h3 className="local-agency-title">Your Own Local Digital Marketing Agency</h3>
            <p className="local-agency-desc">
              These are just a few examples. Our core principle remains the same for every industry—to understand your business and to create a strategy that works <strong>just for you</strong>. When clients search for a "digital marketing agency near me," they are looking for a team that understands their city. <strong>Click On Media</strong> is your very own Gorakhpur-based agency. Our work has earned us a reputation as the <strong>Best Social Media Marketing Agency in Gorakhpur</strong>.
            </p>
            <button 
              type="button" 
              className="btn-smm-primary"
              onClick={onOpenContact}
            >
              Get a FREE Consultation Today!
            </button>
          </div>
        </div>
      </section>

      {/* 4. OUR PROVEN SOCIAL MEDIA MANAGEMENT PROCESS */}
      <section className="smm-section smm-process-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              Our <span className="title-logo-gradient">Proven Social Media Management Process</span>
            </h2>
            <p className="section-main-sub">
              At Click On Media, we follow a clear, result-driven process designed for transparency, growth, and maximum ROI.
            </p>
          </div>

          <div className="smm-process-split">
            {/* Left Column: Process Steps */}
            <div className="smm-process-steps-col">
              {processSteps.map((step, idx) => (
                <div key={idx} className="smm-step-card">
                  <div className="step-header">
                    <span className="step-emoji">{step.emoji}</span>
                    <h3 className="step-title">{step.title}:</h3>
                  </div>
                  <p className="step-desc">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Right Column: High-Res Infographic Graphic */}
            <div className="smm-process-graphic-col">
              <div className="smm-graphic-card">
                <img 
                  src="./assets/smm-page/smm-process-infographic.jpg" 
                  alt="Social Media Workflow Cycle Infographic - Click On Media" 
                  className="smm-graphic-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. YOUR TRUSTED PARTNER FOR SOCIAL MEDIA GROWTH */}
      <section className="smm-section smm-why-choose-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              🌟 Your Trusted Partner for <span className="title-logo-gradient">Social Media Growth</span>
            </h2>
            <h3 className="section-sub-heading">
              💡 Why Choose <span className="title-logo-gradient">Click On Media</span>?
            </h3>
            <p className="section-main-sub">
              At Click On Media, we believe social media is not just about posting content — it's about creating impact, building trust, and driving real business results. Here's why businesses choose us as their Social Media Marketing Agency in Gorakhpur.
            </p>
          </div>

          <div className="smm-why-grid">
            {whyChooseCards.map((card, idx) => (
              <div key={idx} className="smm-why-card">
                <div className="why-card-icon-circle">
                  <span>{card.icon}</span>
                </div>
                <h4 className="why-card-title">{card.title}</h4>
                <p className="why-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CLARITY & CONFIDENCE: YOUR QUESTIONS, ANSWERED (FAQ) */}
      <section className="smm-section smm-faq-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">CLARITY & CONFIDENCE</span>
            <h2 className="section-main-heading">
              Your Questions, <span className="title-logo-gradient">Answered</span>
            </h2>
            <p className="section-main-sub">
              We believe in empowering our clients with knowledge. Here are in-depth answers to common questions about navigating the digital landscape in Gorakhpur, designed to help you make the best decisions for your business.
            </p>
          </div>

          <div className="smm-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`smm-faq-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="smm-faq-question-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="smm-faq-q-text">{faq.q}</span>
                    <span className={`smm-faq-plus ${isOpen ? 'rotate' : ''}`}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="smm-faq-answer-pane">
                      <p className="smm-faq-a-text">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM CALLOUT BANNER */}
      <section className="smm-cta-banner-section">
        <div className="container-inner">
          <div className="smm-cta-card">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Grow Your Brand with Gorakhpur's #1 Social Media Agency?
              </h2>
              <p className="cta-desc">
                From scroll-stopping viral reels and aesthetic graphics to high-converting Meta lead ads, Click On Media delivers end-to-end social media growth in Gorakhpur.
              </p>
              <div className="cta-buttons">
                <button 
                  type="button" 
                  className="btn-smm-primary"
                  onClick={onOpenContact}
                >
                  Book Free Social Media Audit →
                </button>
                <a href="tel:+918303534063" className="btn-smm-secondary">
                  📞 Call +91 8303534063
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
