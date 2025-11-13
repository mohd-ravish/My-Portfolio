import React from 'react';
import './Publications.css';

const Publications = () => {
  return (
    <section id="publications" className="publications">
      <h2 className="section-title">Research Publications</h2>
      <div className="publications-container">
        <div className="publication-card">
          <div className="publication-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
          </div>
          <div className="publication-content">
            <h3 className="publication-title">
              "A Heterogeneous Graph Neural Network Combined with a Rule-Based System for Financial Fraud Detection and Prevention"
            </h3>
            <div className="publication-details">
              <div className="conference-info">
                <span className="status-badge">Accepted</span>
                <span className="conference">IEEE 5th International Conference on Advances in Asian Engineering (ASIANCON 2025)</span>
              </div>
              <div className="publication-meta">
                <div className="meta-item">
                  <span className="label">Published in:</span>
                  <span className="value">IEEE Xplore</span>
                </div>
                <div className="meta-item">
                  <span className="label">DOI:</span>
                  <span className="value">Awaited</span>
                </div>
              </div>
              <a 
                href="https://drive.google.com/file/d/1ydOj9we5bOMF1Q5UfWkAoHx8md3Sg5Zo/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="certificate-button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
