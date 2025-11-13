import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Deepfake Detection System',
      technologies: ['Python', 'PyTorch', 'OpenCV', 'ResNeXt', 'LSTM', 'Streamlit'],
      sourceCode: 'https://github.com/mohd-ravish/Deepfake-Detection-System',
      description: [
        'Built a deepfake detection model, integrating ResNeXt50 for spatial features and LSTMs for temporal analysis.',
        'Preprocessed video datasets by extracting frames, detecting faces, and creating a custom dataset of cropped faces.',
        'Achieved 93.78% accuracy on a mixed dataset including YouTube, FaceForensics++, and DFD Challenge videos.'
      ]
    },
    {
      title: 'Real-Time AI-Generated Voice Detection',
      technologies: ['Python', 'Scikit-learn', 'CatBoost', 'XGBoost', 'Streamlit'],
      sourceCode: 'https://github.com/mohd-ravish/AI-Generated-Voice-Detection',
      description: [
        'Built a real-time AI-generated voice detection system using MFCC, NMF, and statistical audio features.',
        'Processed 581K+ audio samples from DEEP-VOICE, ASVSpoof2021, and Fake-or-Real datasets.',
        'Trained CatBoost, XGBoost, Random Forest, and KNN, achieving 91% accuracy with CatBoost.'
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <a 
                href={project.sourceCode} 
                target="_blank" 
                rel="noopener noreferrer"
                className="source-link"
                aria-label="View source code"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
            <div className="tech-stack">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">{tech}</span>
              ))}
            </div>
            <ul className="project-description">
              {project.description.map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
