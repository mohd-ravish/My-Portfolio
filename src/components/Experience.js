import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'GetQuickCare',
      location: 'New Delhi, India',
      duration: 'Aug 2024 - Present',
      achievements: [
        'Developed a HIPAA-compliant healthcare platform using React, Node.js, and MySQL for virtual patient services.',
        'Integrated Stripe for secure payments and automated workflows to enhance reliability and efficiency.',
        'Deployed the platform on AWS with optimized configurations ensuring scalability and compliance.'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'Sprintx Solutions',
      location: 'New Delhi, India',
      duration: 'May 2024 - Jul 2024',
      certificate: 'https://drive.google.com/file/d/1i0_D_-w0szMjBS33WowKO2DbmGElyFS2/view?usp=drivesdk',
      achievements: [
        'Architected a document and school management system using React, Node.js, and MySQL, serving 500+ users.',
        'Implemented features to upload, edit, search, and categorize documents, sessions, and attendee information.',
        'Added admin controls for managing user roles, upload limits, and real-time activity monitoring.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-container">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="company-info">
                      <span className="company-name">{exp.company}</span>
                      {exp.certificate && (
                        <>
                          <span className="separator">|</span>
                          <a 
                            href={exp.certificate} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="certificate-link"
                          >
                            Certificate
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="experience-meta">
                    <span className="location">{exp.location}</span>
                    <span className="duration">{exp.duration}</span>
                  </div>
                </div>
                <ul className="achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
