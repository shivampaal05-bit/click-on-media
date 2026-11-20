import React, { useState } from 'react';
import '../styles/DigitalMenuPage.css';

export default function DigitalMenuPage({ onOpenContact, onNavigateHome }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(prev => (prev === index ? null : index));
  };

  const whyChooseFeatures = [
    {
      title: 'Pioneering AI Technology',
      desc: 'We are the only provider in Gorakhpur offering cutting-edge AI features like voice search and mood-based dish recommendations.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
          <rect x="4" y="8" width="16" height="12" rx="4" />
          <circle cx="9" cy="13" r="1.5" />
          <circle cx="15" cy="13" r="1.5" />
          <path d="M10 17h4" />
        </svg>
      )
    },
    {
      title: 'Complete Menu Solutions',
      desc: 'From simple QR codes to dynamic TV menu boards and commission-free online ordering, we provide end-to-end dining tech.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: 'Engineered to Boost Sales',
      desc: 'Our menus are designed with behavioral psychology to highlight high-margin items and increase average order value by up to 28%.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    },
    {
      title: 'True Local Gorakhpur Support',
      desc: 'When you search for a "digital menu provider near me," you want a team that is actually here. We provide on-site setup, training, and instant support right here in Gorakhpur.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    },
    {
      title: 'Intuitive & Powerful Software',
      desc: 'Our platform is the powerful yet easy-to-use restaurant menu software Gorakhpur businesses need. It is flexible enough to serve as the perfect cafe menu software too.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
        </svg>
      )
    },
    {
      title: 'Expert Design & Development',
      desc: 'As expert digital menu developers in Gorakhpur, our code is flawless. Our in-house digital menu design service ensures your menu looks as good as your food tastes.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      )
    }
  ];

  const quickSummaryCards = [
    {
      title: 'Contactless QR Code Menus',
      subtitle: 'Your Expert QR Menu Maker in Gorakhpur',
      desc: 'The foundation of modern dining. We provide fast, reliable, and beautifully designed QR menus that save printing costs and can be updated instantly.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      )
    },
    {
      title: 'Dynamic Digital Menu Board in Gorakhpur',
      subtitle: 'Captivating Screen Displays',
      desc: 'Capture attention with stunning, dynamic menus on TV screens. Perfect for showcasing high-margin combos and scheduling offers automatically.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: 'Integrated Online Ordering',
      subtitle: 'Zero Commission Deliveries',
      desc: 'Expand your business with a commission-free system for takeaway and delivery orders, managed directly from your dashboard.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
          <polyline points="16 16 12 12 8 16" />
          <line x1="12" y1="12" x2="12" y2="21" />
        </svg>
      )
    },
    {
      title: 'Powerful Menu Software',
      subtitle: 'Leading Restaurant & Cafe Menu Software in Gorakhpur',
      desc: 'Get full control with our easy-to-use dashboard. Update prices, add items, and manage all your menus from one central place, on any device.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    },
    {
      title: 'Sales & Customer Analytics',
      subtitle: 'Data-Driven Insights',
      desc: 'Make data-driven decisions. Discover your most popular items, track sales trends, and understand customer preferences to maximize profitability.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      title: 'AI-Powered Features',
      subtitle: 'Next-Gen Dining Technology',
      desc: 'Offer a futuristic experience with AI Voice Search, Chat Assistants, and Mood-Based dish recommendations that truly "wow" your customers.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="M15 9h.01" />
          <path d="M8 15h8" />
        </svg>
      )
    }
  ];

  const deepDiveBlocks = [
    {
      num: '1',
      title: 'Smart Menus from a Top Digital Menu Provider in Gorakhpur',
      subtitle: 'Contactless QR Code Menus Built for Speed',
      desc: 'Embrace the future of dining with our easy-to-use QR code menu solutions. As the leading QR menu maker in Gorakhpur, we provide a seamless experience. Say goodbye to printing costs and outdated paper menus forever. Our system allows you to create a visually appealing, mobile-friendly menu that customers can access instantly by scanning a QR code with their smartphones.',
      extra: 'No app download required. Instant updates on prices, out-of-stock items, and chef specials from your phone.',
      image: './assets/digital-menu/smart-menus.webp',
      reverse: false
    },
    {
      num: '2',
      title: 'Dynamic Digital Menu Boards',
      subtitle: 'Paired with our Expert Digital Menu Design Service in Gorakhpur',
      desc: 'Transform your space and capture customers\' attention with our vibrant Digital Menu Boards in Gorakhpur. Ideal for QSRs, cafes, and food courts, our TV-based menus allow you to display your offerings in stunning high-definition with animated dish promotions.',
      extra: 'Schedule breakfast, lunch, and dinner menus automatically. Boost high-margin combo sales with eye-catching motion graphics.',
      image: './assets/digital-menu/dynamic-menu-boards.webp',
      reverse: true
    },
    {
      num: '3',
      title: 'Integrated Online Ordering System',
      subtitle: 'Take Control of Your Deliveries in Gorakhpur',
      desc: 'In today\'s market, online ordering is essential. But why pay hefty commissions of 15–30% to aggregators like Swiggy or Zomato? Our integrated online ordering system puts the power back in your hands. We build a seamless ordering platform right into your digital menu, branded 100% for your restaurant.',
      extra: 'Direct WhatsApp order dispatch notifications, zero commission cuts, and complete ownership of your customer database.',
      image: './assets/digital-menu/integrated-ordering-system.webp',
      reverse: false
    },
    {
      num: '4',
      title: 'Intuitive & Powerful Menu Software',
      subtitle: 'The Control Panel for Your Restaurant\'s Success',
      desc: 'Technology should simplify, not complicate. That\'s the philosophy behind our restaurant menu software for Gorakhpur businesses. We provide you with a secure, cloud-based dashboard that you can access from any device—your phone, tablet, or laptop. No technical skills required.',
      extra: 'Update item availability in 10 seconds, modify rates on the fly, and manage multiple outlet menus from one single screen.',
      image: './assets/digital-menu/intuitive-menu-software.webp',
      reverse: true
    },
    {
      num: '5',
      title: 'Sales & Customer Analytics',
      subtitle: 'Make Data-Driven Decisions, Not Guesses',
      desc: 'Do you know which of your dishes is the most profitable? What are your busiest hours on a Tuesday? Which items are most frequently ordered together? Our analytics dashboard answers these questions and more, turning guesswork into predictable profit.',
      extra: 'Track customer dwell time, view top-selling items per day, and understand repeat visitor patterns to refine your menu strategy.',
      image: './assets/digital-menu/sales-customer-analytics.webp',
      reverse: false
    },
    {
      num: '6',
      title: 'Advanced AI-Powered Features',
      subtitle: 'The Future of Dining, Today in Gorakhpur',
      desc: 'Set your establishment apart with truly futuristic features that "wow" your customers. Our AI integration creates a memorable and personalized dining experience that drives higher guest satisfaction and viral word-of-mouth.',
      extra: 'Voice-Activated multi-lingual dish search, conversational chat recommendations, and mood-driven culinary pairing guides.',
      image: './assets/digital-menu/advanced-ai-features.webp',
      reverse: true
    }
  ];

  const tailoredSolutions = [
    {
      num: '01',
      title: 'Cafes & Bakeries: Where Flavor Meets Technology',
      desc: 'Cafes and bakeries in Gorakhpur are more than just places to eat; they are social hubs. Show off your artisan pastries, specialty coffees, and seasonal specials with gorgeous high-definition photos that drive impulse orders.',
      benefit: 'Key Benefits: Reduced wait times at counters, increased pastry add-ons, and an aesthetic Instagram-worthy vibe.'
    },
    {
      num: '02',
      title: 'Quick Service Restaurants (QSRs): Built for Speed & Efficiency',
      desc: 'In the fast-paced QSR world, speed is king. Eliminate counter bottlenecks with dynamic digital TV menu boards and rapid QR table ordering that lets hungry customers order and pay in seconds.',
      benefit: 'Key Benefits: Faster table turnaround, zero miscommunicated order errors, and automated upselling of combos.'
    },
    {
      num: '03',
      title: 'Fine Dining Restaurants: Elevating the Guest Experience',
      desc: 'In fine dining, every detail contributes to the overall elegance. A tattered paper menu detracts from your ambiance. Our digital menus present an interactive luxury catalog with rich wine pairings, chef notes, and allergy filters.',
      benefit: 'Key Benefits: Sophisticated table presentation, higher vintage bottle sales, and elevated prestige.'
    },
    {
      num: '04',
      title: 'Hotels & Resorts: One Integrated System for All Outlets',
      desc: 'Manage your main dining hall, poolside bar, 24/7 in-room dining, and terrace lounge from a single centralized dashboard. Guests scan from their rooms and orders route straight to the kitchen.',
      benefit: 'Key Benefits: Zero room-service phone hold times, instant menu sync across outlets, and higher guest expenditure.'
    },
    {
      num: '05',
      title: 'Cloud Kitchens: Your Path to Commission-Free Success',
      desc: 'Stop forfeiting 30% of every order to third-party delivery apps. We build your direct branded online ordering website and WhatsApp order flow, letting you build a loyal customer base with maximum profit margin.',
      benefit: 'Key Benefits: Direct customer data ownership, higher net profit per order, and automated repeat order promotions.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential QR',
      target: 'Ideal for small cafes and new restaurants',
      desc: 'Make a brilliant start in the digital world. This package is perfect for eliminating printing costs forever and offering customers a modern menu experience.',
      features: [
        'Dynamic QR Code Menu',
        'Unlimited Menu Updates',
        'Engaging Mobile Interface',
        'Basic Analytics (Top Dishes)',
        'Access to our state-of-the-art QR menu maker',
        'Email & WhatsApp Support'
      ],
      isPopular: false,
      cta: 'Get Started Today'
    },
    {
      name: 'Professional Growth',
      badge: 'Most Popular',
      target: 'The Complete Digital Menu Solution',
      desc: 'Our best-selling package, built for established restaurants. This is a comprehensive solution designed to boost your sales and strengthen your brand identity.',
      features: [
        'All Features from Essential QR',
        'Dynamic Digital Menu Board (TV Screen)',
        'Commission-Free Online Ordering',
        'Professional setup by our expert design team',
        'Advanced software for cafes & restaurants',
        'Priority Support (Direct Call / WhatsApp)'
      ],
      isPopular: true,
      cta: 'Book a Free Demo'
    },
    {
      name: 'Ultimate AI',
      target: 'For Market Leaders & Innovators',
      desc: 'Embrace future technology and stand out from the competition. This package is for large restaurants, hotels, and brands that want to deliver an unforgettable customer experience with AI.',
      features: [
        'All Features from Professional Growth',
        'AI-Powered Voice Search Menu',
        'AI Chat Assistant for customer queries',
        'Advanced Analytics & Customer Reporting',
        'Enterprise-Grade Restaurant Management Software',
        'Dedicated Account Manager'
      ],
      isPopular: false,
      cta: 'Talk to an Expert'
    }
  ];

  const faqs = [
    {
      q: 'Why should my restaurant in Gorakhpur switch from a traditional to a digital menu?',
      a: 'Gorakhpur\'s dining market is rapidly evolving, and today\'s customers expect a modern dining experience. A digital menu offers significant advantages: it eliminates expensive printing costs every time prices or items change, lets you update out-of-stock dishes instantly, presents mouth-watering high-res photos that boost average order values by 20–28%, and speeds up ordering.'
    },
    {
      q: 'When I search for the "best digital menu company near me Gorakhpur", why should I choose Click On Media?',
      a: 'When you perform that search, you\'re not just looking for generic software; you\'re looking for a reliable local partner. Click On Media gives you: 1) True local on-site support in Gorakhpur for setup and staff training; 2) Exclusive AI-driven innovations like voice search and mood-based recommendations; and 3) An all-in-one system covering QR codes, TV boards, and commission-free ordering.'
    },
    {
      q: 'How does a Digital Menu Board actually increase sales?',
      a: 'A Digital Menu Board in Gorakhpur is your most powerful in-store marketing tool. Dynamic motion graphics and vivid food visuals naturally draw eyes. You can schedule high-margin breakfast combos in the morning and dessert specials at night, prompting customers to upgrade their orders effortlessly.'
    },
    {
      q: 'Is your software suitable and affordable for a small cafe?',
      a: 'Absolutely. We believe that technology should be accessible to everyone. Our cafe menu software for Gorakhpur is designed to be lightweight, affordable, and scalable. Our Essential QR tier is specially tailored for small cafes and new food startups to get started immediately without heavy investments.'
    },
    {
      q: 'What happens if my restaurant\'s internet connection goes down?',
      a: 'We have built our system to be resilient: 1) For QR Code Menus, customers load the menu via their own mobile data network (Jio/Airtel 4G/5G), completely independent of restaurant Wi-Fi. 2) For Digital TV Boards, our media players store menus locally in cache memory, continuing to play smoothly even during an internet blackout.'
    },
    {
      q: 'Can I integrate my existing POS (Point of Sale) system with your software?',
      a: 'Yes, POS integration is available with our Ultimate AI and custom enterprise packages. Our engineering team can connect your digital menu orders directly into popular billing and kitchen display systems (KDS) so your staff doesn\'t have to punch orders manually.'
    },
    {
      q: 'If I decide to work with Click On Media, what is the complete process?',
      a: 'We keep the entire process quick and simple: 1) We collect your current menu and food photos; 2) Our design team crafts your interactive digital menu and formats QR standees; 3) Our team visits your outlet to install QR standees and configure TV boards; 4) We train your managers and staff in 15 minutes; and 5) We provide ongoing local support.'
    }
  ];

  return (
    <div className="dm-page-container">
      {/* 1. BREADCRUMB BAR */}
      <nav className="dm-breadcrumb-bar" aria-label="Breadcrumb">
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
            <span className="breadcrumb-current">Digital Menu Solutions</span>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="dm-hero-section">
        <div className="container-inner">
          <div className="dm-hero-content-wrap">
            <div className="dm-badge-pill">QR Menu Maker & Smart Dining Tech</div>
            <h1 className="dm-hero-main-title">
              Digital Menu Solutions & QR Menu Maker in Gorakhpur | <span className="title-logo-gradient">Click On Media</span>
            </h1>
            <p className="dm-hero-subtitle">
              <strong>Click On Media</strong> helps restaurants, cafés, and hotels in Gorakhpur create contactless digital menus, eye-catching TV digital menu boards, and custom restaurant menu software to impress guests and simplify dining operations.
            </p>
            <div className="dm-rating-banner">
              <span className="stars-cluster">⭐⭐⭐⭐⭐</span>
              <span className="rating-text">The trusted choice for leading cafes & restaurants in Gorakhpur</span>
            </div>
            <div className="dm-hero-cta-group">
              <button 
                type="button" 
                className="btn-dm-primary"
                onClick={onOpenContact}
              >
                Get a Free Quote →
              </button>
              <a href="tel:+918303534063" className="btn-dm-secondary">
                📞 Call +91 8303534063
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 3. WHY CHOOSE CLICK ON MEDIA IN GORAKHPUR */}
      <section className="dm-section dm-why-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">WHY CHOOSE US</span>
            <h2 className="section-main-heading">
              Why Choose <span className="title-logo-gradient">Click On Media</span> in Gorakhpur?
            </h2>
            <p className="section-main-sub">
              Choosing a digital menu provider is an investment in your restaurant's efficiency and future growth. We are Gorakhpur's dedicated digital solution experts, combining local market understanding with cutting-edge technology.
            </p>
          </div>

          <div className="dm-why-grid">
            {whyChooseFeatures.map((item, idx) => (
              <div key={idx} className="dm-why-card">
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

      {/* 4. MEET YOUR MENU'S AI ASSISTANT (FEATURING VIDEO 1) */}
      <section className="dm-section dm-ai-video-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">NEXT-GEN TECHNOLOGY</span>
            <h2 className="section-main-heading">
              Meet Your Menu's <span className="title-logo-gradient">AI Assistant</span>
            </h2>
            <p className="section-main-sub">
              Impress your customers with an interactive menu that understands them. Our AI-driven features make finding the perfect dish fun, fast, and incredibly simple.
            </p>
          </div>

          <div className="dm-ai-showcase-row">
            {/* Left: Video 1 */}
            <div className="dm-ai-video-col">
              <div className="dm-video-frame-wrap">
                <video 
                  src="./assets/digital-menu/ai-digital-menu.mp4" 
                  className="dm-embedded-video"
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  disablePictureInPicture
                >
                  Your browser does not support the video tag.
                </video>
                <div className="dm-video-badge-overlay">
                  <span>✨ AI-Powered Digital Menu in Action</span>
                </div>
              </div>
            </div>

            {/* Right: 3 AI Features */}
            <div className="dm-ai-features-col">
              <div className="ai-feature-card">
                <div className="ai-icon-circle blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1="12" y1="19" x2="12" y2="23" />
                    <line x1="8" y1="23" x2="16" y2="23" />
                  </svg>
                </div>
                <div className="ai-feature-text">
                  <h4 className="ai-feature-title">Voice-Activated Search</h4>
                  <p className="ai-feature-desc">
                    No more endless scrolling. Customers can simply say, "Show me spicy vegetarian dishes" or "Find the chocolate milkshake," and our AI instantly displays the exact results.
                  </p>
                </div>
              </div>

              <div className="ai-feature-card">
                <div className="ai-icon-circle purple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="ai-feature-text">
                  <h4 className="ai-feature-title">AI-Powered Chat Assistant</h4>
                  <p className="ai-feature-desc">
                    Your menu now has a helpful interactive guide. Customers can ask questions like, "What's your bestseller?" or "What pairs well with Paneer Butter Masala?" and get intelligent, instant answers.
                  </p>
                </div>
              </div>

              <div className="ai-feature-card">
                <div className="ai-icon-circle pink">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                  </svg>
                </div>
                <div className="ai-feature-text">
                  <h4 className="ai-feature-title">Mood-Based Recommendations</h4>
                  <p className="ai-feature-desc">
                    A truly unique feature. Customers select a mood like "Feeling Healthy," "Adventurous," or "Comfort Food," and the menu automatically suggests the perfect dishes matching their cravings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DIGITAL MENU SOLUTIONS SUMMARY CARDS */}
      <section className="dm-section dm-summary-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">OUR PORTFOLIO</span>
            <h2 className="section-main-heading">
              Digital Menu Solutions in <span className="title-logo-gradient">Gorakhpur</span>
            </h2>
            <p className="section-main-sub">
              Beyond our groundbreaking AI, we provide a full spectrum of robust and reliable digital menu solutions tailored for your business in Gorakhpur.
            </p>
          </div>

          <div className="dm-summary-grid">
            {quickSummaryCards.map((card, idx) => (
              <div key={idx} className="dm-summary-card">
                <div className="summary-icon-pill">
                  {card.icon}
                </div>
                <h3 className="summary-card-title">{card.title}</h3>
                <h4 className="summary-card-sub">{card.subtitle}</h4>
                <p className="summary-card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DEEP-DIVE ALTERNATING BLOCKS (6 IMAGES + DETAILED CONTENT) */}
      <section className="dm-section dm-deepdive-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">IN-DEPTH OVERVIEW</span>
            <h2 className="section-main-heading">
              How Our Digital Menu Solutions <span className="title-logo-gradient">Transform Dining</span>
            </h2>
          </div>

          <div className="dm-blocks-list">
            {deepDiveBlocks.map((block, idx) => (
              <div key={idx} className={`dm-block-item ${block.reverse ? 'reverse' : ''}`}>
                <div className="dm-block-img-col">
                  <div className="dm-img-frame">
                    <img 
                      src={block.image} 
                      alt={block.title} 
                      className="dm-showcase-img"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="dm-block-text-col">
                  <span className="dm-step-tag">STEP {block.num}</span>
                  <h3 className="dm-block-title">{block.title}</h3>
                  <h4 className="dm-block-subtitle">{block.subtitle}</h4>
                  <p className="dm-block-desc">{block.desc}</p>
                  <div className="dm-block-extra-box">
                    <span className="check-mark">✓</span>
                    <p>{block.extra}</p>
                  </div>
                  <button 
                    type="button" 
                    className="btn-dm-inline"
                    onClick={onOpenContact}
                  >
                    Learn More About This →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TAILORED SOLUTIONS FOR EVERY TASTE */}
      <section className="dm-section dm-tailored-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">VERTICAL FIT</span>
            <h2 className="section-main-heading">
              Tailored Solutions for Every Taste in <span className="title-logo-gradient">Gorakhpur</span>
            </h2>
            <p className="section-main-sub">
              We understand that every food and hospitality business is unique. Here is how our custom software adapts to your specific venue.
            </p>
          </div>

          <div className="dm-tailored-grid">
            {tailoredSolutions.map((item, idx) => (
              <div key={idx} className="dm-tailored-card">
                <div className="tailored-num-badge">{item.num}</div>
                <h3 className="tailored-card-title">{item.title}</h3>
                <p className="tailored-card-desc">{item.desc}</p>
                <div className="tailored-benefit-box">
                  <span className="check-bullet">✓</span>
                  <span>{item.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. SEE IT IN ACTION (FEATURING VIDEO 2) */}
      <section className="dm-action-video-section">
        <div className="container-inner">
          <div className="action-video-card">
            <div className="action-text-col">
              <span className="action-pill">LIVE PREVIEW</span>
              <h2 className="action-title">See It In Action</h2>
              <p className="action-desc">
                Words can only say so much. Watch this short video to see how our AI-powered digital menu transforms the customer experience, making ordering faster, smarter, and more engaging. See for yourself why we are the best digital menu company in Gorakhpur.
              </p>
              <div className="action-bullets">
                <div className="action-bullet-item">
                  <span className="action-icon">⚡</span>
                  <span>Instant contactless QR table scan</span>
                </div>
                <div className="action-bullet-item">
                  <span className="action-icon">📱</span>
                  <span>App-free mobile web experience</span>
                </div>
                <div className="action-bullet-item">
                  <span className="action-icon">🚀</span>
                  <span>Direct-to-kitchen digital ordering</span>
                </div>
              </div>
              <button 
                type="button" 
                className="btn-dm-primary"
                onClick={onOpenContact}
                style={{ marginTop: '24px' }}
              >
                Schedule Live Restaurant Demo →
              </button>
            </div>
            <div className="action-video-col">
              <div className="action-video-wrapper">
                <video 
                  src="./assets/digital-menu/digitaal-menu-video.mp4" 
                  className="action-embedded-video"
                  autoPlay 
                  loop 
                  muted 
                  controls
                  playsInline 
                  disablePictureInPicture
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. THE RIGHT INVESTMENT FOR YOUR BUSINESS (PRICING TIERS) */}
      <section className="dm-section dm-pricing-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">TRANSPARENT PRICING</span>
            <h2 className="section-main-heading">
              The Right Investment <span className="title-logo-gradient">For Your Business</span>
            </h2>
            <p className="section-main-sub">
              Transparent & Effective Pricing for Gorakhpur's Restaurants. In Gorakhpur's competitive dining scene, delivering an exceptional experience is key to attracting customers without hidden fees.
            </p>
          </div>

          <div className="dm-pricing-grid">
            {pricingPlans.map((plan, idx) => (
              <div key={idx} className={`dm-pricing-card ${plan.isPopular ? 'popular' : ''}`}>
                {plan.badge && (
                  <div className="popular-badge">{plan.badge}</div>
                )}
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-target">{plan.target}</div>
                <p className="plan-desc">{plan.desc}</p>
                
                <ul className="plan-features-list">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <span className="check-bullet">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  type="button" 
                  className={`btn-plan-action ${plan.isPopular ? 'btn-plan-popular' : 'btn-plan-standard'}`}
                  onClick={onOpenContact}
                >
                  {plan.cta} →
                </button>
              </div>
            ))}
          </div>

          {/* Custom Plan Callout */}
          <div className="dm-custom-plan-box">
            <h3 className="custom-plan-title">Do you need a custom solution?</h3>
            <p className="custom-plan-desc">
              If your business needs don't fit perfectly into these packages, don't worry. As your local digital partner in Gorakhpur, we can create a custom plan tailored for your multi-chain or hotel setup.
            </p>
            <button 
              type="button" 
              className="btn-dm-primary"
              onClick={onOpenContact}
            >
              Contact Us for a Free Consultation →
            </button>
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (7 ACCORDIONS) */}
      <section className="dm-section dm-faq-section">
        <div className="container-inner">
          <div className="section-header-center">
            <span className="expertise-badge">CLARITY & CONFIDENCE</span>
            <h2 className="section-main-heading">
              Frequently Asked <span className="title-logo-gradient">Questions</span>
            </h2>
            <p className="section-main-sub">
              Whatever questions you may have about digital menus, we've answered them here. As a transparent partner, we want you to make the right decision with confidence.
            </p>
          </div>

          <div className="dm-faq-container">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`dm-faq-row ${isOpen ? 'active' : ''}`}>
                  <button 
                    type="button" 
                    className="dm-faq-btn"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="dm-faq-btn-text">{faq.q}</span>
                    <span className={`dm-faq-icon ${isOpen ? 'open' : ''}`}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="dm-faq-content-pane">
                      <p className="dm-faq-answer-p">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. BOTTOM CTA BANNER */}
      <section className="dm-cta-banner-section">
        <div className="container-inner">
          <div className="dm-cta-card">
            <div className="cta-content">
              <h2 className="cta-title">
                Ready to Modernize Your Restaurant in Gorakhpur?
              </h2>
              <p className="cta-desc">
                From interactive QR menus and dynamic digital menu boards to commission-free online ordering, Click On Media delivers end-to-end dining technology in Gorakhpur.
              </p>
              <div className="cta-buttons">
                <button 
                  type="button" 
                  className="btn-dm-primary"
                  onClick={onOpenContact}
                >
                  Book Free On-Site Demo →
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
