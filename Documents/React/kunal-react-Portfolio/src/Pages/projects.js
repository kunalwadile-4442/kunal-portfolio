import React from "react";
import ProjectPage from '../Components/Projects'
import './projects.css'
const Projects = () => {
    return (
        <>
        <br />
            <div id='myprojects'>
           
                <div>
              
                    <h1 className='centre bold'>Projects</h1>
                    <p className='centre'>Things I've built so far</p>
                    <ProjectPage />
                </div>
            </div>
            <hr />
        </>
    )
}

export default Projects