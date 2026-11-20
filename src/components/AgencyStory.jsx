import React from 'react';
import '../styles/AgencyStory.css';

export default function AgencyStory({ onOpenContact }) {
  return (
    <section className="agency-story-section" id="about">
      <div className="section-container">
        <div className="story-card">
          <div className="story-brand-badge">
            <img src="./assets/logo-transparent.png" alt="Click On Media" className="story-logo" />
            <span className="story-badge-text">Performance Growth Hub</span>
          </div>

          <h2 className="story-heading">
            Engineering <span className="text-logo-gradient">High-Growth Trajectories</span> for Modern Brands
          </h2>

          <p className="story-body">
            It has always been our mission to turn digital presence into real market dominance. We bridge the gap between creative visual artistry, data-obsessed performance media buying, and enterprise-grade web engineering. From early-stage visionaries to industry leaders, Click On Media is your dedicated catalyst for undeniable scale.
          </p>

          <div className="story-stats-row">
            <div className="story-stat-item">
              <h4>3.5x</h4>
              <p>Average Client Pipeline Growth</p>
            </div>
            <div className="story-stat-item">
              <h4>99.4%</h4>
              <p>Campaign Delivery Precision</p>
            </div>
            <div className="story-stat-item">
              <h4>14 Days</h4>
              <p>Rapid Growth Deployment</p>
            </div>
          </div>

          <button className="btn btn-pill-story" onClick={onOpenContact}>
            Claim Your Free Growth Audit
          </button>
        </div>
      </div>
    </section>
  );
}
