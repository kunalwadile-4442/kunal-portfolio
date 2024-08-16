import React from 'react';
import '../Pages/home.css';
import './NavPanel.css';
import { TiHome } from 'react-icons/ti';
import { IoSchool } from 'react-icons/io5';
import { MdWork } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';

const NavPanel = () => {
    return (
        <>
            <div className='nav-panel'>
                <div className='nav-panel__container'>
                    <div className='nav-panel__container__logo'>
                        <button className='menu'>
                            <a href='#home'>
                                <TiHome />
                            </a>
                            <span>Home</span>
                        </button>
                    </div>
                    <div className='nav-panel__container__logo'>
                        <button className='menu'>
                            <a href='#about-me'>
                                <IoSchool />
                            </a>
                            <span>About</span>
                        </button>
                    </div>
                    <div className='nav-panel__container__logo'>
                        <button className='menu'>
                            <a href='#myprojects'>
                                <MdWork />
                            </a>
                            <span>Projects</span>
                        </button>
                    </div>
                    <div className='nav-panel__container__logo'>
                        <button className='menu'>
                            <a href='#contact'>
                                <IoMdMail />
                            </a>
                            <span>Contact</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavPanel;
