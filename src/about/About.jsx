import React from "react";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
    return (
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-5 mt-lg-0 text-center text-lg-start"
            >
                <img 
                    src="/Adrianakoch.jpg" 
                    alt="Laptop Illustration" 
                    className="img-fluid rounded-circle mx-aut0 mx-lg-0"
                    style={{ maxWidth: "320px" }}
                />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.7 }}
                className="text-center text-lg-start mt-4 mt-lg-0"
            >
                <h1 className="display-5 mx-4">
                    About Me<br />
                </h1>
                <p className="mt-3 p-4">
                    I'm Adriana Koch, a full stack developer based in Indianapolis, 
                    with a passion for building intuitive, scalable, and efficient digital solutions. 
                    I love bridging the gap between design and functionality to create
                    seamless user experiences from backend to frontend. <br/>
                    <br/>
                    With experience in JavaScript, React, Node.js, and UI/UX design, I've built responsive, 
                    user-focused applications that combine technial strength
                    with thoughtful design. <br />
                    <br />
                    I am eager to join a team that values creativity, collaboration, and impact - where
                    I can bring both artistry and technical expertise to meaningful projects.
                    Let's connect if that vision speaks to you.
                </p>
                <div className="mt-4 d-flex flex-column flex-sm-row gap-4 justify-content-center justify-content-lg-start about-buttons">
                    <a 
                        href="/AdrianaKoch_Resume (3).pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-light px-4 py-2"
                    > Download Resume</a>
                    <a 
                        href="https://www.linkedin.com/in/adrianakoch"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary px-4 py-2"
                    > Connect on LinkedIn</a>
                </div>
            </motion.div>
        </div>
    );
}