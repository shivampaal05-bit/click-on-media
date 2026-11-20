import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import InteractiveServices from './components/InteractiveServices.jsx';
import AgencyStory from './components/AgencyStory.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';
import ContactModal from './components/ContactModal.jsx';
import WebsiteDevelopmentPage from './pages/WebsiteDevelopmentPage.jsx';
import DigitalMarketingPage from './pages/DigitalMarketingPage.jsx';
import SocialMediaManagementPage from './pages/SocialMediaManagementPage.jsx';
import CustomSoftwarePage from './pages/CustomSoftwarePage.jsx';
import DigitalMenuPage from './pages/DigitalMenuPage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import AllServicesPage from './pages/AllServicesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import CrmSolutionsPage from './pages/CrmSolutionsPage.jsx';
import MonetizationPage from './pages/MonetizationPage.jsx';
import WhatsAppMarketingPage from './pages/WhatsAppMarketingPage.jsx';
import VideoEditingPage from './pages/VideoEditingPage.jsx';
import GraphicsDesigningPage from './pages/GraphicsDesigningPage.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  
  // Detect initial route from hash
  const getInitialPage = () => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#/website-development' || hash === '#website-development') {
      return 'website-development';
    }
    if (hash === '#/digital-marketing' || hash === '#digital-marketing') {
      return 'digital-marketing';
    }
    if (hash === '#/social-media-management' || hash === '#social-media-management') {
      return 'social-media-management';
    }
    if (hash === '#/custom-software' || hash === '#custom-software') {
      return 'custom-software';
    }
    if (hash === '#/digital-menu' || hash === '#digital-menu') {
      return 'digital-menu';
    }
    if (hash === '#/courses' || hash === '#courses') {
      return 'courses';
    }
    if (hash === '#/services' || hash === '#/all-services' || hash === '#all-services') {
      return 'services';
    }
    if (hash === '#/contact' || hash === '#contact') {
      return 'contact';
    }
    if (hash === '#/about' || hash === '#about') {
      return 'about';
    }
    if (hash === '#/crm' || hash === '#crm') {
      return 'crm';
    }
    if (hash === '#/monetization' || hash === '#monetization') {
      return 'monetization';
    }
    if (hash === '#/whatsapp-bulk-messaging' || hash === '#whatsapp-bulk-messaging' || hash === '#/whatsapp-marketing' || hash === '#whatsapp-marketing') {
      return 'whatsapp-bulk-messaging';
    }
    if (hash === '#/video-editing' || hash === '#video-editing') {
      return 'video-editing';
    }
    if (hash === '#/graphics-designing' || hash === '#graphics-designing') {
      return 'graphics-designing';
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  // Sync with browser back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/website-development' || hash === '#website-development') {
        setCurrentPage('website-development');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/digital-marketing' || hash === '#digital-marketing') {
        setCurrentPage('digital-marketing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/social-media-management' || hash === '#social-media-management') {
        setCurrentPage('social-media-management');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/custom-software' || hash === '#custom-software') {
        setCurrentPage('custom-software');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/digital-menu' || hash === '#digital-menu') {
        setCurrentPage('digital-menu');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/courses' || hash === '#courses') {
        setCurrentPage('courses');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/services' || hash === '#/all-services' || hash === '#all-services') {
        setCurrentPage('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/contact' || hash === '#contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/about' || hash === '#about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/crm' || hash === '#crm') {
        setCurrentPage('crm');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/monetization' || hash === '#monetization') {
        setCurrentPage('monetization');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/whatsapp-bulk-messaging' || hash === '#whatsapp-bulk-messaging' || hash === '#/whatsapp-marketing' || hash === '#whatsapp-marketing') {
        setCurrentPage('whatsapp-bulk-messaging');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/video-editing' || hash === '#video-editing') {
        setCurrentPage('video-editing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/graphics-designing' || hash === '#graphics-designing') {
        setCurrentPage('graphics-designing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/' || hash === '' || hash.startsWith('#services') || hash.startsWith('#reviews')) {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    if (page === 'website-development') {
      window.location.hash = '#/website-development';
      setCurrentPage('website-development');
    } else if (page === 'digital-marketing') {
      window.location.hash = '#/digital-marketing';
      setCurrentPage('digital-marketing');
    } else if (page === 'social-media-management') {
      window.location.hash = '#/social-media-management';
      setCurrentPage('social-media-management');
    } else if (page === 'custom-software') {
      window.location.hash = '#/custom-software';
      setCurrentPage('custom-software');
    } else if (page === 'digital-menu') {
      window.location.hash = '#/digital-menu';
      setCurrentPage('digital-menu');
    } else if (page === 'courses') {
      window.location.hash = '#/courses';
      setCurrentPage('courses');
    } else if (page === 'services' || page === 'all-services') {
      window.location.hash = '#/services';
      setCurrentPage('services');
    } else if (page === 'contact') {
      window.location.hash = '#/contact';
      setCurrentPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      window.location.hash = '#/about';
      setCurrentPage('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'crm') {
      window.location.hash = '#/crm';
      setCurrentPage('crm');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'monetization') {
      window.location.hash = '#/monetization';
      setCurrentPage('monetization');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'whatsapp-bulk-messaging' || page === 'whatsapp-marketing') {
      window.location.hash = '#/whatsapp-bulk-messaging';
      setCurrentPage('whatsapp-bulk-messaging');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'video-editing') {
      window.location.hash = '#/video-editing';
      setCurrentPage('video-editing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'graphics-designing') {
      window.location.hash = '#/graphics-designing';
      setCurrentPage('graphics-designing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = '#/';
      setCurrentPage('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div className="app-root">
      {/* Sticky Navigation Bar */}
      <Navbar 
        onOpenContact={handleOpenContact} 
        onNavigate={navigateTo} 
        currentPage={currentPage} 
      />

      {/* Conditional Page Flow */}
      {currentPage === 'website-development' ? (
        <main>
          <WebsiteDevelopmentPage 
            onOpenContact={handleOpenContact}
            onNavigateHome={() => navigateTo('home')}
          />
        </main>
      ) : currentPage === 'digital-marketing' ? (
        <main>
          <DigitalMarketingPage 
            onOpenContact={handleOpenContact}
            onNavigateHome={() => navigateTo('home')}
          />
        </main>
      ) : currentPage === 'social-media-management' ? (
        <main>
          <SocialMediaManagementPage 
            onOpenContact={handleOpenContact}
            onNavigateHome={() => navigateTo('home')}
          />
        </main>
      ) : currentPage === 'custom-software' ? (
        <main>
          <CustomSoftwarePage 
            onOpenContact={handleOpenContact}
            onNavigateHome={() => navigateTo('home')}
          />
        </main>
      ) : currentPage === 'digital-menu' ? (
        <main>
          <DigitalMenuPage 
            onOpenContact={handleOpenContact}
            onNavigateHome={() => navigateTo('home')}
          />
        </main>
      ) : currentPage === 'courses' ? (
        <main>
          <CoursesPage 
            onOpenContact={handleOpenContact}
            onNavigateHome={() => navigateTo('home')}
          />
        </main>
      ) : currentPage === 'services' || currentPage === 'all-services' ? (
        <main>
          <AllServicesPage 
            onOpenContact={handleOpenContact}
            onNavigateHome={() => navigateTo('home')}
            onNavigateService={(targetPage) => navigateTo(targetPage)}
          />
        </main>
      ) : currentPage === 'contact' ? (
        <main>
          <ContactPage 
            onNavigateHome={() => navigateTo('home')}
          />
        </main>
      ) : currentPage === 'about' ? (
        <main>
          <AboutUsPage 
            onOpenContact={handleOpenContact}
            onNavigateHome={() => navigateTo('home')}
          />
        </main>
      ) : currentPage === 'crm' ? (
        <main>
          <CrmSolutionsPage 
            onOpenContact={handleOpenContact}
            onNavigateHome={() => navigateTo('home')}
          />
        </main>
      ) : currentPage === 'monetization' ? (
        <main>
          <MonetizationPage 
            onOpenContact={handleOpenContact}
            onNavigateHome={() => navigateTo('home')}
          />
        </main>
      ) : currentPage === 'whatsapp-bulk-messaging' ? (
        <main>
          <WhatsAppMarketingPage 
            onOpenContact={handleOpenContact}
            onNavigateHome={() => navigateTo('home')}
          />
        </main>
      ) : currentPage === 'video-editing' ? (
        <main>
          <VideoEditingPage 
            onOpenContact={handleOpenContact}
            onNavigateHome={() => navigateTo('home')}
          />
        </main>
      ) : currentPage === 'graphics-designing' ? (
        <main>
          <GraphicsDesigningPage 
            onOpenContact={handleOpenContact}
            onNavigateHome={() => navigateTo('home')}
          />
        </main>
      ) : (
        <main>
          {/* Fullscreen Video Hero */}
          <Hero onOpenContact={handleOpenContact} />

          {/* 1. Interactive Core Services (Directly Below Hero Section) */}
          <InteractiveServices onOpenContact={handleOpenContact} />

          {/* 2. Agency Brand Story & Philosophy */}
          <AgencyStory onOpenContact={handleOpenContact} />

          {/* 4. Client Testimonials & Social Proof */}
          <Testimonials />
        </main>
      )}

      {/* 5. Comprehensive Footer with Real Contact Information */}
      <Footer 
        onOpenContact={handleOpenContact} 
        onNavigate={navigateTo} 
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloat />

      {/* Interactive Consultation / Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}
