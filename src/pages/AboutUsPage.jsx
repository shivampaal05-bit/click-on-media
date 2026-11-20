import React from 'react';
import '../styles/AboutUsPage.css';

export default function AboutUsPage({ onOpenContact, onNavigateHome }) {
  const capabilities = [
    {
      title: 'Custom Software Development',
      desc: 'Tailored solutions to meet the specific needs of businesses.'
    },
    {
      title: 'Billing Software',
      desc: 'Advanced billing systems to streamline financial operations.'
    },
    {
      title: 'School Software',
      desc: 'Comprehensive solutions for managing educational institutions.'
    },
    {
      title: 'Website Development',
      desc: 'Creating visually appealing and functionally robust websites.'
    },
    {
      title: 'SEO and Digital Marketing',
      desc: 'Enhancing online presence and search engine rankings.'
    },
    {
      title: 'Social Media Management',
      desc: 'Managing and optimizing social media platforms for better engagement.'
    }
  ];

  const whyChooseUsData = [
    {
      id: 'custom-software',
      title: 'Customized Software',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
          <circle cx="12" cy="12" r="4"></circle>
          <circle cx="12" cy="12" r="1.5" fill="currentColor"></circle>
        </svg>
      ),
      description: (
        <>
          <strong>Click On Media</strong> best software development company in Gorakhpur has expertise in creating customized software tailored to your business needs. We do not rely on ready-made templates. Using the latest technologies, we provide you with cloud-based solutions backed by our expertise.
        </>
      )
    },
    {
      id: 'seo-websites',
      title: 'SEO Friendly Websites',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6"></circle>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
          <path d="m9 8 2 2 4-4"></path>
        </svg>
      ),
      description: (
        <>
          At <strong>Click On Media</strong>, we design and develop websites that are optimized for search engines, ensuring higher visibility and better rankings. Our SEO-friendly websites are built with clean, efficient code and incorporate best practices in content structure, keyword integration, and responsive design. Enhance your online presence and attract more organic traffic with a website that not only looks great but also performs exceptionally well in search engine results.
        </>
      )
    },
    {
      id: 'affordable-solutions',
      title: 'Affordable Websites And Softwares',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
      description: (
        <>
          At <strong>Click On Media</strong>, we provide high-quality website and software solutions that fit your budget. Our affordable services ensure that you get the best value without compromising on quality. Whether you need a professional website, custom software, or cloud-based solutions, we deliver cost-effective results tailored to your business needs. Enhance your digital presence and streamline your operations with our budget-friendly offerings.
        </>
      )
    }
  ];

  const statsData = [
    { number: '#1', suffix: 'IT Services', label: 'Company In Gorakhpur' },
    { number: '93+', suffix: '', label: 'Global Clients' },
    { number: '3+', suffix: 'years', label: 'In Development & Media' }
  ];

  const marqueeServices = [
    'Website Development',
    'SEO Services',
    'Custom Software Development',
    'Digital Marketing',
    'SMO Services',
    'Graphics Design (Logos/Posters)',
    'Google Ads',
    'Social Media Ads',
    'Video Editing',
    'Reels/Shorts',
    'Full-Stack Training'
  ];

  const testimonials = [
    {
      name: 'Nikhil Singh',
      role: 'School Director, Gorakhpur',
      stars: 5,
      text: 'मैंने Click On Media से बहुत ही किफायती दाम में School Management Software खरीदा है और मैं इसे 1 साल से उपयोग कर रहा हूँ। वे बहुत ही पेशेवर हैं और उन्होंने इसे मेरी स्कूल और व्यवसाय की आवश्यकताओं के अनुसार बनाया है।'
    },
    {
      name: 'Anupath Singh',
      role: 'Retail & Wholesale Owner, Mohaddipur',
      stars: 5,
      text: 'Click On Media made a customized billing software for my business. The billing software was very affordable and also they assure me about my data in cloud for lifetime.'
    },
    {
      name: 'Shaurya Sharma',
      role: 'E-commerce Brand Founder',
      stars: 5,
      text: 'Best Software Company Near me! Click On Media optimized my website with expert SEO services, significantly boosting its growth. They truly are SEO and digital marketing experts.'
    },
    {
      name: 'Dr. Arvind Kumar',
      role: 'Healthcare Clinic Founder, Gorakhpur',
      stars: 5,
      text: 'Click On Media developed our patient appointment portal and managed local SEO campaigns. Within 3 months our appointment bookings tripled. Highly recommended IT partner!'
    }
  ];

  return (
    <div className="about-page-wrapper">
      
      {/* 1. Hero Header Section matching video */}
      <section className="about-hero-section">
        <div className="about-page-container">
          <div className="about-eyebrow-badge">
            <span className="eyebrow-dot"></span>
            <span>ABOUT CLICK ON MEDIA • GORAKHPUR</span>
          </div>
          <h1 className="about-main-title">
            Best Software &amp; IT Company In Gorakhpur | <span className="title-logo-gradient">Click On Media</span>
          </h1>
          <p className="about-hero-sub">
            Empowering businesses across Eastern UP with cutting-edge IT engineering, custom software, 
            high-ranking SEO, and cinematic performance media.
          </p>
        </div>
      </section>

      {/* 2. Main Narrative & Image Section */}
      <section className="about-intro-section">
        <div className="about-page-container">
          <div className="about-intro-grid">
            
            {/* Left Column: Team & Code Visual with Floating Badge */}
            <div className="about-visual-col">
              <div className="about-image-card">
                <img 
                  src="/assets/about/about-team-composition.jpg" 
                  alt="Click On Media Expert Development & Creative Team" 
                  className="about-primary-img"
                />
              </div>
            </div>

            {/* Right Column: Narrative & Key Capabilities */}
            <div className="about-content-col">
              <span className="about-section-tag">About Us</span>
              <h2 className="about-content-heading">
                <span className="heading-line">Click On Media is best</span>
                <span className="heading-line highlight-logo-gradient">software development &amp; IT</span>
                <span className="heading-line">company in Gorakhpur</span>
              </h2>
              
              <div className="about-paragraphs">
                <p>
                  <strong>Click On Media</strong> stands out as the best software development company in Gorakhpur, 
                  delivering a wide array of IT services tailored to meet the diverse needs of businesses and individuals. 
                  As a premier <strong>Gorakhpur IT company</strong>, Click On Media specializes in custom software development, 
                  offering innovative solutions that streamline operations and enhance productivity.
                </p>
                <p>
                  Whether you need advanced billing software or robust school software, Click On Media Gorakhpur ensures 
                  top-notch quality and performance. Their expertise extends to website development, providing visually 
                  appealing and functionally superior websites that cater to your unique business requirements.
                </p>
                <p>
                  Additionally, their proficiency in digital marketing and SEO services helps businesses establish a 
                  strong online presence, driving more traffic and improving search engine rankings. Click On Media is 
                  your go-to partner for all your software and digital needs, ensuring comprehensive support and excellent results.
                </p>
              </div>

              {/* 6 Capabilities Grid matching video */}
              <div className="about-capabilities-grid">
                {capabilities.map((cap, idx) => (
                  <div className="capability-item" key={idx}>
                    <div className="capability-arrow-circle">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </div>
                    <div className="capability-text-wrap">
                      <strong className="cap-title">{cap.title}:</strong>
                      <span className="cap-desc">{cap.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="about-cta-row">
                <a href="#/contact" className="btn-about-primary">
                  <span>Get in Touch With Us →</span>
                </a>
                <a href="tel:+918303534063" className="btn-about-secondary">
                  <span>Call: +91 8303534063</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="about-why-section">
        <div className="about-page-container">
          <div className="section-center-header">
            <span className="about-section-tag">Software Development Company In Gorakhpur</span>
            <h2 className="section-grand-title">
              Why choose <span className="highlight-logo-gradient">us ?</span>
            </h2>
          </div>

          <div className="why-cards-grid">
            {whyChooseUsData.map((card) => (
              <div className="why-info-card" key={card.id}>
                <div className="why-icon-bubble">
                  {card.icon}
                </div>
                <h3 className="why-card-title">{card.title}</h3>
                <p className="why-card-desc">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats That Matter Section */}
      <section className="about-stats-section">
        <div className="about-page-container">
          <div className="section-center-header">
            <span className="about-section-tag">Overview Company</span>
            <h2 className="section-grand-title">
              Stats that <span className="highlight-logo-gradient">matter</span>
            </h2>
          </div>

          <div className="about-stats-grid">
            {statsData.map((stat, idx) => (
              <div className="about-stat-card" key={idx}>
                <div className="stat-number-wrap">
                  <span className="stat-big-number">{stat.number}</span>
                  {stat.suffix && <span className="stat-suffix">{stat.suffix}</span>}
                </div>
                <span className="stat-desc-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Continuous Running Banner Ticker matching video */}
      <div className="about-marquee-bar">
        <div className="about-marquee-track">
          {[...Array(4)].map((_, clusterIdx) => (
            <div className="about-marquee-cluster" key={clusterIdx}>
              {marqueeServices.map((service, sIdx) => (
                <React.Fragment key={sIdx}>
                  <span className="marquee-service-item">{service}</span>
                  <span className="marquee-bullet">•</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 6. Client Testimonials Section ("Our customers love us.") */}
      <section className="about-testimonials-section">
        <div className="about-page-container">
          <div className="section-center-header">
            <span className="about-section-tag">Client Testimonials</span>
            <h2 className="section-grand-title">
              Our customers <span className="highlight-logo-gradient">love us.</span>
            </h2>
          </div>

          <div className="testimonials-cards-grid">
            {testimonials.map((item, idx) => (
              <div className="about-testimonial-card" key={idx}>
                <div className="testimonial-stars-row">
                  {[...Array(item.stars)].map((_, starIdx) => (
                    <span className="star-icon" key={starIdx}>★</span>
                  ))}
                </div>
                <p className="testimonial-quote-text">"{item.text}"</p>
                <div className="testimonial-client-meta">
                  <div className="client-avatar-circle">
                    {item.name.charAt(0)}
                  </div>
                  <div className="client-info-col">
                    <h4 className="client-full-name">{item.name}</h4>
                    <span className="client-company-role">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA Consultation Bar */}
      <section className="about-cta-banner">
        <div className="about-page-container">
          <div className="about-cta-content">
            <div className="cta-left-text">
              <span className="cta-tag">READY TO SCALE YOUR BUSINESS?</span>
              <h3>Start your digital transformation journey with Click On Media today</h3>
              <p>Get a comprehensive free website &amp; SEO audit or software demo in Gorakhpur.</p>
            </div>
            <div className="cta-right-actions">
              <a href="#/contact" className="btn-cta-white">
                Contact Our Team →
              </a>
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
