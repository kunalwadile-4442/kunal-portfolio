import React from "react";
import Navbar from '../Components/Navbar';
import './home.css';
import kunal from '../images/kunal.jpeg';
import Typewriter from 'typewriter-effect';
import { showSuccess, showError } from "../utils/toastUtils";
const Home = () => {

  const handleDownloadResume = async () => {
  const userId = process.env.REACT_APP_DEFAULT_USER_ID;
  const BaseUrl = process.env.REACT_APP_BASE_URL;
  const url = `${BaseUrl}/heroes/download-resume/${userId}`;

  try {
    // First, do a HEAD request to check if the PDF is reachable
    const res = await fetch(url, {
      method: "HEAD",
    });

    if (!res.ok) {
      throw new Error("Resume not available");
    }

    // If file exists, trigger the actual download
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Kunal-Wadile-Resume.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();

    showSuccess("Resume download started!");
  } catch (err) {
    console.error("Download failed:", err);
    showError("Failed to download.");
  }
};


    return (
        <>
            <Navbar />

            <div id='home'>
                <div className='pc'>
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
                    <br />
                    <button 
                        className="btn shine" 
                        onClick={handleDownloadResume}
                        download 
                        style={{ textDecoration: 'none' }}
                    >
                        Download Resume
                    </button>
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
                    <button 
                        className="btn shine" 
                        onClick={handleDownloadResume}
                        download 
                        style={{ textDecoration: 'none' }}
                    >
                        Download Resume
                    </button>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Home;
