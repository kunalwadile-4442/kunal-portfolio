import React from 'react';
// import './experience.css';
import '../Pages/experiance.css'

const Experience = () => {
  const experiences = [
    {
      company: "Appristine Technology",
      role: "Software Developer",
      duration: "July 2024 - Present",
      description: "Actively engaged in developing scalable applications using TypeScript, Redux, and Redux Toolkit within React.js and Next.js environments. Enhanced code maintainability and performance, leading to a 35% improvement in application efficiency and a 25% increase in user experience. Contributed to key projects with a focus on modern web technologies."
    },
    {
      company: 'Code Clause',
      role: 'Web Developer Intern',
      duration: 'Dec 2022 - Mar 2023',
      description: 'Executed critical frontend and backend development tasks, mastering HTML, CSS, JavaScript, and Bootstrap with 100% proficiency. Enhanced website performance by 40%, reduced load time by 20%, and improved user engagement metrics by 30%'
    },
    
  ];

  return (
    <div className="experience">
      <h1 className="bold center">Experience</h1>
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
