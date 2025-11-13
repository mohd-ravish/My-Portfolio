import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:mohdravish2003@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3 className="contact-heading">Let's Connect</h3>
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="contact-methods">
            <a href="mailto:mohdravish2003@gmail.com" className="contact-method">
              <div className="method-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="method-details">
                <span className="method-label">Email</span>
                <span className="method-value">mohdravish2003@gmail.com</span>
              </div>
            </a>
            <a href="tel:+918076534620" className="contact-method">
              <div className="method-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="method-details">
                <span className="method-label">Phone</span>
                <span className="method-value">(+91) 8076534620</span>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/mohdravish/" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="method-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="method-details">
                <span className="method-label">LinkedIn</span>
                <span className="method-value">linkedin.com/in/mohdravish</span>
              </div>
            </a>
            <a href="https://github.com/mohd-ravish" target="_blank" rel="noopener noreferrer" className="contact-method">
              <div className="method-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <div className="method-details">
                <span className="method-label">GitHub</span>
                <span className="method-value">github.com/mohd-ravish</span>
              </div>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message..."
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Mohd Ravish. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/mohd-ravish" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mohdravish/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:mohdravish2003@gmail.com">Email</a>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
