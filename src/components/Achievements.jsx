import React from 'react';
import '../styles/Achievements.css';

export default function Achievements() {
  const stats = [
    {
      id: 1,
      number: '150+',
      label: 'Brands Scaled',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      bgClass: 'badge-pink'
    },
    {
      id: 2,
      number: '50M+',
      label: 'Digital Reach & Impressions',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
      bgClass: 'badge-purple'
    },
    {
      id: 3,
      number: '1200+',
      label: 'High-ROI Campaigns',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      ),
      bgClass: 'badge-rose'
    },
    {
      id: 4,
      number: '25+',
      label: 'Global Markets Served',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      bgClass: 'badge-teal'
    },
    {
      id: 5,
      number: '4.9 ★',
      label: 'Top Rated Growth Agency',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
      bgClass: 'badge-amber'
    }
  ];

  return (
    <section className="achievements-section" id="milestones">
      <div className="section-container">
        <h2 className="section-heading">Achievements so far</h2>

        <div className="achievements-grid">
          {stats.map(stat => (
            <div className="stat-card" key={stat.id}>
              <div className={`stat-icon-wrapper ${stat.bgClass}`}>
                {stat.icon}
              </div>
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
