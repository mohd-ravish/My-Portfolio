import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      institution: 'Jamia Millia Islamia',
      location: 'New Delhi',
      degree: 'Bachelor of Technology in Computer Engineering',
      grade: 'CGPA: 8.83',
      duration: 'Aug 2021 - Jul 2025'
    },
    {
      institution: 'Jamia Senior Secondary School',
      location: 'New Delhi',
      degree: 'Senior Secondary Education',
      grade: '91.00%',
      duration: 'Jul 2019 - May 2021'
    }
  ];

  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
            </div>
            <div className="education-content">
              <div className="education-header">
                <div>
                  <h3 className="institution">{edu.institution}</h3>
                  <p className="degree">{edu.degree}</p>
                </div>
                <span className="location">{edu.location}</span>
              </div>
              <div className="education-footer">
                <span className="grade">{edu.grade}</span>
                <span className="duration">{edu.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
