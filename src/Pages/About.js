import React from "react";
import './About.css';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import Typewriter from 'typewriter-effect';
const About = () => {
    return (
        <>
            <div id='about-me'>
                <div className='about'>
                    <div className='desc'>
                        <h1 className='bold'>About Me</h1>
                        <p>
                       Hello! I’m Kunal Wadile, a passionate full-stack web developer with a strong focus on building modern, responsive, and user-friendly applications. I specialize in React.js for front-end development and Node.js with Express for robust back-end solutions.

                    With hands-on experience across both front-end and back-end stacks, I bring ideas to life using technologies like HTML, CSS, Tailwind CSS, JavaScript, jQuery, and React. On the server side, I work confidently with Node.js, Express, PHP, and databases including MongoDB, MySQL, and PostgreSQL.

                    I hold certifications in J.P. Morgan’s Software Engineering Virtual Experience and Microsoft’s Azure AI Fundamentals, reflecting my dedication to continuous learning and industry standards.

                    Whether it’s creating seamless UI/UX experiences or optimizing backend APIs, I strive to deliver clean, scalable, and innovative solutions that solve real-world problems.
                            <Typewriter
                                options={{
                                    // loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            'Looking opportunities for Software Devlopment Engineer.'
                                        )
                                        .start();
                                }}
                            />
                        </p>
                        <h1 className='bold '>Education</h1>
                        <p className='margin-top'>
                            Bachelors of Engineering (Computer)
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                            }}
                        >
                            <HiOutlineBuildingLibrary />
                            <span className='clg'>8.54 CGPA</span>
                        </div>
                        <p className='clg'>
                            {/* <Typewriter
                                options={{
                                    // loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(1000)
                                        .typeString("JSPM's BSIOTR, Pune 2024")
                                        .start();
                                }}
                            /> */}
                            JSPM's BSIOTR, Pune 2024
                        </p>
                        <hr />
                        <p className='margin-top'>
                            {/* <Typewriter
                                options={{
                                    // loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('12th Science')
                                        .start();
                                }}
                            /> */}
                           Polytechnic 
                        </p>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'start',
                                alignItems: 'center',
                            }}
                        >
                            <HiOutlineBuildingLibrary />
                            <span className='clg'>89.59%</span>
                        </div>
                        <p className='clg'>
                            {/* <Typewriter
                                options={{
                                    // loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString(
                                            'Balbhim College, Beed 2020'
                                        )
                                        .start();
                                }}
                            /> */}
                           SSVPS’s Bapusaheb Shivajirao Deore Polytechnic 
                        </p>
                        <hr />
                    </div>
                </div>
                
            </div>
            
      <hr />
      <br /><br /><br />
         
        </>
    );
};
export default About;
