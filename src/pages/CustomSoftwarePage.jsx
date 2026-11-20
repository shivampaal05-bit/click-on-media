import React, { useState } from 'react';
import '../styles/CustomSoftwarePage.css';

export default function CustomSoftwarePage({ onOpenContact, onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(prev => (prev === index ? null : index));
  };

  const whyPartnerFeatures = [
    {
      title: 'Bespoke Solutions',
      desc: 'We build software from scratch, ensuring every feature aligns perfectly with your specific workflow and operational goals.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      title: 'Scalable Architecture',
      desc: 'Our applications are built on future-proof architecture, allowing your software to grow and adapt seamlessly as your business expands.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      )
    },
    {
      title: 'Data Integrity & Security',
      desc: 'We implement robust security protocols, role-based access, and encrypted database management to protect your critical business records.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      title: 'High ROI & Cost Efficiency',
      desc: 'Automate manual tasks, eliminate spreadsheet errors, and accelerate team productivity with measurable return on investment.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    }
  ];

  const coreIndustries = [
    {
      title: 'Education & Coaching Institutes',
      sub: 'Student Management & Online Portals',
      desc: 'For schools and coaching centers, managing admissions, fees, and examination data is a major challenge. We build custom Student Management Portals that automate reminders, track attendance, and publish results online.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      )
    },
    {
      title: 'Healthcare & Hospitals',
      sub: 'Your Trusted Custom Software Agency in Gorakhpur',
      desc: 'We develop Clinic Management Software and Hospital Information Systems (HIS) to manage patient appointments, Electronic Health Records (EHR), and streamline billing to improve operational efficiency for doctors and hospitals.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      )
    },
    {
      title: 'Retail & Inventory Management',
      sub: 'Solutions from Software Developers Near You',
      desc: 'Local retailers often struggle with stock accuracy. We create custom inventory software with real-time tracking, purchase order generation, and sales analytics, integrated with Point of Sale (POS) systems.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      )
    },
    {
      title: 'Real Estate & Construction',
      sub: 'Project & Client Payment Automation',
      desc: 'The growing real estate sector in Gorakhpur requires robust management tools. We develop custom software for project management, lead tracking, and client payment installment automation in one centralized dashboard.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="6" x2="9" y2="6.01" />
          <line x1="15" y1="6" x2="15" y2="6.01" />
          <line x1="9" y1="10" x2="9" y2="10.01" />
          <line x1="15" y1="10" x2="15" y2="10.01" />
          <line x1="9" y1="14" x2="9" y2="14.01" />
          <line x1="15" y1="14" x2="15" y2="14.01" />
          <path d="M9 18h6" />
        </svg>
      )
    },
    {
      title: 'Hospitality & Tourism',
      sub: 'Hotel Management & Restaurant POS',
      desc: 'For hotels and restaurants, we build custom Hotel Management Systems (HMS) with integrated booking engines, room inventory automation, and table-side billing to elevate guest experiences.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      )
    },
    {
      title: 'Legacy System Modernization',
      sub: 'Desktop to Cloud Migration',
      desc: 'Is your business running on slow, outdated desktop software? We specialize in migrating legacy systems to secure, fast cloud platforms, preserving your historical data while unlocking modern mobile accessibility.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      )
    }
  ];

  const techStacks = [
    {
      title: 'Frontend Development',
      items: ['React.js', 'Angular', 'Vue.js', 'HTML5 & CSS3', 'Bootstrap 5', 'Tailwind CSS'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="21.17" y1="8" x2="12" y2="8" />
          <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
          <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
        </svg>
      )
    },
    {
      title: 'Backend Engineering',
      items: ['Python (Django, Flask)', 'PHP (Laravel)', 'Node.js & Express', 'Java Spring Boot'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: 'Database Management',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis Caching', 'Firebase Realtime DB'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      )
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS & EC2/S3', 'Google Cloud Platform', 'DigitalOcean', 'Docker Containers', 'Git & CI/CD Pipelines'],
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
        </svg>
      )
    }
  ];

  const lifecycles = [
    {
      step: '1',
      title: 'Discovery & Requirement Analysis',
      desc: 'Every successful project begins with a deep understanding of your needs. Our business analysts conduct detailed workshops to map workflows, identify operational bottlenecks, and define clear objectives.',
      icon: '🔍'
    },
    {
      step: '2',
      title: 'UI/UX Design & Prototyping',
      desc: 'We believe powerful software should also be easy to use. Our UI/UX designers create intuitive interfaces and interactive wireframe prototypes for testing before development begins.',
      icon: '🎨'
    },
    {
      step: '3',
      title: 'Agile Development & Coding',
      desc: 'Our development phase follows Agile methodologies, breaking the project into manageable 2-week sprints. Our expert developers write clean, scalable code and provide regular live demos.',
      icon: '💻'
    },
    {
      step: '4',
      title: 'Quality Assurance & Testing',
      desc: 'Quality is non-negotiable. Our QA team performs rigorous functional, load, performance, and security penetration testing, ensuring 100% stable operation under real-world conditions.',
      icon: '🛡️'
    },
    {
      step: '5',
      title: 'Deployment & Post-Launch Support',
      desc: 'Our job does not stop at launch. We manage server deployment, database migrations, and provide complete staff training along with dedicated ongoing maintenance and AMC support.',
      icon: '🚀'
    }
  ];

  const caseStudies = [
    {
      title: 'Case Study: Student Management & Admission Portal',
      client: 'A prominent educational institute, Gorakhpur.',
      challenge: 'The client managed admissions and student records using manual spreadsheets, leading to data entry errors, lost documents, and long queues during peak admission season.',
      solution: 'Click On Media developed a custom admission portal and student information system. The software allowed online application submission, automatic fee calculation with receipt generation, and student ID card printing.',
      result: 'Reduced manual data entry work by 80% and streamlined the admission cycle, allowing administrative staff to process 3x higher applicant volume error-free.',
      image: './assets/custom-software/student-managment.webp'
    },
    {
      title: 'Case Study: Custom Inventory & Order Management System',
      client: 'Local retail distributor, Gorakhpur.',
      challenge: 'The client struggled with real-time stock tracking across multiple warehouses, resulting in inaccurate stock counts, stockouts, and delays in customer order fulfillment.',
      solution: 'We built a custom multi-warehouse inventory management application with barcode scanner support, real-time sync, low-stock threshold alerts, and automated purchase order generation.',
      result: 'Achieved 99% inventory tracking accuracy and reduced order dispatch processing time by 40%, significantly boosting retail customer satisfaction.',
      image: './assets/custom-software/custom-inventory.webp'
    },
    {
      title: 'Case Study: Local Retail to Ecommerce Platform',
      client: 'Local handicraft store, Gorakhpur.',
      challenge: 'The client was limited to their brick-and-mortar showroom and wanted to sell handcrafted regional products nationwide without losing control over inventory or accounting.',
      solution: 'We engineered a high-speed e-commerce portal integrated with Razorpay/Stripe, automated GST invoicing, WhatsApp dispatch notifications, and an intuitive custom admin portal.',
      result: 'The client successfully expanded their customer base across 5 major states within 6 months, delivering an immediate 25% increase in total revenue.',
      image: './assets/custom-software/post-1.jpg'
    }
  ];

  const faqs = [
    {
      q: 'Q1. Why choose custom software over ready-made (SaaS) products?',
      a: 'Ready-made software forces you to change your business workflow to fit its limitations, often saddling you with recurring monthly fees for features you never touch. Custom software development involves building an application designed specifically for your unique operational workflow. You get 100% relevant functionality, complete source code ownership, zero recurring user-license fees, and the flexibility to scale however you choose.'
    },
    {
      q: 'Q2. How much does custom software cost?',
      a: 'The cost of custom software depends on the scope, number of modules, third-party integrations (like payment gateways, Tally, or WhatsApp API), and architectural complexity. A targeted single-purpose tool starts at an affordable entry level, while complete enterprise ERP systems are priced based on detailed milestone deliverables. We provide transparent, itemized quotes with zero hidden surprises.'
    },
    {
      q: 'Q3. How long does the development process take?',
      a: 'Timelines reflect project scope. A focused business automation tool or MVP typically takes 4–6 weeks. Comprehensive business management systems and multi-tier CRMs generally take 2–4 months. We use an Agile sprint methodology, delivering functional module demos every 2 weeks so you see continuous progress.'
    },
    {
      q: 'Q4. Can you integrate the new software with my existing tools like Tally?',
      a: 'Yes, this is one of our most requested specialties. We build custom API connectors and data synchronization pipelines that allow your new platform to exchange ledgers, invoices, vouchers, and inventory records seamlessly with Tally, payment gateways, biometric systems, and WhatsApp Business API.'
    },
    {
      q: 'Q5. Why hire a professional agency instead of a freelancer?',
      a: 'While freelancers can tackle small scripts, mission-critical business software demands a balanced team of business analysts, UI/UX designers, backend engineers, QA testers, and DevOps specialists. Working with Click On Media ensures legally binding NDAs, dedicated project managers, rigorous quality assurance, continuous accountability, and reliable long-term support.'
    },
    {
      q: 'Q6. Do I get complete ownership and source code?',
      a: 'Yes, absolutely 100%. Upon final project sign-off and milestone completion, we hand over full intellectual property rights, database schemas, and clean, documented source code repositories. The software is completely your asset without vendor lock-in.'
    },
    {
      q: 'Q7. What kind of support do you offer after launch?',
      a: 'We provide an included post-launch warranty period (typically 30–90 days) during which any bugs or performance fine-tuning are resolved promptly at zero cost. Furthermore, we offer flexible Annual Maintenance Contracts (AMC) covering server monitoring, security updates, OS compatibility patches, and scheduled feature enhancements.'
    },
    {
      q: 'Q8. What if my requirements aren\'t perfectly clear yet?',
      a: 'That is completely normal and where our team excels! We start every engagement with a guided Discovery Workshop. Our technical consultants interview your team, examine your current day-to-day pain points, map your operational flows, and compile a clear Software Requirement Specification (SRS) before writing a single line of code.'
    },
    {
      q: 'Q9. Do you have experience in my specific industry?',
      a: 'Our developers have delivered tailored platforms across Eastern UP\'s core industries, including hospitals, diagnostic labs, schools, coaching institutes, real estate builders, manufacturing distributors, hospitality, and retail showrooms. Our deep local market familiarity allows us to design features that your local staff can adopt easily.'
    },
    {
      q: 'Q10. What are the benefits of hiring a local developer in Gorakhpur?',
      a: 'Hiring a local technology partner like Click On Media gives you face-to-face consultative meetings, on-site staff training, real-time responsiveness without time zone delays, and deep understanding of regional business nuances, GST rules, and consumer behavior.'
    },
    {
      q: 'Q11. How do you handle data migration from my old software or Excel sheets?',
      a: 'Data migration is handled with extreme care through a disciplined ETL (Extract, Transform, Load) protocol. We clean, normalize, validate, and verify your existing customer records, balances, product SKUs, and transaction histories so you transition smoothly with zero data loss or business downtime.'
    },
    {
      q: 'Q12. What level of involvement is required from my team during the project?',
      a: 'We require a designated Point of Contact (POC) from your side who understands your business workflow. During the initial sprint, we spend a few hours clarifying requirements. Afterwards, we only require brief 30-minute bi-weekly demo check-ins to gather your feedback on completed sprints.'
    },
    {
      q: 'Q13. What does "scalability" actually mean for my business growth?',
      a: 'Scalability means your software effortlessly handles 10x more users, transactions, and data without slowing down or crashing. We engineer microservice-ready backend APIs, optimized SQL/NoSQL indexes, and cloud hosting architectures that easily expand as your branch count and customer base grow.'
    },
    {
      q: 'Q14. What is the difference between post-launch warranty and an AMC?',
      a: 'Our post-launch warranty covers fixing any bugs or ensuring the software works as documented in the initial project scope. An AMC (Annual Maintenance Contract) is an ongoing service that includes server uptime monitoring, database backups, security patches, OS updates, and ongoing minor feature improvements.'
    },
    {
      q: 'Q15. What makes Click On Media the best software company in Gorakhpur for custom projects?',
      a: 'Click On Media stands out because we do not sell generic cookie-cutter templates. We build custom software tailored specifically to how your business operates. With enterprise-grade code quality, transparent pricing, dedicated in-person local support, and a proven track record across Gorakhpur, we are your trusted digital growth partner.'
    }
  ];

  return (
    <div className="cs-page-container">
      {/* 1. BREADCRUMB BAR */}
      <nav className="cs-breadcrumb-bar" aria-label="Breadcrumb">
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
            <span className="breadcrumb-current">Custom Software Development</span>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="cs-hero-section">
        <div className="container-inner">
          <div className="cs-hero-content-wrap">
            <div className="cs-badge-pill">Gorakhpur Software Company</div>
            <h1 className="cs-hero-main-title">
              Best Custom Software Development Company in Gorakhpur | <span className="title-logo-gradient">Click On Media</span>
            </h1>
            <p className="cs-hero-subtitle">
              <strong>Click On Media</strong> is recognized as a leading IT firm in Gorakhpur, delivering innovative software solutions for startups, SMEs, and enterprises. We create scalable, secure, and efficient ERP, CRM, and automation platforms tailored precisely to your specific business needs.
            </p>
            <div className="cs-hero-cta-group">
              <button 
                type="button" 
                className="btn-cs-primary"
                onClick={onOpenContact}
              >
                Get a Free Consultation →
              </button>
              <a href="tel:+918303534063" className="btn-cs-secondary">
                📞 Call +91 8303534063
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 3. WHY PARTNER WITH CLICK ON MEDIA */}
      <section className="cs-section cs-why-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">WHY CHOOSE US</span>
            <h2 className="section-main-heading">
              Why Partner with <span className="title-logo-gradient">Click On Media?</span>
            </h2>
            <p className="section-main-sub">
              As a leading software development company in Gorakhpur, we create robust applications that provide tangible business value. We combine technical expertise with local understanding to be your long-term technology partner.
            </p>
          </div>

          <div className="cs-why-grid">
            {whyPartnerFeatures.map((item, idx) => (
              <div key={idx} className="cs-why-card">
                <div className="why-icon-box">
                  {item.icon}
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CUSTOM SOFTWARE SOLUTIONS IN GORAKHPUR (CRM, ERP, BPA) */}
      <section className="cs-section cs-solutions-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">CORE CAPABILITIES</span>
            <h2 className="section-main-heading">
              Custom Software Solutions in <span className="title-logo-gradient">Gorakhpur</span>
            </h2>
            <p className="section-main-sub">
              Click On Media, a leading software solutions provider in Gorakhpur, delivers innovative and tailor-made applications designed to match your exact business needs. Our custom software development services empower startups, SMEs, and enterprises with scalable ERP, CRM, and automation tools that drive efficiency and sustainable growth.
            </p>
          </div>

          {/* Block 1: CRM */}
          <div className="cs-solution-block">
            <div className="cs-solution-img-col">
              <div className="cs-img-wrapper">
                <img 
                  src="./assets/custom-software/custom-crm.webp" 
                  alt="Custom CRM Development Solutions by Click On Media Gorakhpur" 
                  className="cs-showcase-img"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="cs-solution-text-col">
              <span className="module-tag">SALES & LEADS</span>
              <h3 className="solution-block-title">Custom CRM Development in Gorakhpur</h3>
              <p className="solution-block-desc">
                Ready-made CRMs often come with high subscription fees and features you never use. As a leading custom software agency in Gorakhpur, we build bespoke Customer Relationship Management systems focused on your unique sales process.
              </p>
              
              <h4 className="solution-list-heading">Key Features of Our CRM Solutions:</h4>
              <ul className="cs-feature-checklist">
                <li><span className="check-bullet">✓</span> Lead & Opportunity Management with Source Tracking</li>
                <li><span className="check-bullet">✓</span> Visual Sales Pipeline & Deal Stages</li>
                <li><span className="check-bullet">✓</span> Automated Follow-up Reminders & Task Queues</li>
                <li><span className="check-bullet">✓</span> Customer Support Ticketing System</li>
                <li><span className="check-bullet">✓</span> Direct Integration with WhatsApp Business API</li>
                <li><span className="check-bullet">✓</span> Custom Executive Reporting & Analytics Dashboards</li>
              </ul>

              <div className="solution-cta-box">
                <h5 className="solution-cta-sub">Work with the Best Software Company in Gorakhpur</h5>
                <p>To see how we can build a CRM specifically for your needs, request a free consultation with our Gorakhpur team.</p>
                <button type="button" className="btn-cs-inline" onClick={onOpenContact}>
                  Request CRM Demo →
                </button>
              </div>
            </div>
          </div>

          {/* Block 2: ERP */}
          <div className="cs-solution-block reverse">
            <div className="cs-solution-img-col">
              <div className="cs-img-wrapper">
                <img 
                  src="./assets/custom-software/custom-software-erp.webp" 
                  alt="Custom ERP Software Development in Gorakhpur" 
                  className="cs-showcase-img"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="cs-solution-text-col">
              <span className="module-tag">ENTERPRISE PLATFORM</span>
              <h3 className="solution-block-title">Custom ERP Software Development in Gorakhpur</h3>
              <p className="solution-block-desc">
                Many businesses in Gorakhpur face inefficiencies with separate systems for inventory, accounting, and HR. Our custom software development services integrate these functions into a unified ERP platform, making us one of the best software companies in Gorakhpur.
              </p>

              <h4 className="solution-list-heading">Core Modules in Our ERP Systems:</h4>
              <ul className="cs-feature-checklist">
                <li><span className="check-bullet">✓</span> Inventory and Stock Management with Barcode & QR Integration</li>
                <li><span className="check-bullet">✓</span> Purchase Order and Supplier Lifecycle Management</li>
                <li><span className="check-bullet">✓</span> Financial Accounting and GST Compliant Invoicing Module</li>
                <li><span className="check-bullet">✓</span> Human Resource Management (HRM) and Automated Payroll Processing</li>
                <li><span className="check-bullet">✓</span> Production Planning, Raw Material Tracking, and Quality Control</li>
              </ul>

              <div className="solution-cta-box">
                <h5 className="solution-cta-sub">Trusted IT Company in Gorakhpur for ERP Solutions</h5>
                <p>Centralize your whole operation into a single dashboard accessible from mobile and desktop.</p>
                <button type="button" className="btn-cs-inline" onClick={onOpenContact}>
                  Schedule ERP Consultation →
                </button>
              </div>
            </div>
          </div>

          {/* Block 3: BPA */}
          <div className="cs-solution-block">
            <div className="cs-solution-img-col">
              <div className="cs-img-wrapper">
                <img 
                  src="./assets/custom-software/business-process.webp" 
                  alt="Business Process Automation Solutions by Click On Media" 
                  className="cs-showcase-img"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="cs-solution-text-col">
              <span className="module-tag">WORKFLOW EFFICIENCY</span>
              <h3 className="solution-block-title">Business Process Automation Solutions in Gorakhpur</h3>
              <p className="solution-block-desc">
                Save time and eliminate errors with intelligent automation. Our software developers near you design scripts and applications that eliminate repetitive manual tasks, from report generation to customer notifications.
              </p>

              <h4 className="solution-list-heading">Examples of BPA in Action:</h4>
              <ul className="cs-feature-checklist">
                <li><span className="check-bullet">✓</span> Automated Payment Reminders & WhatsApp Follow-ups</li>
                <li><span className="check-bullet">✓</span> Daily End-of-Day Sales & Cash Flow Report Generation</li>
                <li><span className="check-bullet">✓</span> Cross-platform Data Syncing between Billing & Accounting</li>
              </ul>

              <div className="solution-cta-box">
                <h5 className="solution-cta-sub">Partner with Click On Media – Best Software Company in Gorakhpur</h5>
                <p>Put your repetitive administrative workflows on auto-pilot so your team can focus on growth.</p>
                <button type="button" className="btn-cs-inline" onClick={onOpenContact}>
                  Automate My Workflow →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS FOR GORAKHPUR'S CORE INDUSTRIES */}
      <section className="cs-section cs-industries-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">VERTICAL EXPERTISE</span>
            <h2 className="section-main-heading">
              Solutions for Gorakhpur's <span className="title-logo-gradient">Core Industries</span>
            </h2>
            <p className="section-main-sub">
              We understand the unique operational challenges faced by businesses in Eastern Uttar Pradesh. Our custom software development services are designed to address these needs effectively.
            </p>
          </div>

          <div className="cs-industries-grid">
            {coreIndustries.map((ind, idx) => (
              <div key={idx} className="cs-industry-card">
                <div className="industry-icon-pill">
                  {ind.icon}
                </div>
                <h3 className="industry-card-title">{ind.title}</h3>
                <h4 className="industry-card-sub">{ind.sub}</h4>
                <p className="industry-card-desc">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR MODERN TECHNOLOGY */}
      <section className="cs-section cs-tech-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">TECH STACK</span>
            <h2 className="section-main-heading">
              Our Modern <span className="title-logo-gradient">Technology</span>
            </h2>
            <p className="section-main-sub">
              At Click On Media, we use the latest and most reliable technologies to build secure and scalable software applications. Our technical expertise ensures that your business receives future-ready solutions.
            </p>
          </div>

          <div className="cs-tech-grid">
            {techStacks.map((stack, idx) => (
              <div key={idx} className="cs-tech-card">
                <div className="tech-icon-wrap">
                  {stack.icon}
                </div>
                <h3 className="tech-card-title">{stack.title}</h3>
                <ul className="tech-badge-list">
                  {stack.items.map((it, i) => (
                    <li key={i} className="tech-pill">{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LIFECYCLE OF OUR CUSTOM SOFTWARE DEVELOPMENT SERVICES */}
      <section className="cs-section cs-lifecycle-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">HOW WE WORK</span>
            <h2 className="section-main-heading">
              Lifecycle of Our Custom <span className="title-logo-gradient">Software Development Services</span>
            </h2>
            <p className="section-main-sub">
              As a leading software company in Gorakhpur, we follow a structured process to deliver high-quality software solutions. Our methodology ensures efficiency, flexibility, and predictable outcomes.
            </p>
          </div>

          <div className="cs-lifecycle-steps-grid">
            {lifecycles.map((step, idx) => (
              <div key={idx} className="cs-lifecycle-card">
                <div className="lifecycle-header-row">
                  <span className="step-number-bubble">{step.step}</span>
                  <span className="step-emoji">{step.icon}</span>
                </div>
                <h3 className="lifecycle-card-title">{step.title}</h3>
                <p className="lifecycle-card-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TRANSFORMING GORAKHPUR BUSINESSES: OUR SUCCESS STORIES */}
      <section className="cs-section cs-case-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">PROVEN RESULTS</span>
            <h2 className="section-main-heading">
              Transforming Gorakhpur Businesses: <span className="title-logo-gradient">Our Success Stories</span>
            </h2>
            <p className="section-main-sub">
              We don't just build software; we deliver measurable results. See how Click On Media has helped various businesses in Gorakhpur achieve their operational and digital goals.
            </p>
          </div>

          <div className="cs-case-list">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="cs-case-card">
                <div className="cs-case-body">
                  <span className="case-tag">CASE STUDY</span>
                  <h3 className="cs-case-title">{cs.title}</h3>
                  <div className="case-meta">
                    <strong>Client:</strong> {cs.client}
                  </div>
                  <div className="case-text-block">
                    <p><strong>Challenge:</strong> {cs.challenge}</p>
                    <p><strong>Solution:</strong> {cs.solution}</p>
                    <div className="case-result-badge">
                      <strong>Result:</strong> {cs.result}
                    </div>
                  </div>
                </div>
                <div className="cs-case-media">
                  <img 
                    src={cs.image} 
                    alt={cs.title} 
                    className="cs-case-img"
                    loading="lazy" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TRANSPARENT PROJECT COSTING */}
      <section className="cs-costing-banner-section">
        <div className="container-inner">
          <div className="cs-costing-box">
            <div className="costing-icon">💰</div>
            <h2 className="costing-title">Transparent Project Costing</h2>
            <p className="costing-desc">
              Custom software pricing depends entirely on project complexity, features, and technology. We provide detailed, itemized quotes after our initial consultation with zero hidden fees.
            </p>
            <div className="costing-action-line">
              <span className="hand-point">👉</span>
              <span>Ready to get a detailed estimate for your project?</span>
              <button 
                type="button" 
                className="btn-costing-trigger"
                onClick={onOpenContact}
              >
                Contact us today for a free consultation →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CUSTOM SOFTWARE DEVELOPMENT FAQ (15 ACCORDIONS) */}
      <section className="cs-section cs-faq-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">CLARITY & TRANSPARENCY</span>
            <h2 className="section-main-heading">
              ❓ Custom Software Development <span className="title-logo-gradient">FAQ</span>
            </h2>
            <p className="section-main-sub">
              Common questions about building custom software with Click On Media, your local technology partner in Gorakhpur.
            </p>
          </div>

          <div className="cs-faq-container">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`cs-faq-row ${isOpen ? 'active' : ''}`}>
                  <button 
                    type="button" 
                    className="cs-faq-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="cs-faq-btn-text">{faq.q}</span>
                    <span className={`cs-faq-icon ${isOpen ? 'open' : ''}`}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="cs-faq-content-pane">
                      <p className="cs-faq-answer-p">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. BOTTOM CALLOUT BANNER */}
      <section className="cs-cta-banner-section">
        <div className="container-inner">
          <div className="cs-cta-card">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Build Custom Software Tailored to Your Business?
              </h2>
              <p className="cta-desc">
                Eliminate manual spreadsheet work, automate daily tasks, and scale your operations with Gorakhpur's top custom software developers at Click On Media.
              </p>
              <div className="cta-buttons">
                <button 
                  type="button" 
                  className="btn-cs-primary"
                  onClick={onOpenContact}
                >
                  Book Free Consultation →
                </button>
                <a href="tel:+918303534063" className="btn-cs-secondary">
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
