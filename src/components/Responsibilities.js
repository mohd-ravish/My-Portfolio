import React from 'react';
import './Responsibilities.css';

const Responsibilities = () => {
  return (
    <section id="responsibilities" className="responsibilities">
      <h2 className="section-title">Position of Responsibility</h2>
      <div className="responsibilities-container">
        <div className="responsibility-card">
          <div className="responsibility-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          </div>
          <div className="responsibility-content">
            <div className="responsibility-header">
              <div>
                <h3 className="position-title">Tech Team Member</h3>
                <div className="organization-info">
                  <span className="organization">IEEE, Jamia Millia Islamia</span>
                  <span className="separator">|</span>
                  <a 
                    href="https://drive.google.com/file/d/1_jQIKMyKbJ8CE-XWTCBe3j5xh7wbFfff/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    Certificate
                  </a>
                </div>
              </div>
              <span className="tenure">Jan 2024 - Dec 2025</span>
            </div>
            <ul className="contributions">
              <li>
                Contributed to the development and maintenance of the official{' '}
                <a 
                  href="https://ieeejmi.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-link"
                >
                  IEEE JMI
                </a>
                {' '}website, ensuring smooth functionality.
              </li>
              <li>
                Enhanced the{' '}
                <a 
                  href="https://hackjmi.ieeejmi.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-link"
                >
                  Hack JMI
                </a>
                {' '}website by optimizing performance, improving UX, and adding interactive features.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;
