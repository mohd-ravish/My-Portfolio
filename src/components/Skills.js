import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = {
    'Languages': ['C/C++', 'Python', 'JavaScript', 'HTML/CSS'],
    'Libraries': ['React', 'PyTorch', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn', 'Keras', 'Material-UI'],
    'Frameworks': ['Next.js', 'React Native', 'Express.js', 'Flask', 'TensorFlow', 'Streamlit'],
    'Databases': ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase'],
    'Developer Tools': ['Node.js', 'Git/GitHub', 'Docker', 'AWS', 'CI/CD', 'Shopify', 'n8n']
  };

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, items], index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skills-grid">
              {items.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-tag">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
