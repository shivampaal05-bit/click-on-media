import React, { useState } from 'react';
import '../styles/WhatsAppFloat.css';

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '918303534063';
  const defaultMessage = encodeURIComponent(
    'Hi Click On Media! I would like to know more about your digital services and software solutions.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside 
      className="whatsapp-float-wrapper" 
      aria-label="WhatsApp Quick Contact"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat with Click On Media on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Pulsing Outer Radar Ring */}
        <span className="whatsapp-pulse-ring" aria-hidden="true" />
        
        {/* Online Status Green Indicator Dot */}
        <span className="whatsapp-online-dot" title="Online now" />

        {/* Official WhatsApp SVG Icon */}
        <svg 
          className="whatsapp-icon" 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M16 2C8.268 2 2 8.268 2 16c0 2.658.742 5.23 2.148 7.458L2.05 29.57a1 1 0 001.218 1.218l6.195-2.065A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm-1.12 7.747c-.318-.707-.652-.721-.955-.734-.247-.01-.53-.01-.812-.01-.283 0-.742.106-1.13.53-.388.424-1.483 1.449-1.483 3.534s1.518 4.099 1.73 4.382c.212.283 2.927 4.708 7.218 6.38 3.567 1.39 4.293 1.113 5.07 1.042.777-.07 2.508-1.025 2.862-2.014.353-.99.353-1.838.247-2.015-.106-.177-.388-.283-.812-.495s-2.508-1.237-2.897-1.378c-.388-.141-.671-.212-.954.212-.283.424-1.095 1.378-1.342 1.661-.247.283-.495.318-.919.106-.424-.212-1.79-.66-3.41-2.104-1.26-1.124-2.112-2.513-2.359-2.937-.247-.424-.026-.653.186-.864.19-.19.424-.495.636-.742.212-.247.283-.424.424-.707.141-.283.07-.53-.035-.742-.106-.212-.936-2.309-1.31-3.14z" 
            fill="#FFFFFF"
          />
        </svg>

        {/* Hover Tooltip Pill */}
        <span className={`whatsapp-tooltip ${isHovered ? 'visible' : ''}`}>
          <span className="tooltip-title">Chat on WhatsApp</span>
          <span className="tooltip-subtitle">Usually replies in minutes</span>
        </span>
      </a>
    </aside>
  );
}
