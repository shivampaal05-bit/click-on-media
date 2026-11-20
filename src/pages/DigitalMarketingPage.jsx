import React, { useState } from 'react';
import '../styles/DigitalMarketingPage.css';

export default function DigitalMarketingPage({ onOpenContact, onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(prev => (prev === index ? null : index));
  };

  const whyPartnerCards = [
    {
      title: 'Unmatched Gorakhpur Expertise',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      desc: "We are not just another digital marketing agency near me; we are part of the local fabric. We understand Gorakhpur's consumer behaviour and market nuances, ensuring your campaigns truly connect with the local audience and deliver results."
    },
    {
      title: 'A Full-Service Digital Marketing Company in Gorakhpur',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      desc: "Get a cohesive strategy and seamless execution all under one roof. Our integrated approach ensures all your marketing channels work together towards one goal: your success.",
      subHighlight: "Our Core Services: From a leading SEO Company in Gorakhpur to expert social media management, we offer a complete suite of services."
    },
    {
      title: 'Focused on Your ROI',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      desc: "We are obsessed with results. Our campaigns are designed not for vanity metrics, but for driving tangible outcomes—more leads, more sales, and a higher return on your investment.",
      subHighlight: "Effective PPC Services in Gorakhpur: Our ad campaigns are optimized to ensure every rupee you spend delivers maximum value and conversions."
    },
    {
      title: 'Google & Meta Certified Team',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
      desc: "Your campaigns are managed by professionals officially certified by industry leaders. This guarantees your strategy is modern, effective, and compliant with the latest best practices.",
      subHighlight: "Your Expert Google Ads Agency in Gorakhpur: Work with a team that knows the ad platforms inside and out."
    },
    {
      title: 'Honest & Transparent Reporting',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
      desc: "You will never be in the dark. We provide clear, detailed monthly reports showing exactly what's working. We believe a partnership built on trust is built to last.",
      subHighlight: "Data-Driven Digital Marketing in Gorakhpur: We use data to refine strategies and ensure continuous improvement."
    },
    {
      title: 'Affordable & Scalable Plans',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
      ),
      desc: "Powerful marketing should be accessible to all. We offer tailored, budget-friendly packages for startups, SMEs, and large enterprises, designed to grow with your business.",
      subHighlight: "Best SEO Agency in Gorakhpur for Every Budget: Get world-class SEO Services in Gorakhpur without breaking the bank."
    }
  ];

  const quickServices = [
    {
      title: 'Search Engine Optimization (SEO)',
      desc: 'Get found where it matters most: Google. Our expert SEO services help you rank higher, driving organic traffic and establishing your authority online.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    },
    {
      title: 'Social Media Marketing (SMM)',
      desc: 'Connect with your audience on Facebook & Instagram. We build brand loyalty and generate leads through our strategic Social Media Marketing in Gorakhpur.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
      )
    },
    {
      title: 'Google Ads & PPC',
      desc: 'Achieve instant visibility and drive high-intent traffic. Our specialized Google Ads and PPC management ensures immediate leads.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
      )
    },
    {
      title: 'Content Marketing & Blogging',
      desc: 'Attract and educate your audience with compelling stories. Our Content Marketing services establish your expertise and build trust.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      title: 'Email Marketing & Automation',
      desc: 'Build lasting relationships and drive repeat business with personalized communication. Our Email Marketing strategies help you nurture leads.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
    {
      title: 'Website Design & Development',
      desc: 'Your website is your 24/7 sales engine. We create stunning, user-friendly, and SEO-optimized website designs that drive conversions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    }
  ];

  const deepDiveServices = [
    {
      number: '1',
      title: 'Unlocking Visibility with Search Engine Optimization (SEO)',
      paragraphs: [
        "In today's digital age, if you're not on the first page of Google, you're practically invisible. Our SEO Services in Gorakhpur are designed to put your business front and center. As a leading Best SEO Agency in Gorakhpur, we employ a holistic approach that covers all aspects of search engine optimization, ensuring long-term, sustainable growth for your business.",
        "We begin with comprehensive keyword research, identifying the most lucrative terms your audience uses. Our strategies include meticulous on-page SEO, technical SEO, and high-quality off-page SEO. As your trusted SEO Company in Gorakhpur, we craft tailored strategies that align with your business objectives."
      ],
      image: './assets/digitalmarketing-page/dm-service-seo.jpg',
      alt: 'Unlocking Visibility with SEO - Click On Media'
    },
    {
      number: '2',
      title: 'Building Communities with Social Media Marketing (SMM)',
      paragraphs: [
        "Social media is a powerful tool to engage with customers and build brand loyalty. Our Social Media Marketing in Gorakhpur transforms your social presence into a dynamic platform for growth. We manage your presence across key platforms like Facebook, Instagram, and LinkedIn, tailoring strategies to each network's unique audience.",
        "Our team develops engaging content strategies, from eye-catching visuals to compelling copy. We handle everything from daily posting and community management to running highly targeted social media advertising campaigns. We focus on local social media engagement to amplify your message and build a strong local following."
      ],
      image: './assets/digitalmarketing-page/dm-service-smm.jpg',
      alt: 'Building Communities with Social Media Marketing - Click On Media'
    },
    {
      number: '3',
      title: 'Instant Impact with Google Ads & PPC',
      paragraphs: [
        "We conduct in-depth keyword research and develop compelling ad copy that stands out. Our strategies encompass various PPC channels, including Google Search Ads and Display Ads. With transparent reporting, we ensure every rupee you invest in our PPC services in Gorakhpur contributes directly to your business goals."
      ],
      image: './assets/digitalmarketing-page/dm-service-ppc.jpg',
      alt: 'Instant Impact with Google Ads and PPC Management - Click On Media'
    },
    {
      number: '4',
      title: 'Engaging Audiences with Content Marketing',
      paragraphs: [
        "Content is the fuel that powers all successful digital marketing. It's how you build trust, answer customer questions, and establish yourself as the go-to expert in Gorakhpur. Our Content Marketing service focuses on creating valuable, relevant, and consistent content that attracts and retains your target audience."
      ],
      image: './assets/digitalmarketing-page/dm-service-content.jpg',
      alt: 'Engaging Audiences with Content Marketing - Click On Media'
    },
    {
      number: '5',
      title: 'Driving Sales with Email Marketing & Automation',
      paragraphs: [
        "Email marketing remains one of the highest ROI activities in digital marketing. It's your direct line of communication with your most engaged customers. We help you build a valuable email list and create professional campaigns that nurture leads and drive repeat business.",
        "We design beautiful, mobile-friendly email templates and set up powerful automation sequences. Imagine automatically sending a welcome email to new subscribers, a special offer on their birthday, or a reminder for an abandoned cart. This personalized approach builds strong customer relationships and significantly boosts sales with minimal ongoing effort."
      ],
      image: './assets/digitalmarketing-page/dm-service-email.jpg',
      alt: 'Driving Sales with Email Marketing Automation - Click On Media'
    },
    {
      number: '6',
      title: 'High-Performance Website Design & Development',
      paragraphs: [
        "Your website is the foundation of your digital marketing presence. As a premier IT solutions company, we build websites that are not just beautiful, but are true business assets.",
        "Our development process focuses on creating a fast, secure, and mobile-friendly experience for your visitors. We prioritize clean code, intuitive navigation, and clear calls-to-action to maximize conversion rates. Crucially, every website we build is structured for SEO from the ground up, giving you a powerful head start in ranking on Google."
      ],
      image: './assets/digitalmarketing-page/dm-service-webdev.jpg',
      alt: 'High-Performance Website Design and Development - Click On Media'
    }
  ];

  const blueprintPhases = [
    {
      phaseNumber: '01',
      title: 'Phase 1: Deep Dive & Goal Setting',
      desc: 'We begin with a comprehensive analysis of your business, competition, and target audience in Gorakhpur. We work with you to define clear, measurable objectives (KPIs) that align with your business goals, ensuring our entire strategy is focused on what matters most to you.',
      image: './assets/webdev-page/step-discussion.jpg',
      alt: 'Deep Dive & Goal Setting'
    },
    {
      phaseNumber: '02',
      title: 'Phase 2: Custom Strategy Formulation',
      desc: 'Based on our discovery, we create a bespoke digital marketing blueprint. This includes selecting the optimal mix of channels (SEO, SMM, PPC), defining content pillars, and mapping out the customer journey to ensure a cohesive and powerful marketing approach.',
      image: './assets/webdev-page/step-uiux.jpg',
      alt: 'Custom Strategy Formulation'
    },
    {
      phaseNumber: '03',
      title: 'Phase 3: Campaign Execution & Launch',
      desc: 'Our specialists bring the strategy to life with precision—from executing technical SEO audits and creating compelling social content to deploying highly targeted ad campaigns. We manage every detail to ensure a flawless rollout.',
      image: './assets/webdev-page/step-development.jpg',
      alt: 'Campaign Execution & Launch'
    },
    {
      phaseNumber: '04',
      title: 'Phase 4: Data Analysis & Optimization',
      desc: "Our work doesn't stop at launch. We continuously monitor your campaign data, analyzing performance against KPIs. This data-driven feedback loop allows us to make real-time adjustments, optimizing for better results and a higher return on investment.",
      image: './assets/webdev-page/step-testing.jpg',
      alt: 'Data Analysis & Optimization'
    },
    {
      phaseNumber: '05',
      title: 'Phase 5: Transparent Reporting & Scaling',
      desc: 'You receive a clear, comprehensive monthly report that translates complex data into actionable insights. We review our progress together and identify opportunities to scale your success, ensuring your digital marketing efforts evolve with your business.',
      image: './assets/webdev-page/step-launch.jpg',
      alt: 'Transparent Reporting & Scaling'
    }
  ];

  const industryPlaybooks = [
    {
      sector: 'For Healthcare',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      challenge: 'Building patient trust and visibility in a competitive local market.',
      playbookPoints: [
        'Hyper-local SEO to rank for "doctor near me" and specific treatments.',
        'Building a professional, credible website with easy appointment booking.',
        'Managing online reputation and patient reviews on Google.',
        'Informative content (blogs, videos) to establish expertise and trust.'
      ]
    },
    {
      sector: 'For Education',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      challenge: 'Attracting new student admissions and engaging with parents effectively.',
      playbookPoints: [
        'Targeted social media ads for admission seasons.',
        'SEO to rank for "best schools in Gorakhpur" or specific courses.',
        'Video testimonials from current students and parents.',
        'A professional website showcasing facilities and achievements.'
      ]
    },
    {
      sector: 'For Real Estate',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="22.01" />
          <line x1="15" y1="22" x2="15.01" y2="22" />
          <line x1="9" y1="6" x2="9" y2="6.01" />
          <line x1="15" y1="6" x2="15.01" y2="6.01" />
        </svg>
      ),
      challenge: 'Generating high-quality leads and showcasing properties effectively online.',
      playbookPoints: [
        'High-quality visual content: virtual tours and professional property photos.',
        'Targeted Facebook & Instagram lead generation ads for potential buyers.',
        'SEO for keywords like "flats for sale in Gorakhpur".',
        'An easy-to-navigate website with detailed property listings.'
      ]
    }
  ];

  const packages = [
    {
      name: 'Starter Growth',
      subtitle: 'Perfect for small businesses looking to build a foundational online presence.',
      isPopular: false,
      badgeText: '',
      features: [
        'Basic SEO Setup',
        'Social Media Profile Setup',
        'Google Business Profile Mgmt',
        'Monthly Performance Report',
        'Local Keyword Optimization'
      ]
    },
    {
      name: 'Business Pro',
      subtitle: 'An integrated strategy for businesses ready to actively attract leads and grow.',
      isPopular: true,
      badgeText: 'Most Popular',
      features: [
        'Comprehensive SEO Services',
        'Active Social Media Mgmt (15 Posts/Mo)',
        'Google Ads Campaign Mgmt',
        'Content Creation (2 High-Rank Blogs/Mo)',
        'Detailed Analytics & Lead Reporting',
        'Dedicated Campaign Strategist'
      ]
    },
    {
      name: 'Enterprise Elite',
      subtitle: 'A custom, aggressive strategy designed for market leaders aiming to dominate.',
      isPopular: false,
      badgeText: '',
      features: [
        'Advanced Technical SEO & Strategy',
        'Multi-Channel Ad Campaigns (Meta + Google)',
        'Extensive Content & Video Marketing',
        'Dedicated Senior Account Manager',
        '24/7 Priority Support & Weekly Sprints',
        'Custom Conversion Rate Optimization (CRO)'
      ]
    }
  ];

  const faqs = [
    {
      q: 'With so many options in Gorakhpur, why should I choose Click On Media?',
      a: "Click On Media isn't just an agency that runs ads; we are Gorakhpur's top data-backed digital growth partners. We combine deep local consumer psychology with officially certified Google & Meta expertise. We focus strictly on measurable ROI (leads, calls, footfalls, revenue) rather than vanity likes, and provide 100% transparent live reporting."
    },
    {
      q: 'How long does it really take to see results from your SEO services in Gorakhpur?',
      a: 'SEO is a sustainable, compounding asset. Typically, businesses start noticing improved keyword rankings and increased organic impressions within 60 to 90 days. Within 3 to 6 months, as domain authority builds, high-intent inquiries and first-page Google rankings solidify. If you need immediate results from day one, we pair SEO with targeted Google Ads.'
    },
    {
      q: 'Is social media marketing more than just posting images?',
      a: 'Absolutely. Posting pretty graphics without a strategy rarely generates sales. Our Social Media Marketing involves audience persona mapping, high-converting video reels, engagement hooks, community management, and hyper-targeted lead generation ad campaigns on Instagram and Facebook that actively capture qualified phone calls and form submissions.'
    },
    {
      q: 'How do I know if my marketing budget is being spent effectively?',
      a: 'We believe in complete transparency. Every single rupee spent is tracked using Google Analytics 4, Meta Pixel, and conversion APIs. You receive comprehensive monthly reports showing your exact Cost Per Lead (CPL), Return on Ad Spend (ROAS), website traffic growth, and overall campaign ROI.'
    },
    {
      q: 'What is an "integrated strategy" and why does it matter?',
      a: 'An integrated strategy means your SEO, Google Ads, Social Media, Website, and Email marketing work in complete harmony rather than operating in silos. For example, visitors who land on your site via Google SEO are retargeted on Instagram, and converted via high-converting landing pages. This synergy multiplies your conversions while reducing cost per customer.'
    },
    {
      q: 'What results can I expect in the first month of working with you?',
      a: 'In Month 1, we conduct full technical SEO audits, set up conversion tracking pixels, optimize your Google Business Profile, launch high-impact paid ad campaigns for immediate lead flow, and formulate your custom content calendar. Many clients start receiving direct phone calls and inquiries within the first 2-3 weeks of active ad rollout.'
    },
    {
      q: 'What should I look for when searching for a "digital marketing agency near me"?',
      a: 'Look for a verified track record in the local Gorakhpur market, certified specialists in Google & Meta platforms, clear case studies with real numbers, transparent monthly reporting, and a team that understands your specific industry nuances rather than offering copy-paste templates.'
    }
  ];

  return (
    <div className="dm-page-container">
      {/* Breadcrumb Navigation Bar */}
      <div className="dm-breadcrumb-bar">
        <div className="container-inner breadcrumb-inner">
          <button type="button" className="breadcrumb-home-link" onClick={onNavigateHome}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Digital Marketing</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="dm-hero-section">
        <div className="dm-hero-glow"></div>
        <div className="container-inner">
          <div className="dm-hero-content">
            <div className="dm-hero-pill">
              <span className="hero-pill-dot"></span>
              <span>Gorakhpur's #1 Digital Marketing Agency</span>
            </div>

            <h1 className="dm-hero-title">
              Click On Media – Best{' '}
              <span className="title-logo-gradient">Digital Marketing Company</span>{' '}
              in Gorakhpur
            </h1>

            <p className="dm-hero-subtitle">
              Grow your business with result-oriented digital marketing services in Gorakhpur. At <strong>Click On Media</strong>, we craft customized strategies that help local businesses rank higher, get more leads, and increase sales.
            </p>

            <div className="dm-hero-actions">
              <button 
                type="button" 
                className="btn-dm-primary"
                onClick={onOpenContact}
              >
                <span>Get a Free Marketing Plan</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <a href="tel:+918303534063" className="btn-dm-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 8303534063</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY PARTNER WITH THE BEST DIGITAL MARKETING AGENCY */}
      <section className="dm-section dm-why-partner">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              Why Partner With The{' '}
              <span className="title-logo-gradient">Best Digital Marketing Agency</span>{' '}
              in Gorakhpur?
            </h2>
            <p className="section-main-sub">
              Choosing a marketing agency is a critical investment in your future. We are Gorakhpur's dedicated digital strategists, combining local market intelligence with technical expertise to deliver real, measurable results and an exceptional return on your investment.
            </p>
          </div>

          <div className="why-partner-grid">
            {whyPartnerCards.map((card, idx) => (
              <div key={idx} className="partner-card">
                <div className="partner-card-icon-wrap">
                  {card.icon}
                </div>
                <h3 className="partner-card-title">{card.title}</h3>
                <p className="partner-card-desc">{card.desc}</p>
                {card.subHighlight && (
                  <div className="partner-card-subhighlight">
                    {card.subHighlight}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR DIGITAL MARKETING SERVICES OVERVIEW */}
      <section className="dm-section dm-quick-services">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              💼 Our Digital{' '}
              <span className="title-logo-gradient">Marketing Services</span>
            </h2>
            <p className="section-main-sub">
              At Click On Media, we don't just offer services; we craft comprehensive digital strategies designed to elevate your brand, engage your target audience, and drive tangible business growth. As a leading digital marketing agency in Gorakhpur, we understand the unique challenges and opportunities businesses face. Our suite of Digital Marketing Services in Gorakhpur is tailored to meet your specific goals.
            </p>
          </div>

          <div className="quick-services-grid">
            {quickServices.map((srv, idx) => (
              <div key={idx} className="quick-service-card">
                <div className="quick-service-icon">
                  {srv.icon}
                </div>
                <h3 className="quick-service-title">{srv.title}</h3>
                <p className="quick-service-desc">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DEEP-DIVE SERVICE FEATURE ROWS WITH REAL EXTRACTED IMAGES */}
      <section className="dm-section dm-deepdive-section">
        <div className="container-inner">
          <div className="deepdive-rows-container">
            {deepDiveServices.map((item, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div key={idx} className={`deepdive-row ${isEven ? 'deepdive-row-reverse' : ''}`}>
                  <div className="deepdive-text-col">
                    <h3 className="deepdive-title">{item.number}. {item.title}</h3>
                    {item.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="deepdive-desc">{p}</p>
                    ))}
                    <button 
                      type="button" 
                      className="btn-deepdive-cta"
                      onClick={onOpenContact}
                    >
                      Inquire About {item.title.split('with ')[1] || item.title} →
                    </button>
                  </div>
                  <div className="deepdive-image-col">
                    <div className="deepdive-image-card">
                      <img src={item.image} alt={item.alt} className="deepdive-img" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. YOUR BLUEPRINT FOR DIGITAL GROWTH (5 PHASES) */}
      <section className="dm-section dm-blueprint-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              Your <span className="title-logo-gradient">Blueprint for Digital Growth</span>
            </h2>
            <p className="section-main-sub">
              Success is not an accident. We follow a structured, five-phase process designed to deliver clarity, efficiency, and exceptional results for every digital marketing campaign.
            </p>
          </div>

          <div className="blueprint-rows-container">
            {blueprintPhases.map((phase, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div key={idx} className={`blueprint-row ${isEven ? 'blueprint-row-reverse' : ''}`}>
                  <div className="blueprint-text-col">
                    <span className="blueprint-phase-badge">PHASE {phase.phaseNumber}</span>
                    <h3 className="blueprint-phase-title">{phase.title}</h3>
                    <p className="blueprint-phase-desc">{phase.desc}</p>
                  </div>
                  <div className="blueprint-image-col">
                    <div className="blueprint-image-card">
                      <img src={phase.image} alt={phase.alt} className="blueprint-img" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRY-SPECIFIC DIGITAL PLAYBOOKS */}
      <section className="dm-section dm-playbooks-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              Industry-Specific <span className="title-logo-gradient">Digital Playbooks</span>
            </h2>
            <p className="section-main-sub">
              A one-size-fits-all approach doesn't work. We have developed specialized strategies to address the unique challenges and opportunities within Gorakhpur's key sectors.
            </p>
          </div>

          <div className="playbooks-grid">
            {industryPlaybooks.map((pb, idx) => (
              <div key={idx} className="playbook-card">
                <div className="playbook-header">
                  <div className="playbook-icon">
                    {pb.icon}
                  </div>
                  <h3 className="playbook-sector-title">{pb.sector}</h3>
                </div>

                <div className="playbook-body">
                  <div className="playbook-challenge-box">
                    <strong>The Challenge:</strong> {pb.challenge}
                  </div>

                  <h4 className="playbook-points-title">Our Playbook:</h4>
                  <ul className="playbook-points-list">
                    {pb.playbookPoints.map((point, pIdx) => (
                      <li key={pIdx}>
                        <svg className="point-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    type="button" 
                    className="btn-playbook-cta"
                    onClick={onOpenContact}
                  >
                    Get {pb.sector} Strategy →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DIGITAL MARKETING PACKAGES */}
      <section className="dm-section dm-packages-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              Flexible <span className="title-logo-gradient">Digital Marketing Packages</span>
            </h2>
            <p className="section-main-sub">
              Choose the package that fits your needs or contact us for a custom quote.
            </p>
          </div>

          <div className="packages-cards-grid">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`dm-pkg-card ${pkg.isPopular ? 'popular-pkg-card' : ''}`}>
                {pkg.isPopular && (
                  <div className="popular-pkg-badge">{pkg.badgeText}</div>
                )}
                <h3 className="dm-pkg-name">{pkg.name}</h3>
                <p className="dm-pkg-sub">{pkg.subtitle}</p>

                <ul className="dm-pkg-features">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <svg className="pkg-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  type="button" 
                  className={`btn-pkg-action ${pkg.isPopular ? 'btn-pkg-popular' : ''}`}
                  onClick={onOpenContact}
                >
                  {pkg.name === 'Enterprise Elite' ? 'Get a Quote →' : 'Get Started →'}
                </button>
              </div>
            ))}
          </div>

          <div className="dm-packages-custom-note">
            👉 Need a custom plan?{' '}
            <button type="button" className="inline-contact-link" onClick={onOpenContact}>
              Contact us today for a free consultation!
            </button>
          </div>
        </div>
      </section>

      {/* 8. DIGITAL MARKETING QUESTIONS ANSWERED (FAQ) */}
      <section className="dm-section dm-faq-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              Your Digital Marketing <span className="title-logo-gradient">Questions Answered</span>
            </h2>
            <p className="section-main-sub">
              Here are in-depth answers to common questions about our digital marketing services in Gorakhpur.
            </p>
          </div>

          <div className="dm-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`dm-faq-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="dm-faq-question-btn" 
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="dm-faq-q-text">{faq.q}</span>
                    <span className={`dm-faq-plus ${isOpen ? 'rotate' : ''}`}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="dm-faq-answer-pane">
                      <p className="dm-faq-a-text">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. BOTTOM CALLOUT BANNER */}
      <section className="dm-cta-banner-section">
        <div className="container-inner">
          <div className="dm-cta-card">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Accelerate Your Business Growth with Gorakhpur's Top Agency?
              </h2>
              <p className="cta-desc">
                From high-converting Google Ads and organic SEO supremacy to engaging Social Media campaigns, Click On Media delivers production-grade digital marketing solutions in Gorakhpur.
              </p>
              <div className="cta-buttons">
                <button 
                  type="button" 
                  className="btn-dm-primary"
                  onClick={onOpenContact}
                >
                  Book Free Strategy Call →
                </button>
                <a href="tel:+918303534063" className="btn-dm-secondary">
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
