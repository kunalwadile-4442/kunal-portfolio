import React from 'react';
import '../Pages/experiance.css'

const Experience = () => {
  const experiences = [
    {
      
        company: "Appristine Technology Pvt. Ltd.",
        role: "Software Engineer",
        duration: "Oct 2024 - Present",
        description: "As a Software Engineer at Appristine Technology, I contribute to developing scalable and high-performance web applications using TypeScript, React.js, Next.js, Redux, and Redux Toolkit. My responsibilities include leading the development of core features, ensuring scalability across multiple projects, and achieving a 35% improvement in application performance. Additionally, I optimize the codebase for performance and maintainability, resulting in a 25% increase in user satisfaction and overall experience. I collaborate with cross-functional teams, including senior developers and project stakeholders, to integrate modern web technologies and enhance development workflows, ensuring on-time delivery of high-quality solutions. I also implement best practices in code optimization, debugging, and testing to improve code quality and reduce technical debt."
      },
    {
      company: 'Appristine Technology Pvt. Ltd.',
      role: 'Trainee Software Engineer',
      duration: 'July 2024 - Oct 2024',
      description: 'Actively engaged in developing scalable applications using TypeScript, Redux, and Redux Toolkit within React.js and Next.js environments. Enhanced code maintainability and performance, leading to a 35% improvement in application efficiency and a 25% increase in user experience. Contributed to key projects with a focus on modern web technologies.'
    },
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
          <p className="">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Experience;
