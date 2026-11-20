import React from 'react';
import '../styles/AudioToggle.css';

export default function AudioToggle({ isMuted, onToggle }) {
  return (
    <div className="audio-toggle-container">
      <button 
        className="audio-toggle-btn" 
        onClick={onToggle}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        title={isMuted ? "Unmute video sound" : "Mute video sound"}
      >
        {isMuted ? (
          /* Muted Speaker Icon */
          <svg className="audio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        ) : (
          /* Unmuted Speaker Waves Icon */
          <svg className="audio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          </svg>
        )}
      </button>
    </div>
  );
}
