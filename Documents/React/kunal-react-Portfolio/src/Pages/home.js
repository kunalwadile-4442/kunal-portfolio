import React from "react";
import Navbar from '../Components/Navbar';
import './home.css';
import kunal from '../images/kunal.jpeg';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <>
            <Navbar />

            <div id='home'>
                <div className='pc'>
                    <h1 className='bold'>Kunal Wadile</h1>
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
                                        .typeString('Software Developer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('React Developer')
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString('TypeScript Dev...')
                                        .pauseFor(1000)
                                        .start();
                                }}
                            />
                        </span>
                    </h2>
                    <br />
                    <a className="btn shine" href="/src/Components/Resume/kunalWadile_9834124682.pdf" download style={{ textDecoration: 'none' }}>Download Resume</a>
                </div>

                <div className='mobile'>
                    <h1 className='bold'>Kunal Wadile</h1>
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
                <a className="btn shine" href="/src/Components/Resume/kunalWadile_9834124682.pdf" download style={{ textDecoration: 'none' }}>Download Resume</a>

                </div>
            </div>
            <hr />
        </>
    );
};

export default Home;
