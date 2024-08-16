import React from "react";
import './Projects.css';
import Project from './project/Project';
import { motion } from 'framer-motion';


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
        githubLink: 'https://github.com/kunalwadile-4442/SnapNote',
    },
    {
        img: My_ai,
        heading: 'My Ai',
        desc: 'A web application allowing solving their sought using AI tool. Created using React.js nad Generative AI',
        githubLink: 'https://github.com/kunalwadile-4442/MY_AI',
    },
    {
        img: Shop,
        heading: 'Shopsy',
        desc: 'A Shopsy website a animated landing page. Created using HTML and TailwindCSS',
        githubLink: 'https://github.com/kunalwadile-4442/Fashion-Wear',
    },
    {
        img: Portfolio,
        heading: 'Portfolio',
        desc: 'Built using React.js, showcasing my skills and projects. Active contact form for easy communication.',
        githubLink: 'https://github.com/kunalwadile-4442/kunal-portfolio',
    },
    {
        img: Pj,
        heading: 'Personal Journal App',
        desc: 'Secure journaling app with React frontend and Node.js backend. Safely write and manage personal notes with authentication.',
        githubLink: 'https://github.com/kunalwadile-4442/Personal-Journal-app',
    },
    {
        img: Netflix,
        heading: 'Netflix',
        desc: 'Netflix-inspired clone using React for a sleek, responsive user interface.',
        githubLink: '#', // Update with your GitHub link if available
    },
    {
        img: Dominos,
        heading: 'Dominois',
        desc: 'Replica of Dominos website using React.js for a dynamic and user-friendly interface.',
        githubLink: '#', // Update with your GitHub link if available
    },
];

const ProjectPage = () => {
    return (
        <div id='projects'>
            <div className='myprojects'>
                {projectObj.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="project-container"
                    >
                        <Project
                            img={project.img}
                            heading={project.heading}
                            desc={project.desc}
                            githubLink={project.githubLink}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
