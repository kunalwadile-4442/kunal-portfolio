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
                        Hello, I am kunal wadile and I am  tech enthusiast with a knack for both front-end and back-end development. Proficient in frameworks like React and Node.js, and skilled in programming languages such as HTML, CSS, Tailwind CSS, JavaScript, and JQuery. Experienced in utilizing PHP and Express.js for backend development, and MySQL, PostgreSQL, and MongoDB for database management. Focused on creating user-friendly and responsive websites, I have enhanced my skill set with certifications in J.P. Morgan’s Software Engineering and Azure AI Fundamentals. Committed to staying updated with the latest in web development, I ensure that I deliver fresh and creative solutions every time.
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
