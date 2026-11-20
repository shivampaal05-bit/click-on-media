import React, { useState, useEffect, useRef } from 'react';
import '../styles/Navbar.css';

const serviceNames = ['Media', 'Digital', 'SEO', 'Website', 'Social', 'Design', 'Software', 'Video', 'Ads', 'Monetization'];

const dropdownServices = [
  { name: 'Social Media Marketing', serviceId: 'social-media', page: 'social-media-management' },
  { name: 'Website Development', serviceId: 'website-development', page: 'website-development' },
  { name: 'WhatsApp Bulk Messaging', serviceId: 'whatsapp-bulk', page: 'whatsapp-bulk-messaging' },
  { name: 'Graphics Designing', serviceId: 'graphics-designing', page: 'graphics-designing' },
  { name: 'Video Editing', serviceId: 'video-editing', page: 'video-editing' },
  { name: 'SEO - Website + Google My Business', serviceId: 'seo-services', page: 'digital-marketing' },
  { name: 'Ads - Website + Insta,FB, WhatsApp', serviceId: 'ads-management', page: 'digital-marketing' },
  { name: 'Software Development', serviceId: 'software-dev', page: 'custom-software' },
  { name: 'CRM', serviceId: 'crm-solutions', page: 'crm' },
  { name: 'Monetization', serviceId: 'monetization', page: 'monetization' },
  { isDivider: true },
  { name: 'Courses', serviceId: 'courses', page: 'courses' },
  { name: 'All Services', serviceId: 'all-services', page: 'services' }
];

export default function Navbar({ onOpenContact, onNavigate, currentPage = 'home' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [domainIndex, setDomainIndex] = useState(0);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleServiceClick = (item) => {
    setIsServicesOpen(false);
    closeMenu();

    if (item.name === 'Courses' || item.page === 'courses' || item.serviceId === 'courses') {
      if (onNavigate) {
        onNavigate('courses');
      } else {
        window.location.hash = '#/courses';
      }
      return;
    }

    if (item.name === 'All Services' || item.page === 'services' || item.serviceId === 'all-services') {
      if (onNavigate) {
        onNavigate('services');
      } else {
        window.location.hash = '#/services';
      }
      return;
    }

    if (item.page) {
      if (onNavigate) {
        onNavigate(item.page);
      } else {
        window.location.hash = `#/${item.page}`;
      }
      return;
    }

    if (currentPage !== 'home') {
      if (onNavigate) {
        onNavigate('home');
      } else {
        window.location.hash = '#/';
      }
    }

    if (item.serviceId) {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('selectService', { detail: item.serviceId }));
      }, currentPage !== 'home' ? 80 : 0);
    }

    if (item.hash) {
      setTimeout(() => {
        const targetEl = document.querySelector(item.hash);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.location.hash = item.hash;
        }
      }, currentPage !== 'home' ? 120 : 0);
    }
  };

  const handleNavSection = (e, sectionHash) => {
    closeMenu();
    if (currentPage !== 'home') {
      e.preventDefault();
      if (onNavigate) {
        onNavigate('home');
      } else {
        window.location.hash = '#/';
      }
      setTimeout(() => {
        const targetEl = document.querySelector(sectionHash);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }, 120);
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMenu();
    if (onNavigate) {
      onNavigate('home');
    } else {
      window.location.hash = '#/';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic rotating brand domain suffix matching Schbang style
  useEffect(() => {
    const timer = setInterval(() => {
      setDomainIndex(prev => (prev + 1) % serviceNames.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Brand Logo with Dynamic Rotating Suffix (.SEO, .Website, .Media, etc.) matching Schbang */}
          <a href="#/" className="brand-logo" aria-label="Click On Media Home" onClick={handleLogoClick}>
            <img 
              src="./assets/logo-light.png" 
              alt="Click On Media" 
              className="logo-img"
            />
            <div className="brand-rotating-wrap">
              <span className="brand-dot">.</span>
              <span className="brand-rotating-text" key={domainIndex}>
                {serviceNames[domainIndex]}
              </span>
            </div>
          </a>

          {/* Navigation Menu */}
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                  onClick={handleLogoClick}
                >
                  Home
                </button>
              </li>
              <li className="nav-item nav-item-dropdown" ref={dropdownRef}>
                <button
                  type="button"
                  className={`services-dropdown-btn ${isServicesOpen ? 'active' : ''}`}
                  onClick={() => setIsServicesOpen(prev => !prev)}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  <span className="btn-text-wrap">Our Services</span>
                  <svg 
                    className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {/* Dropdown Menu matching video */}
                {isServicesOpen && (
                  <div className="services-dropdown-menu">
                    <ul className="dropdown-list">
                      {dropdownServices.map((item, idx) => {
                        if (item.isDivider) {
                          return <li key={`div-${idx}`} className="dropdown-divider" role="separator" />;
                        }
                        const isCourses = item.serviceId === 'courses' || item.name === 'Courses';
                        return (
                          <li key={item.name} className={`dropdown-menu-item ${isCourses ? 'dropdown-item-courses' : ''}`}>
                            <button
                              type="button"
                              className={`dropdown-menu-link ${isCourses ? 'dropdown-link-courses' : ''}`}
                              onClick={() => handleServiceClick(item)}
                            >
                              <span className={`dropdown-item-text ${isCourses ? 'dropdown-text-courses' : ''}`}>{item.name}</span>
                              <svg className={`dropdown-item-arrow ${isCourses ? 'dropdown-arrow-courses' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="9 18 15 12 9 6"></polyline>
                              </svg>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                  onClick={() => {
                    closeMenu();
                    if (onNavigate) {
                      onNavigate('about');
                    } else {
                      window.location.hash = '#/about';
                    }
                  }}
                >
                  About Us
                </button>
              </li>
              <li className="nav-item">
                <a href="#reviews" className="nav-link" onClick={(e) => handleNavSection(e, '#reviews')}>Reviews</a>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                  onClick={() => {
                    closeMenu();
                    if (onNavigate) {
                      onNavigate('contact');
                    } else {
                      window.location.hash = '#/contact';
                    }
                  }}
                >
                  Contact Us
                </button>
              </li>
            </ul>

            {/* Mobile Drawer CTA */}
            <div className="mobile-cta-wrapper">
              <button 
                className="btn btn-mobile" 
                onClick={() => {
                  closeMenu();
                  if (onNavigate) {
                    onNavigate('contact');
                  } else {
                    window.location.hash = '#/contact';
                  }
                }}
              >
                Contact Us →
              </button>
            </div>
          </nav>

          {/* Right Action CTA & Mobile Hamburger */}
          <div className="nav-actions">
            <button 
              className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </div>
      </header>
  );
}
