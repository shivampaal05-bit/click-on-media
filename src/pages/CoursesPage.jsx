import React, { useState } from 'react';
import '../styles/CoursesPage.css';

export default function CoursesPage({ onOpenContact, onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState('MERN Full-Stack (135 Days)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'MERN Full-Stack (135 Days)',
    batch: 'Morning (9 AM - 12 PM)',
    qualification: 'Graduate',
    message: ''
  });

  const toggleFaq = (index) => {
    setActiveFaq(prev => (prev === index ? null : index));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEnrollClick = (courseName) => {
    setFormData(prev => ({ ...prev, course: courseName }));
    const formEl = document.getElementById('enroll-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const stats = [
    { num: '135', label: 'Days Training' },
    { num: '12+', label: 'Technologies' },
    { num: '5+', label: 'Live Projects' },
    { num: '100%', label: 'Job Support' }
  ];

  const foundationCurriculum = [
    'Programming Logic & Problem Solving',
    'HTML5 & CSS3 Fundamentals',
    'JavaScript Basics & ES6+ Features',
    'Responsive Web Design & Grid Systems',
    'Bootstrap 5 & Tailwind CSS',
    'Git & GitHub Version Control',
    'UI/UX Design Principles & Wireframing'
  ];

  const mernCurriculum = [
    'Advanced JavaScript & Async Programming',
    'React.js & State Management (Redux Toolkit)',
    'Node.js & Express.js Backend Architecture',
    'MongoDB & Aggregation Database Design',
    'RESTful APIs & Secure JWT Authentication',
    'AI Tools Integration (ChatGPT & Copilot for Devs)',
    'Cloud Deployment (AWS, Vercel, Docker)'
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'JavaScript', icon: '🟨' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Tailwind', icon: '💨' },
    { name: 'Express', icon: '🚂' },
    { name: 'AI Tools', icon: '🤖' },
    { name: 'AWS', icon: '☁️' },
    { name: 'REST APIs', icon: '🔌' }
  ];

  const benefits = [
    {
      title: '5+ Live Projects',
      desc: 'Build real-world commercial web applications, eCommerce portals, and modern dashboards to showcase a stellar portfolio to recruiters.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      title: 'Industry Certificate',
      desc: 'Earn an accredited course completion certificate verified by Click On Media to validate your hands-on full-stack development skills.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    {
      title: 'Job Placement Support',
      desc: 'Get dedicated resume building, GitHub portfolio auditing, LinkedIn optimization, and mock technical interview rounds with hiring partners.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      title: 'Comprehensive Study Notes',
      desc: 'Receive well-structured PDF notes, code repository cheatsheets, real-world project boilerplates, and interview question banks for lifetime review.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    },
    {
      title: '1-on-1 Mentorship',
      desc: 'Learn directly from senior software engineers working at Click On Media with weekly live doubt sessions, code reviews, and personal career roadmaps.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'AI Integration for Developers',
      desc: 'Supercharge your daily coding productivity. Master prompt engineering, AI code refactoring, GitHub Copilot, and integrating OpenAI APIs into your apps.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8" y2="16" />
          <line x1="16" y1="16" x2="16" y2="16" />
        </svg>
      )
    }
  ];

  const pricingTiers = [
    {
      badge: 'FOUNDATION',
      name: 'Foundation Only',
      price: '₹9,999',
      duration: '45 Days Program',
      features: [
        'HTML5, CSS3 & Modern JavaScript',
        'Responsive Mobile-First Design',
        'Bootstrap 5 & Tailwind CSS',
        'Git & GitHub Version Control',
        'Live Classes + Recorded Sessions',
        'Personal Portfolio Website',
        '2 Practical Real-World Projects',
        'Official Course Certificate'
      ],
      isPopular: false,
      ctaCourse: 'Foundation Only (45 Days)'
    },
    {
      badge: 'MOST POPULAR',
      name: 'MERN Full-Stack',
      price: '₹29,999',
      duration: '135 Days Complete Program',
      features: [
        'Complete Foundation + Advanced MERN',
        'React.js, Node.js, Express & MongoDB',
        'REST APIs & JWT Secure Auth',
        'AI Tools Integration & Copilot',
        '5+ Full-Scale Commercial Projects',
        'High-Converting Portfolio Website',
        'Resume & LinkedIn Optimization',
        'Mock Technical Interviews',
        'Freelancing Guide (Fiverr/Upwork)',
        'Guaranteed Internship Opportunity',
        '100% Job Placement Assistance',
        'Industry Recognized Certificate'
      ],
      isPopular: true,
      ctaCourse: 'MERN Full-Stack (135 Days)'
    },
    {
      badge: 'ADVANCED',
      name: 'Advanced MERN',
      price: '₹21,999',
      duration: '90 Days Program',
      features: [
        'Advanced React.js & Redux Toolkit',
        'Node.js & Express.js REST APIs',
        'MongoDB Database Architecture',
        'JWT Authentication & Security',
        'Cloud Deployment (AWS / Vercel)',
        '3+ Complex Full-Stack Projects',
        'Portfolio Upgrade & Code Review',
        'Technical Resume Building',
        'Advanced Course Certificate'
      ],
      isPopular: false,
      ctaCourse: 'Advanced MERN Only (90 Days)'
    }
  ];

  const faqs = [
    {
      q: 'Do I need any prior coding experience to join this course?',
      a: 'No prior programming experience is required! Our 135-day MERN Full-Stack curriculum starts from the absolute fundamentals of programming logic, HTML5, and CSS3 before progressing into advanced JavaScript, React.js, Node.js, and MongoDB.'
    },
    {
      q: 'Will I get an internship or live client projects?',
      a: 'Yes, absolutely. Students enrolled in our MERN Full-Stack program receive guaranteed internship opportunities at Click On Media where you work on live client websites and applications under the direct mentorship of our senior dev team.'
    },
    {
      q: 'What is the schedule and batch timings for the classes?',
      a: 'We offer flexible batch timings to accommodate college students and working professionals: Morning (9 AM - 12 PM), Afternoon (2 PM - 5 PM), Evening (6 PM - 9 PM), and dedicated Weekend batches (Saturday & Sunday).'
    },
    {
      q: 'How does Click On Media help with job placement support?',
      a: 'We provide end-to-end placement assistance including professional resume crafting, GitHub portfolio curation, LinkedIn branding, mock interview rounds with real tech interviewers, and direct interview referrals to our hiring network in Gorakhpur, Noida, Lucknow, and Bengaluru.'
    },
    {
      q: 'Can I pay the course fee in installments (EMI)?',
      a: 'Yes, we provide easy no-cost monthly installment (EMI) options so that quality tech education is accessible to everyone. You can speak with our admission counselors to set up a flexible payment plan.'
    }
  ];

  return (
    <div className="courses-page-container">
      {/* 1. BREADCRUMB BAR */}
      <nav className="courses-breadcrumb-bar" aria-label="Breadcrumb">
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
            <span className="breadcrumb-current">Full-Stack & MERN Courses</span>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="courses-hero-section">
        <div className="container-inner">
          <div className="courses-hero-card">
            <div className="hero-pill-badge">🎯 JOB-READY PROGRAM</div>
            <h1 className="courses-hero-title">
              Level Up Your <span className="title-logo-gradient">Coding Career</span>: Full-Stack & MERN Training Now in <span className="title-logo-gradient">Gorakhpur!</span>
            </h1>
            <p className="courses-hero-subtitle">
              <strong>135 Days</strong> | Job-Ready Training | Live Projects | AI Integration | Placement Support
            </p>
            <div className="courses-hero-buttons">
              <button 
                type="button" 
                className="btn-courses-enroll"
                onClick={() => handleEnrollClick('MERN Full-Stack (135 Days)')}
              >
                Enroll Now →
              </button>
              <a href="#curriculum" className="btn-courses-curriculum">
                View Curriculum
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 3. KEY STATS COUNTER BAR */}
      <section className="courses-stats-section">
        <div className="container-inner">
          <div className="courses-stats-grid">
            {stats.map((s, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMPLETE CURRICULUM SECTION */}
      <section id="curriculum" className="courses-section curriculum-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              📖 Complete <span className="title-logo-gradient">Curriculum</span>
            </h2>
            <div className="gradient-underline"></div>
          </div>

          <div className="curriculum-grid">
            {/* Foundation Card */}
            <div className="curriculum-card foundation-card">
              <div className="curriculum-card-header">
                <h3>📘 Foundation (45 Days)</h3>
              </div>
              <ul className="curriculum-list">
                {foundationCurriculum.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advanced MERN Card */}
            <div className="curriculum-card mern-card">
              <div className="curriculum-card-header">
                <h3>🚀 Advanced MERN (90 Days)</h3>
              </div>
              <ul className="curriculum-list">
                {mernCurriculum.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet-check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="syllabus-action-wrap">
            <button 
              type="button" 
              className="btn-download-syllabus"
              onClick={onOpenContact}
            >
              📥 Download Detailed Syllabus
            </button>
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGIES YOU'LL MASTER */}
      <section className="courses-section tech-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              🛠 Technologies <span className="title-logo-gradient">You'll Master</span>
            </h2>
            <div className="gradient-underline"></div>
          </div>

          <div className="technologies-grid">
            {technologies.map((t, idx) => (
              <div key={idx} className="tech-tile">
                <span className="tech-emoji">{t.icon}</span>
                <span className="tech-name">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT YOU GET */}
      <section className="courses-section benefits-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              🎁 What <span className="title-logo-gradient">You Get</span>
            </h2>
            <div className="gradient-underline"></div>
          </div>

          <div className="benefits-grid">
            {benefits.map((b, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon-box">
                  {b.icon}
                </div>
                <h4 className="benefit-title">{b.title}</h4>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ENROLL NOW FORM */}
      <section id="enroll-form" className="enrollment-section">
        <div className="container-inner">
          <div className="enrollment-wrapper">
            <h2 className="enrollment-heading">📝 Enroll Now - Limited Seats Available!</h2>
            <p className="enrollment-subheading">
              Join the next batch starting soon. Fill the form below to reserve your seat with Click On Media.
            </p>

            <div className="enrollment-card">
              {isSubmitted ? (
                <div className="enrollment-success-state">
                  <div className="success-icon-bubble">🎉</div>
                  <h3 className="success-title">Enrollment Request Received!</h3>
                  <p className="success-desc">
                    Thank you, <strong>{formData.name}</strong>! Our senior academic counselor will call you within 24 hours at <strong>{formData.phone}</strong> to confirm your batch timing and provide demo class details.
                  </p>
                  <button 
                    type="button" 
                    className="btn-courses-enroll"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <form className="enrollment-form-grid" onSubmit={handleFormSubmit}>
                  <div className="form-field-group">
                    <label htmlFor="student-name">Full Name *</label>
                    <input 
                      type="text" 
                      id="student-name"
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name" 
                      required 
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="student-email">Email Address *</label>
                    <input 
                      type="email" 
                      id="student-email"
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                      required 
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="student-phone">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="student-phone"
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX" 
                      required 
                    />
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="student-course">Select Course *</label>
                    <select 
                      id="student-course"
                      name="course" 
                      value={formData.course}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="MERN Full-Stack (135 Days)">MERN Full-Stack (135 Days)</option>
                      <option value="Foundation Only (45 Days)">Foundation Only (45 Days)</option>
                      <option value="Advanced MERN Only (90 Days)">Advanced MERN Only (90 Days)</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="student-batch">Preferred Batch Timing *</label>
                    <select 
                      id="student-batch"
                      name="batch" 
                      value={formData.batch}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (2 PM - 5 PM)">Afternoon (2 PM - 5 PM)</option>
                      <option value="Evening (6 PM - 9 PM)">Evening (6 PM - 9 PM)</option>
                      <option value="Weekend (Sat-Sun)">Weekend (Sat-Sun)</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label htmlFor="student-qual">Qualification *</label>
                    <select 
                      id="student-qual"
                      name="qualification" 
                      value={formData.qualification}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="8th Class and Onwards">8th Class and Onwards</option>
                      <option value="Graduate">Graduate</option>
                      <option value="Post Graduate">Post Graduate</option>
                      <option value="Working Professionals">Working Professionals</option>
                    </select>
                  </div>

                  <div className="form-field-group full-width">
                    <label htmlFor="student-msg">Message (Optional)</label>
                    <textarea 
                      id="student-msg"
                      name="message" 
                      rows="3" 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any specific questions, batch requirements, or career goals?"
                    />
                  </div>

                  <div className="form-submit-wrap full-width">
                    <button type="submit" className="btn-submit-enrollment">
                      🚀 Submit Enrollment Application
                    </button>
                    <p className="guarantee-note">✓ We will contact you within 24 hours to confirm your seat</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. COURSE PRICING */}
      <section className="courses-section pricing-section">
        <div className="container-inner">
          <div className="section-header-center">
            <h2 className="section-main-heading">
              💰 Course <span className="title-logo-gradient">Pricing</span>
            </h2>
            <div className="gradient-underline"></div>
          </div>

          <div className="course-pricing-grid">
            {pricingTiers.map((tier, idx) => (
              <div key={idx} className={`pricing-tier-card ${tier.isPopular ? 'popular' : ''}`}>
                <div className="tier-badge-pill">{tier.badge}</div>
                <h3 className="tier-name">{tier.name}</h3>
                <div className="tier-price-wrap">
                  <span className="price-val">{tier.price}</span>
                </div>
                <div className="tier-duration">{tier.duration}</div>

                <ul className="tier-features-list">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <span className="tier-check">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  type="button" 
                  className={`btn-tier-enroll ${tier.isPopular ? 'popular-btn' : 'standard-btn'}`}
                  onClick={() => handleEnrollClick(tier.ctaCourse)}
                >
                  Enroll Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ADMISSION COUNSELOR BANNER */}
      <section className="counselor-banner-section">
        <div className="container-inner">
          <div className="counselor-banner-card">
            <h3 className="counselor-title">Have Questions? Call Us Now!</h3>
            <p className="counselor-subtitle">
              Our admission counselors are available to help you choose the right course for your career.
            </p>
            <div className="counselor-actions-wrap">
              <a href="tel:+918303534063" className="btn-counselor-phone">
                📞 +91 8303534063
              </a>
              <a 
                href="https://wa.me/918303534063?text=Hello%20Click%20On%20Media,%20I%20want%20to%20know%20more%20about%20the%20MERN%20Full%20Stack%20Course." 
                target="_blank" 
                rel="noreferrer" 
                className="btn-counselor-whatsapp"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS */}
      <section className="courses-section faq-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">CLARITY & CONFIDENCE</span>
            <h2 className="section-main-heading">
              Frequently Asked <span className="title-logo-gradient">Questions</span>
            </h2>
            <p className="section-main-sub">
              Common questions from students and working professionals about our coding curriculum and placement guarantees.
            </p>
          </div>

          <div className="courses-faq-container">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`courses-faq-row ${isOpen ? 'active' : ''}`}>
                  <button 
                    type="button" 
                    className="courses-faq-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="courses-faq-q-text">{faq.q}</span>
                    <span className={`courses-faq-icon ${isOpen ? 'open' : ''}`}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="courses-faq-content-pane">
                      <p className="courses-faq-a-text">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. BOTTOM CTA BANNER */}
      <section className="courses-cta-banner-section">
        <div className="container-inner">
          <div className="courses-bottom-cta-card">
            <div className="bottom-cta-content">
              <h2 className="bottom-cta-title">
                Ready to Become a High-Paid Full-Stack Developer?
              </h2>
              <p className="bottom-cta-desc">
                Learn modern tech, build live commercial apps, and graduate with a 100% job-ready developer portfolio right here in Gorakhpur.
              </p>
              <div className="bottom-cta-actions">
                <button 
                  type="button" 
                  className="btn-courses-enroll"
                  onClick={() => handleEnrollClick('MERN Full-Stack (135 Days)')}
                >
                  Reserve Your Seat Today →
                </button>
                <a href="tel:+918303534063" className="btn-courses-curriculum">
                  📞 Call Admissions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
