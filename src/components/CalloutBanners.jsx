import React from 'react';
import '../styles/CalloutBanners.css';

export default function CalloutBanners({ onOpenContact }) {
  return (
    <section className="callout-section">
      <div className="section-container">
        <div className="callout-grid">
          {/* Banner 1 */}
          <div className="callout-card card-teal">
            <div className="callout-content">
              <span className="callout-badge">Tech & Architecture</span>
              <h3 className="callout-title">
                Have questions about <span className="highlight-dark">Web & App Engineering?</span>
              </h3>
              <p className="callout-desc">
                Speak directly with our senior full-stack architects to scope your roadmap, APIs, and timeline.
              </p>
              <button className="btn-callout-action btn-dark-action" onClick={onOpenContact}>
                Request Call Back
              </button>
            </div>
            <div className="callout-illustration">
              <div className="floating-metric-pill">
                <span className="dot online"></span> 99.9% Uptime SLA
              </div>
            </div>
          </div>

          {/* Banner 2 */}
          <div className="callout-card card-purple">
            <div className="callout-content">
              <span className="callout-badge">Media & Growth</span>
              <h3 className="callout-title">
                Want to 10x your ROI with <span className="highlight-purple">Paid Ads & SEO?</span>
              </h3>
              <p className="callout-desc">
                Get a comprehensive free ad-spend audit and competitor analysis report within 24 hours.
              </p>
              <button className="btn-callout-action btn-purple-action" onClick={onOpenContact}>
                Request Call Back
              </button>
            </div>
            <div className="callout-illustration">
              <div className="floating-metric-pill">
                <span className="trend-arrow">▲</span> 4.8x Avg ROAS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
