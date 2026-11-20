import React, { useState } from 'react';
import '../styles/WebsiteDevelopmentPage.css';

export default function WebsiteDevelopmentPage({ onOpenContact, onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(prev => (prev === index ? null : index));
  };

  const whyChooseItems = [
    {
      title: 'Mobile-friendly & Responsive',
      desc: 'We deliver professional websites that look perfect and function flawlessly on all devices, from mobiles to desktops.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )
    },
    {
      title: 'SEO-Optimized (Google Ready)',
      desc: 'As a result-driven company, we build websites that rank higher in Google and attract more organic leads for your business.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    },
    {
      title: 'Fast & Secure Development',
      desc: 'Our expert developers ensure your website and applications are fast, secure, and scalable for future growth.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    }
  ];

  const websiteTypes = [
    {
      title: 'Static Website',
      bestFor: 'Small businesses, portfolios, and startups needing a basic online presence.',
      desc: 'Static websites load quickly and have lower development costs. If you don\'t need to update content frequently (like contact info or service pages), this is a cost-effective solution. It\'s ideal for local businesses looking to establish credibility in Gorakhpur.',
      badge: 'Basic & Fast',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      title: 'Dynamic CMS Website',
      bestFor: 'Schools, colleges, blogs, corporate businesses, and service providers.',
      desc: 'A dynamic website (built on platforms like WordPress) gives you control. You can easily add new pages, blog posts, or images without any coding knowledge. If you plan to post regular updates, like educational institutes or news portals, this is the best choice for custom website development in Gorakhpur.',
      badge: 'Self-Managed',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2.05 12a9.94 9.94 0 0 1 .49-3.07L7.3 18.5a9.96 9.96 0 0 1-5.25-6.5z" />
          <path d="M12 2a9.96 9.96 0 0 1 7.07 2.93l-4.48 12.3-3.09-8.48 1.57-.15.22-.02c.4-.04.36-.61-.04-.61h-4.3c-.4 0-.44.57-.04.61l1.57.15 2.27 6.22-3.1 8.54A9.96 9.96 0 0 1 2 12c0-1.7.43-3.3 1.18-4.7L7.9 19.3l4.1-17.3z" />
        </svg>
      )
    },
    {
      title: 'Ecommerce Solution',
      bestFor: 'Retail stores, restaurants (with online ordering), and any business wanting to sell products online.',
      desc: 'A fully functional ecommerce website can expand your local Gorakhpur store to a national audience. We integrate secure payment gateways, inventory management, and user-friendly product pages. This solution is for those who want to expand their sales channels and generate revenue 24/7.',
      badge: 'High Revenue',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      )
    }
  ];

  const coreServices = [
    {
      title: 'Business Website Development',
      desc: 'We build professional, responsive, and SEO-ready websites for startups and enterprises. A strong business website establishes your digital identity and builds credibility with customers in Gorakhpur. Our focus is on creating a clean user experience that converts visitors into valuable leads by effectively showcasing your services.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      title: 'Ecommerce Website Development',
      desc: 'We create secure and feature-rich online stores to help you sell products effectively 24/7. Our specialized Ecommerce Website Development in Gorakhpur includes secure payment gateway integration, shopping cart functionality, and easy inventory management. We ensure your online store provides a smooth, trustworthy checkout experience for customers.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      )
    },
    {
      title: 'Custom Website Development',
      desc: 'When standard templates fall short, you need custom solutions. As a leading Custom Website Development Company in Gorakhpur, we build tailor-made solutions from scratch. Whether you need a complex booking system, a client portal, or specific process automation, our experienced developers create scalable applications designed precisely for your business model.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    }
  ];

  const processSteps = [
    {
      stepNumber: '01',
      title: 'Discussion & Requirement Gathering',
      desc: 'We start by understanding your business goals, target audience, and vision to create a solid foundation for the project.',
      image: './assets/webdev-page/step-discussion.jpg',
      alt: 'Click On Media Discussion & Requirement Gathering'
    },
    {
      stepNumber: '02',
      title: 'Creative UI/UX Design',
      desc: 'Our team designs modern, mobile-friendly, and engaging layouts that reflect your brand and enhance user experience.',
      image: './assets/webdev-page/step-uiux.jpg',
      alt: 'Creative UI/UX Design Mockup on Apple Devices'
    },
    {
      stepNumber: '03',
      title: 'Website Development',
      desc: 'Our experienced developers turn designs into fast, secure, and SEO-optimized websites, from business sites to e-commerce stores.',
      image: './assets/webdev-page/step-development.jpg',
      alt: 'Production Code & Website Development'
    },
    {
      stepNumber: '04',
      title: 'Testing & Quality Check',
      desc: 'Before launch, every website goes through rigorous testing for speed, security, and performance to ensure flawless results.',
      image: './assets/webdev-page/step-testing.jpg',
      alt: 'Software Testing & Quality Verification'
    },
    {
      stepNumber: '05',
      title: 'Launch & Ongoing Support',
      desc: 'After a successful launch, we provide regular updates, bug fixing, and full maintenance to support your continued growth.',
      image: './assets/webdev-page/step-launch.jpg',
      alt: 'Website Launch & Full Maintenance Support'
    }
  ];

  const industries = [
    {
      title: 'Retail & Ecommerce',
      image: './assets/webdev-page/industry-retail.jpg',
      desc: 'Expand your offline retail shop into a 24/7 revenue powerhouse with integrated payments and delivery tracking.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      )
    },
    {
      title: 'Education & Coaching',
      image: './assets/webdev-page/industry-education.jpg',
      desc: 'We create e-learning platforms and engaging websites for educational institutes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    },
    {
      title: 'Real Estate & Property',
      image: './assets/webdev-page/industry-realestate.jpg',
      desc: 'Showcase luxury properties, villas, commercial plots, and filter listings to capture qualified buyer leads.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="22.01" />
          <line x1="15" y1="22" x2="15.01" y2="22" />
          <line x1="9" y1="6" x2="9" y2="6.01" />
          <line x1="15" y1="6" x2="15.01" y2="6.01" />
          <line x1="9" y1="10" x2="9" y2="10.01" />
          <line x1="15" y1="10" x2="15.01" y2="10.01" />
          <line x1="9" y1="14" x2="9" y2="14.01" />
          <line x1="15" y1="14" x2="15.01" y2="14.01" />
        </svg>
      )
    },
    {
      title: 'Healthcare & Clinics',
      image: './assets/webdev-page/industry-healthcare.jpg',
      desc: 'Patient appointment booking, doctor profiles, teleconsultation, and emergency contact portals.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    },
    {
      title: 'IT & Software Companies',
      image: './assets/webdev-page/industry-it.jpg',
      desc: 'Robust web apps, SaaS platforms, and enterprise-level websites for technology businesses.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: 'Startups & Local Businesses',
      image: './assets/webdev-page/industry-startups.jpg',
      desc: 'High-converting landing pages, custom branding, and fast launches that help local Gorakhpur brands scale.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4.5c1.45-1.47 4.5-2 4.5-2" />
          <path d="M12 15v5s3.03-.55 4.5-2c1.47-1.45 2-4.5 2-4.5" />
        </svg>
      )
    }
  ];

  const packages = [
    {
      name: 'Starter Website',
      subtitle: 'Perfect for startups and small businesses needing a professional online presence.',
      isPopular: false,
      badgeText: '',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      features: [
        'Basic 5-Page Website',
        'Mobile-Friendly Design',
        'Contact Form Integration',
        'Basic SEO Setup',
        'Fast SSD Cloud Hosting Setup'
      ]
    },
    {
      name: 'Ecommerce Website',
      subtitle: 'A full-featured online store to sell your products and grow your business online.',
      isPopular: true,
      badgeText: 'Most Popular',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
      features: [
        'Full-Featured Online Store',
        'Secure Payment Gateway',
        'Shopping Cart & Checkout',
        'Product Management Dashboard',
        'Advanced SEO & Analytics',
        'WhatsApp Order Notifications'
      ]
    },
    {
      name: 'Premium Custom',
      subtitle: 'Advanced, tailor-made solutions for large projects with unique requirements.',
      isPopular: false,
      badgeText: '',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      features: [
        'Custom Features & Portal',
        'Advanced UI/UX Custom Design',
        'High-Performance Backend',
        'Dedicated Technical Support',
        'Scalable Cloud Architecture',
        'Full Database Automation'
      ]
    }
  ];

  const faqs = [
    {
      q: 'Q1. Ek website banane me kitna time aur cost lagta hai?',
      a: 'Website banane ka time aur cost uske type aur features par depend karta hai. Ek standard 5-page business website 5 se 10 working days me ready ho sakti hai, jabki custom ecommerce store ya web application me 2 se 4 hafte lagte hain. Click On Media Gorakhpur me sabse transparent pricing aur fast project delivery provide karta hai.'
    },
    {
      q: 'Q2. Kya aap SEO services dete hain aur meri website Google par rank kaise karegi?',
      a: 'Ji haan, Click On Media har website ko Google SEO-ready banata hai. Hum clean semantic code, high page speed, meta tags, structured schema, mobile responsiveness aur local Gorakhpur keywords optimize karte hain taaki aapki website Google par top search results me rank kare aur real customer leads laye.'
    },
    {
      q: 'Q3. Website launch ke baad kya support milega?',
      a: 'Website launch ke baad hum 100% ongoing support dete hain jisme free bug fixing, technical assistance, security updates aur server maintenance shamil hai. Humare dedicated local engineers Gorakhpur me available rehte hain taaki aapka business hamesha smoothly run kare.'
    },
    {
      q: 'Q4. Aap kin industries ke liye kaam karte hain aur kaun sa platform best hai?',
      a: 'Hum retail, coaching institutes, schools/colleges, real estate, clinics/hospitals, restaurants, transport aur technology startups sabhi ke liye kaam karte hain. Requirements ke hisaab se hum React, Next.js, WordPress, WooCommerce, Shopify ya Custom Node.js/Laravel architecture use karte hain.'
    },
    {
      q: 'Q5. Main aapko kyu chunu aur kya aap purani websites bhi redesign karte hain?',
      a: 'Click On Media Gorakhpur ki #1 IT aur Website Development agency hai jo modern, sleek design aur actual sales conversion par focus karti hai. Hum purani, slow aur outdated websites ko modern, fast aur mobile-friendly design me complete redesign karke fresh lead generation machine bana dete hain.'
    },
    {
      q: 'Q6. Kya aap online selling ke liye custom features (jaise booking system) bana sakte hain?',
      a: 'Bilkul! Chahe online appointment booking ho, doctor consultation scheduler ho, food ordering system ho ya custom ERP/billing software — humari experienced team sabhi custom features seamless flow ke saath develop karti hai.'
    },
    {
      q: 'Q7. Kya meri website mobile-friendly hogi aur design custom hoga?',
      a: 'Haan, 100% mobile-friendly and responsive. Gorakhpur me 85%+ internet users mobile se aate hain, isliye hum har website ko mobile, tablet, laptop aur 4K desktop par pixel-perfect look aur ultra-fast touch response ke sath design karte hain.'
    },
    {
      q: 'Q8. Kya aap hosting provide karte hain aur Gorakhpur ke bahar bhi kaam karte hain?',
      a: 'Ji haan, hum ultra-fast cloud hosting (AWS, Hostinger, Vercel, DigitalOcean) setup karke dete hain jisme SSL certificate aur daily backups shamil hote hain. Hum Gorakhpur ke sath-sath Lucknow, Varanasi, Delhi NCR aur international clients ke liye bhi successfully deliver karte hain.'
    },
    {
      q: 'Q9. Kya aap software/apps bhi banate hain aur kya main website khud manage kar paunga?',
      a: 'Haan, hum customized software, Android/iOS apps aur dynamic CMS portals develop karte hain. Hum aapko ek simple user-friendly Admin Dashboard dete hain jisse aap bina kisi coding knowledge ke text, photos, products aur prices khud badal sakte hain.'
    },
    {
      q: 'Q10. Aapse kaise contact karein aur project kaise start karein?',
      a: 'Aap upar diye gaye "Get a Free Consultation" button par click kar sakte hain, direct call ya WhatsApp kar sakte hain (+91 8303534063 / +91 9120677561) ya Gorakhpur office visit kar sakte hain. Hum pehle aapke requirements discuss karenge aur 24 hours me detailed proposal provide karenge.'
    },
    {
      q: 'Q11. Why is an Annual Maintenance Contract (AMC) necessary after the website is built?',
      a: 'Website launch ke baad regular updates, database backups, security patches aur server speed monitoring zaroori hoti hai taaki website hack-proof rahe aur 99.9% uptime maintain ho sake. AMC se aapko peace-of-mind milta hai aur aapka business bina rukavat chalta rehta hai.'
    },
    {
      q: 'Q12. Market mein saste options available hain. Main Click On Media ko kyu chunu?',
      a: 'Saste options me aksar slow pirated templates, zero Google ranking, high vulnerability aur launch ke baad koi support nahi milta. Click On Media me aapko custom high-converting design, Google SEO superiority, lightning-fast speed aur guaranteed dedicated support milta hai jo aapke business ke liye continuous revenue generate karta hai.'
    }
  ];

  return (
    <div className="webdev-page-container">
      {/* Breadcrumb Navigation Bar */}
      <div className="webdev-breadcrumb-bar">
        <div className="container-inner breadcrumb-inner">
          <button type="button" className="breadcrumb-home-link" onClick={onNavigateHome}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </button>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">Website Development</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="webdev-hero-section">
        <div className="webdev-hero-glow"></div>
        <div className="container-inner">
          <div className="webdev-hero-content">
            <div className="webdev-hero-pill">
              <span className="hero-pill-dot"></span>
              <span>Gorakhpur's #1 Website Development Agency</span>
            </div>

            <h1 className="webdev-hero-title">
              The Best{' '}
              <span className="title-logo-gradient">Website Development Company</span>{' '}
              in Gorakhpur
            </h1>

            <p className="webdev-hero-subtitle">
              Do you want to take your business online? <strong>Click On Media</strong> offers professional, fast, and SEO-friendly website development services in Gorakhpur. We create business websites, ecommerce stores, and custom web applications that help your business grow and attract more customers.
            </p>

            <div className="webdev-hero-actions">
              <button 
                type="button" 
                className="btn-webdev-primary"
                onClick={onOpenContact}
              >
                <span>Get a Free Consultation</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>

              <a href="tel:+918303534063" className="btn-webdev-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+91 8303534063</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE CLICK ON MEDIA */}
      <section className="webdev-section webdev-why-choose">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              Why Choose <span className="title-logo-gradient">Click On Media</span>?
            </h2>
            <p className="section-main-sub">
              At Click On Media, we are more than just a web agency – we are the Best Website Development Company in Gorakhpur trusted by startups, businesses, and enterprises to create powerful digital experiences that drive growth.
            </p>
          </div>

          <div className="why-choose-grid">
            {whyChooseItems.map((item, idx) => (
              <div key={idx} className="why-card">
                <div className="why-card-icon-wrap">
                  {item.icon}
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CHOOSING THE RIGHT WEBSITE FOR YOUR BUSINESS */}
      <section className="webdev-section webdev-comparison">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              Choosing the <span className="title-logo-gradient">Right Website</span> for Your Business
            </h2>
            <p className="section-main-sub">
              Every business has unique needs. To succeed in the Gorakhpur market, it's essential to understand whether a static website, dynamic CMS, or full ecommerce solution is best suited for your goals.
            </p>
          </div>

          <div className="comparison-cards-grid">
            {websiteTypes.map((type, idx) => (
              <div key={idx} className="comparison-card">
                <div className="comparison-icon-wrap">
                  {type.icon}
                </div>
                <h3 className="comparison-card-title">{type.title}</h3>
                <div className="comparison-bestfor">
                  <strong>Best For:</strong> {type.bestFor}
                </div>
                <p className="comparison-card-desc">{type.desc}</p>
                <button 
                  type="button" 
                  className="comparison-card-btn"
                  onClick={onOpenContact}
                >
                  Choose {type.title} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR WEBSITE DEVELOPMENT SERVICES */}
      <section className="webdev-section webdev-core-services">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              🛠️ Our Website <span className="title-logo-gradient">Development Services</span>
            </h2>
            <p className="section-main-sub">
              As a leading Website Designing Company in Gorakhpur, we provide complete web solutions that help businesses establish a strong online presence and achieve their digital goals. Below are our core services.
            </p>
          </div>

          <div className="core-services-grid">
            {coreServices.map((srv, idx) => (
              <div key={idx} className="core-service-card">
                <div className="core-service-icon">
                  {srv.icon}
                </div>
                <h3 className="core-service-title">{srv.title}</h3>
                <p className="core-service-desc">{srv.desc}</p>
                <button 
                  type="button" 
                  className="core-service-cta"
                  onClick={onOpenContact}
                >
                  Learn More & Inquire →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR PROVEN PROCESS (5 Alternating Rows with Real Video Images) */}
      <section className="webdev-section webdev-process-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              🔍 Our <span className="title-logo-gradient">Proven Process</span>
            </h2>
            <p className="section-main-sub">
              As a trusted Website Development Company in Gorakhpur, we follow a transparent and result-driven process to ensure perfection at every step of your project's journey.
            </p>
          </div>

          <div className="process-rows-container">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div key={idx} className={`process-row ${isEven ? 'process-row-reverse' : ''}`}>
                  <div className="process-text-col">
                    <span className="process-step-badge">STEP {step.stepNumber}</span>
                    <h3 className="process-step-title">{step.title}</h3>
                    <p className="process-step-desc">{step.desc}</p>
                  </div>
                  <div className="process-image-col">
                    <div className="process-image-card">
                      <img src={step.image} alt={step.alt} className="process-img" />
                      <div className="process-image-glow"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="webdev-section webdev-industries-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              🌎 Industries <span className="title-logo-gradient">We Serve</span>
            </h2>
            <p className="section-main-sub">
              As the Best Website Designing Company in Gorakhpur, we are your digital growth partners, delivering successful web solutions across a wide range of industries.
            </p>
          </div>

          <div className="industries-grid">
            {industries.map((ind, idx) => (
              <div key={idx} className="industry-card">
                <div className="industry-img-wrap">
                  <img src={ind.image} alt={ind.title} className="industry-card-img" />
                  <div className="industry-card-overlay"></div>
                </div>
                <div className="industry-card-content">
                  <div className="industry-card-icon">
                    {ind.icon}
                  </div>
                  <h3 className="industry-card-title">{ind.title}</h3>
                  <p className="industry-card-desc">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CASE STUDIES / SUCCESS STORIES */}
      <section className="webdev-section webdev-casestudies-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              Transforming Gorakhpur Businesses:{' '}
              <span className="title-logo-gradient">Our Success Stories</span>
            </h2>
            <p className="section-main-sub">
              We don't just build websites; we deliver results. See how Click On Media has helped various businesses in Gorakhpur achieve their digital goals.
            </p>
          </div>

          <div className="casestudies-list">
            {/* Case Study 1 */}
            <div className="casestudy-card">
              <div className="casestudy-img-col">
                <img 
                  src="./assets/webdev-page/casestudy-education.jpg" 
                  alt="Educational Institute Website Redesign Case Study" 
                  className="casestudy-img"
                />
              </div>
              <div className="casestudy-text-col">
                <h3 className="casestudy-title">Case Study: Educational Institute Website Redesign</h3>
                <p className="casestudy-client"><strong>Client:</strong> A prominent coaching institute, Gorakhpur.</p>
                <p className="casestudy-para">
                  <strong>Challenge:</strong> The client's old website was not mobile-friendly, and the admission process was confusing. They struggled to communicate important notices to parents and students, which led to decreased admission inquiries.
                </p>
                <p className="casestudy-para">
                  <strong>Solution:</strong> Click On Media devised a complete redesign strategy. We developed a clean, professional, and responsive WordPress website. Key features included an easy-to-use admission form, a latest news/noticeboard section, and dedicated pages for course details. We optimized local SEO for keywords like "best coaching institute in Gorakhpur".
                </p>
                <div className="casestudy-result-box">
                  <strong>Result:</strong> Within 3 months of launch, online admission inquiries increased by 40%, and the website bounce rate decreased by 50%.
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="casestudy-card casestudy-card-reverse">
              <div className="casestudy-img-col">
                <img 
                  src="./assets/webdev-page/casestudy-retail.jpg" 
                  alt="Local Retail to Ecommerce Platform Case Study" 
                  className="casestudy-img"
                />
              </div>
              <div className="casestudy-text-col">
                <h3 className="casestudy-title">Case Study: Local Retail to Ecommerce Platform</h3>
                <p className="casestudy-client"><strong>Client:</strong> Local handicraft store, Gorakhpur.</p>
                <p className="casestudy-para">
                  <strong>Challenge:</strong> The client's business was limited to their physical store. They wanted to sell their unique products outside of Gorakhpur but lacked a reliable solution for inventory management and online payments.
                </p>
                <p className="casestudy-para">
                  <strong>Solution:</strong> We proposed a scalable Ecommerce website development solution. We built a user-friendly online store with secure payment gateway integration (Razorpay/Stripe). Admin panel training was provided so the client could easily upload products and manage orders. SEO strategies focused on regional keywords.
                </p>
                <div className="casestudy-result-box">
                  <strong>Result:</strong> The client expanded their customer base to 5 new cities within the first 6 months, leading to a 25% increase in overall revenue.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PACKAGES & PRICING */}
      <section className="webdev-section webdev-pricing-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              Flexible Website <span className="title-logo-gradient">Development Packages</span>
            </h2>
            <p className="section-main-sub">
              Choose the package that fits your needs or contact us for a custom quote.
            </p>
          </div>

          <div className="pricing-cards-grid">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`pricing-card ${pkg.isPopular ? 'popular-card' : ''}`}>
                {pkg.isPopular && (
                  <div className="popular-badge-pill">{pkg.badgeText}</div>
                )}
                <div className="pricing-card-icon">
                  {pkg.icon}
                </div>
                <h3 className="pricing-card-name">{pkg.name}</h3>
                <p className="pricing-card-sub">{pkg.subtitle}</p>

                <ul className="pricing-features-list">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <svg className="feat-check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  type="button" 
                  className={`btn-pricing-action ${pkg.isPopular ? 'btn-pricing-popular' : ''}`}
                  onClick={onOpenContact}
                >
                  Get Started →
                </button>
              </div>
            ))}
          </div>

          <div className="packages-custom-note">
            👉 All packages can be customized as per your needs.{' '}
            <button type="button" className="inline-contact-link" onClick={onOpenContact}>
              Contact us today for a free consultation!
            </button>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS (12 Accordions) */}
      <section className="webdev-section webdev-faq-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              ❓ FAQ for <span className="title-logo-gradient">Website Development Company</span> in Gorakhpur
            </h2>
            <p className="section-main-sub">
              At Click On Media, we understand that choosing the right Website Development Company in Gorakhpur can be confusing. Here are the most common questions businesses ask before starting their digital journey with us.
            </p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button 
                    type="button" 
                    className="faq-question-btn" 
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.q}</span>
                    <span className={`faq-plus-icon ${isOpen ? 'rotate' : ''}`}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-pane">
                      <p className="faq-a-text">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. BOTTOM CALLOUT BANNER */}
      <section className="webdev-cta-banner-section">
        <div className="container-inner">
          <div className="webdev-cta-card">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Build Your Website with Gorakhpur's Best Agency?
              </h2>
              <p className="cta-desc">
                From fast business websites to scalable online stores and custom web portals, Click On Media delivers high-performance digital solutions in Gorakhpur.
              </p>
              <div className="cta-buttons">
                <button 
                  type="button" 
                  className="btn-webdev-primary"
                  onClick={onOpenContact}
                >
                  Book Free Consultation →
                </button>
                <a href="tel:+918303534063" className="btn-webdev-secondary">
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
