import React from 'react';
// import './experience.css';
import '../Pages/experiance.css'

const Experience = () => {
  const experiences = [
    {
      company: 'Code Clause',
      role: 'Web Developer Intern',
      duration: 'Dec 2022 - Mar 2023',
      description: 'Executed critical frontend and backend development tasks, mastering HTML, CSS, JavaScript, and Bootstrap with 100% proficiency. Enhanced website performance by 40%, reduced load time by 20%, and improved user engagement metrics by 30%'
    },
    
    // Add more experiences as needed
  ];

  return (
    <div className="experience">
      <h2 className="experience-heading">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3 className="experience-role">{exp.role}</h3>
          <h4 className="experience-company">{exp.company}</h4>
          <p className="experience-duration">{exp.duration}</p>
          <p className="experience-description">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
