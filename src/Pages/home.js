import React from "react";
import Navbar from '../Components/Navbar';
import './home.css';
import kunal from '../images/kunal.jpeg';
import Typewriter from 'typewriter-effect';
import RotatingText from "../Components/RotatingText";

const Home = () => {
    return (
        <>
            <Navbar />

            <div id='home'>
                <div className='pc'>
                    <h1 className='heading'>Kunal Wadile</h1>
                    <h2 className='flex role'>
                        <span className="typewriter-container">
                            {/* <Typewriter
                                options={{
                                    loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('Software Engineer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Fullstack Developer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Problem Solver')
                                        .pauseFor(1000)
                                        .start();
                                }}
                            /> */}
                            <RotatingText
  texts={['Software Engineer', 'React Developer', 'Frontend Developer', 'Problem Solver']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
                        </span>
                    </h2>
                    <br />
                    <a 
                        className="btn shine" 
                        href="https://drive.google.com/file/d/11vjj-Ds2poY8pZfMmSlm14fRoITyFUeq/view" 
                        target="_blank" 
                        rel="noreferrer" 
                        download 
                        style={{ textDecoration: 'none' }}
                    >
                        Download Resume
                    </a>
                </div>

                <div className='mobile'>
                    <h1 className='heading'>Kunal Wadile</h1>
                    <h2 className='flex role'>
                        <span className="typewriter-container">
                            <Typewriter
                                options={{
                                    loop: true,
                                    autoStart: true,
                                    skipAddStyles: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString('Software Engineer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Fullstack Developer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('Problem Solver')
                                        .pauseFor(1000)
                                        .start();
                                }}
                            />
                        </span>
                    </h2>
                </div>

                <div className='profile-img'>
                    <img src={kunal} alt='Kunal Wadile' />
                </div>
                <div className="mobile">
                    <br />
                    <a 
                        className="btn shine" 
                        href="https://drive.google.com/file/d/11vjj-Ds2poY8pZfMmSlm14fRoITyFUeq/view" 
                        target="_blank" 
                        rel="noreferrer" 
                        download 
                        style={{ textDecoration: 'none' }}
                    >
                        Download Resume
                    </a>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Home;
