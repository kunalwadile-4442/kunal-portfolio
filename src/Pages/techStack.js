import React from "react";
import './techStack.css';
import { motion } from 'framer-motion';

import html from '../images/vscode-icons_file-type-html.svg';
import css from '../images/vscode-icons_file-type-css.svg';
import js from '../images/vscode-icons_file-type-js-official.svg';
import react from '../images/logos_react.svg';
import bootstrap from '../projectImg/bootstrap.jpeg';
import Jquery from '../projectImg/query.png';
import Postgresql from '../projectImg/PSQL.png';
import PHP from '../projectImg/php.png';
import java from '../projectImg/Java-Logo.jpg';
import git from '../images/logos_git-icon.svg';
import mysql from '../images/mysql.png';
import nodejs from '../images/nodejs_logo.svg';
import express from '../projectImg/express-js.png';
import mongodb from '../images/mongodb.svg';
import c from '../projectImg/C.webp';

const techStackItems = [
    { img: html, label: 'HTML' },
    { img: css, label: 'CSS' },
    { img: js, label: 'JavaScript' },
    { img: c, label: 'C' },
    { img: java, label: 'Java' },
    { img: react, label: 'React JS' },
    { img: bootstrap, label: 'Bootstrap' },
    { img: Jquery, label: 'Jquery' },
    { img: mysql, label: 'MySQL' },
    { img: Postgresql, label: 'PostgreSQL' },
    { img: PHP, label: 'PHP' },
    { img: nodejs, label: 'Node JS' },
    { img: express, label: 'Express JS' },
    { img: mongodb, label: 'MongoDB' },
    { img: git, label: 'Git' }
];

const TechStack = () => {
    return (
        <div id='techStack'>
            <div>
                <h1 className='centre bold'>My Tech Stack</h1>
                <p className='centre'>Technologies I've been working with recently</p>
                <div className='stackflex stackflex1'>
                    {techStackItems.map((item, index) => (
                        <motion.span
                            key={index}
                            className='stackStyle glass-shine'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <img src={item.img} alt={item.label} className='stack' /> {item.label}
                        </motion.span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
