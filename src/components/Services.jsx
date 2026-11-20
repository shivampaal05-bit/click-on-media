import React from 'react';
import '../styles/Services.css';

export default function Services({ onOpenContact }) {
  const serviceItems = [
    {
      id: 'web-app-dev',
      title: 'Web and App Development',
      badgeColor: 'badge-blue',
      imgSrc: './assets/web-dev.jpg',
      alt: 'Web and App Development Services',
      description: 'We architect ultra-fast responsive websites, custom SaaS platforms, and native iOS & Android applications engineered for peak conversion and scalability.',
      tags: ['React & Next.js', 'Mobile Apps', 'Custom APIs', 'Cloud Scale']
    },
    {
      id: 'seo-perf',
      title: 'SEO and Performance',
      badgeColor: 'badge-emerald',
      imgSrc: './assets/seo-performance.jpg',
      alt: 'SEO and Performance Optimization',
      description: 'Dominate organic search with technical SEO audits, Core Web Vitals acceleration, and strategic keyword dominance that delivers consistent high-intent inbound clients.',
      tags: ['Technical SEO', 'Page Speed 100', 'Keyword Authority', 'Conversion Rate']
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      badgeColor: 'badge-orange',
      imgSrc: './assets/marketing-plan.jpg',
      alt: 'Digital Marketing & Performance Ads',
      description: 'High-ROAS paid media acquisition across Meta, Google Ads, TikTok, and LinkedIn. We construct full-funnel ad campaigns with laser precision targeting and ROI tracking.',
      tags: ['Performance Ads', 'Media Buying', 'ROAS Optimization', 'Lead Funnels']
    },
    {
      id: 'branding-creative',
      title: 'Branding and Creative',
      badgeColor: 'badge-purple',
      imgSrc: './assets/branding-creative.jpg',
      alt: 'Branding and Creative Design',
      description: 'Memorable brand positioning, high-impact UI/UX design systems, typography, and motion media assets that turn casual viewers into loyal brand advocates.',
      tags: ['Brand Identity', 'UI/UX Design', 'Creative Media', 'Motion Graphics']
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <div className="services-header">
          <span className="services-tagline">Core Capabilities</span>
          <h2 className="section-heading">Services we offer</h2>
          <p className="services-subtext">
            End-to-end digital solutions tailored to scale ambitious companies, generate measurable ROI, and transform every click into real revenue.
          </p>
        </div>

        <div className="services-grid">
          {serviceItems.map(service => (
            <div className="service-card" key={service.id}>
              {/* Rounded Image Container matching reference */}
              <div className={`card-image-box ${service.badgeColor}`}>
                <img 
                  src={service.imgSrc} 
                  alt={service.alt} 
                  className="service-img" 
                  loading="lazy"
                />
              </div>

              {/* Card Body */}
              <div className="card-body">
                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>

                {/* Feature Tags */}
                <div className="card-tags">
                  {service.tags.map((tag, idx) => (
                    <span className="tag-pill" key={idx}>{tag}</span>
                  ))}
                </div>

                {/* Action CTA */}
                <button 
                  className="btn-card-action" 
                  onClick={onOpenContact}
                >
                  <span>Explore Service</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
