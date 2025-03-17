import React from "react";
import '../Pages/home.css';
import './Footer.css';
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-social-pc'>
                    <a
                        className='social'
                        href='https://github.com/kunalwadile-4442'
                        target="_blank"
                        rel="noreferrer"
                    > 
                        <AiFillGithub size='1.2em' />
                    </a>
                    <a
                        className='social'
                        href='https://www.instagram.com/_kunal.wadile_/'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillInstagram size='1.2em' />
                    </a>
                    <a
                        className='social'
                        href='https://www.linkedin.com/in/kunal-wadile-773706258/'
                        target="_blank"
                        rel="noreferrer"
                    >
                        <AiFillLinkedin size='1.2em' />
                    </a>
                </div>
                <hr />
                <div className='footer-links'>
                    <div className='link-sec'>
                        <a href='#home'>Home</a>
                        <a href='#about-me'>About</a>
                        <a href='#techStack'>Tech Stack</a>
                        <a href='#myprojects'>Projects</a>
                        <a href='#contact'>Contact</a>
                    </div>

                    <p>
                        Made with ❤️‍🔥 by{' '}
                        <span className='heading'>Kunal Wadile</span>.
                    </p>
                    <div className='footer-social-mobile'>
                        <a
                            className='social'
                            href='https://github.com/kunalwadile-4442'
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillGithub size='1.2em' />
                        </a>
                        <a
                            className='social'
                            href='https://www.instagram.com/_kunal.wadile_/'
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillInstagram size='1.2em' />
                        </a>
                        <a
                            className='social'
                            href='https://www.linkedin.com/in/kunal-wadile-773706258/'
                            target="_blank"
                            rel="noreferrer"
                        >
                            <AiFillLinkedin size='1.2em' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;
