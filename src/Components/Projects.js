import React from "react";
import './Projects.css';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export const SnapNote = require('../projectImg/snapNote.png');
export const My_ai = require('../projectImg/my-ai.png');
export const Shop = require('../projectImg/shop.png');
export const Portfolio = require('../projectImg/portfolio.png');
export const Pj = require('../projectImg/pj.png');
export const Netflix = require('../projectImg/netflix.png');
export const Dominos = require('../projectImg/dominos.png');

const projectObj = [
    {
        img: SnapNote,
        heading: 'SnapNote',
        desc: 'A platform enabling users to login and write a note and keep private. Created using PHP, Bootstrap and MySQL.',
        link: '#projects',
        githubLink: 'https://github.com/kunalwadile-4442/SnapNote',
    },
    {
        img: My_ai,
        heading: 'My Ai',
        desc: 'A web application allowing solving their problems using AI tools. Built with React.js and Generative AI.',
        link: '#',
        githubLink: 'https://github.com/kunalwadile-4442/MY_AI',
    },
    {
        img: Shop,
        heading: 'Shopsy',
        desc: 'A visually engaging animated landing page for an e-commerce store, built with HTML and Tailwind CSS.',
        link: '#',
        githubLink: 'https://github.com/kunalwadile-4442/Fashion-Wear',
    },
    {
        img: Portfolio,
        heading: 'Portfolio',
        desc: 'Built using React.js, showcasing my skills and projects. Active contact form for easy communication.',
        link: '#',
        githubLink: 'https://github.com/kunalwadile-4442/kunal-portfolio',
    },
    {
        img: Pj,
        heading: 'Personal Journal App',
        desc: 'Secure journaling app with a React frontend and Node.js backend. Features authentication for secure notes.',
        link: '#',
        githubLink: 'https://github.com/kunalwadile-4442/Personal-Journal-app',
    },
    {
        img: Netflix,
        heading: 'Netflix Clone',
        desc: 'A sleek, responsive Netflix-inspired streaming UI, created using React.js and API integration.',
        link: '#',
        githubLink: '#',
    },
    {
        img: Dominos,
        heading: 'Domino’s Clone',
        desc: 'A visually appealing replica of the Domino’s website, built with React.js for a dynamic experience.',
        link: '#',
        githubLink: '#',
    },
];

const ProjectPage = () => {
    return (
        <div id='projects'>
            <motion.div
                className='myprojects'
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                {projectObj.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={project.img} alt={project.heading} />
                        <h3>{project.heading}</h3>
                        <p>{project.desc}</p>
                        <div className="project-links">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                                <FaGithub className="github-icon" /> GitHub Repo
                            </a>
                           
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ProjectPage;