import React from "react";
import "./Project.css"
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineLink} from 'react-icons/ai'


const Project = (props)=>{
    console.log(props.heading);
    return(
        <>
            <div className="project">
                <div className="project-img">
                    <img src={props.img} alt="" />
                </div>
                <div className="project-desc">
                    <p className="project-heading">{props.heading}</p>
                    <p>{props.desc}</p>
                    <div className="project-links">
                        {/* <AiOutlineLink size='1em' /> */}
                        {/* <a href={props.link} > View Project</a> */}
                    </div>
                    <div className="project-links">  
                        <AiFillGithub size='1em' />
                        <a href={props.githubLink} target="_blank" rel="noopener noreferrer"> GitHub Link</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Project