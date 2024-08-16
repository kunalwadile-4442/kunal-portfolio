import React from "react";
import "./About.css";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import Typewriter from "typewriter-effect";
const About = () => {
  return (
    <>
      <div id="about-me">
        <div className="about">
          <div className="desc">
            <h1 className="bold">About Me</h1>
            <p>
              👨‍💻 Kunal Wadile - A tech-driven Software Engineer currently
              sharpening my expertise at Appristine Technology. With a strong
              focus on both front-end and back-end development, I specialize in
              building scalable and performant applications using TypeScript,
              Redux, Redux Toolkit, React.js, and Next.js. My technical toolkit
              includes React and Node.js for front-end and back-end development,
              with proficiency in HTML, CSS, Tailwind CSS, JavaScript, and
              jQuery.
               🔧 On the backend, I leverage PHP and Express.js, while
              ensuring robust data management with MySQL, PostgreSQL, and
              MongoDB. My work is geared towards creating highly responsive and
              user-centric web applications. 📈 I hold certifications in J.P.
              Morgan’s Software Engineering and Azure AI Fundamentals,
              reflecting my commitment to continuous learning and staying at the
              forefront of web development technologies. 🚀 I am actively
              seeking opportunities as a Software Development Engineer to apply
              my skills in dynamic and challenging environments.
              <Typewriter
                options={{
                  // loop: true,
                  autoStart: true,
                  skipAddStyles: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "Looking opportunities for Software Devlopment Engineer."
                    )
                    .start();
                }}
              />
            </p>
            <h1 className="bold ">Education</h1>
            <p className="margin-top">Bachelors of Engineering (Computer)</p>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <HiOutlineBuildingLibrary />
              <span className="clg">8.54 CGPA</span>
            </div>
            <p className="clg">
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
            <p className="margin-top">
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
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              <HiOutlineBuildingLibrary />
              <span className="clg">89.59%</span>
            </div>
            <p className="clg">
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
      <br />
      <br />
      <br />
    </>
  );
};
export default About;
