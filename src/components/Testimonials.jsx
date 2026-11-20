import React from 'react';
import '../styles/Testimonials.css';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Rohan Mehta',
      role: 'Founder & CEO, NexaTech Labs',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      comment: 'Click On Media overhauled our entire web app architecture and ran our Google Ads. Our monthly recurring revenue surged by 340% within 4 months. Exceptional engineering and marketing precision!'
    },
    {
      id: 2,
      name: 'Ananya Sharma',
      role: 'CMO, Velvet & Glow Lifestyle',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      comment: 'Their SEO and performance strategy took us from invisible to page #1 for 45+ competitive keywords. Organic inbound sales now account for over 60% of our total revenue.'
    },
    {
      id: 3,
      name: 'Vikramaditya Roy',
      role: 'Director of Growth, UrbanVibe Media',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      comment: 'The branding and creative design Click On Media built gave our venture capital pitch undeniable punch. Their team is fast, creative, and completely ROI-obsessed.'
    }
  ];

  return (
    <section className="testimonials-section" id="reviews">
      <div className="section-container">
        <div className="testimonials-header">
          <span className="services-tagline text-logo-gradient">Client Success Stories</span>
          <h2 className="section-heading">Love from <span className="text-logo-gradient">our partners</span></h2>
          <div className="rating-overview-pill">
            <span className="star-icon">★</span>
            <span className="rating-score">4.9 / 5.0</span>
            <span className="rating-count">Based on 180+ Verified Brand Audits</span>
          </div>
        </div>

        <div className="testimonials-grid">
          {reviews.map(review => (
            <div className="testimonial-card" key={review.id}>
              <div className="stars-row">
                {[...Array(review.rating)].map((_, i) => (
                  <span className="star-active" key={i}>★</span>
                ))}
              </div>
              <p className="testimonial-text">"{review.comment}"</p>
              <div className="client-info">
                <img src={review.avatar} alt={review.name} className="client-avatar" />
                <div className="client-meta">
                  <h4 className="client-name">{review.name}</h4>
                  <p className="client-role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
