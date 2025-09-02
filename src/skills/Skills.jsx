import React from "react";
import { motion } from "framer-motion";
import "./Gradient.css";
import GradientText from "./Gradient";
import "./Skills.css";


export default function Skills() {
    const skills = [
        { name: "HTML", icon: "/html.png" },
        { name: "CSS", icon: "/css.png" },
        { name: "JavaScript", icon: "/js.png" },
        { name: "React", icon: "/react.png" },
        { name: "Node.js", icon: "/nodejs.png" },
        { name: "Express", icon: "/expressjs.png" },
      ];

    return (
        <div className="container mt-4 mb-5 text-center text-white">
            <motion.div
                initial= {{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
            >
                <h2 className="fw-bold display-4 mb-3">
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={15}
                        showBorder={false}
                        className="custom-class"
                     >
                        Skills
                    </GradientText>
                </h2>
                <p className="lead mb-5">
                    Here is the list of my technical skills that I have acquired in my career as a Full Stack Developer.
                </p>

                <div className="row g-1 justify-content-center">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i} 
                            className="col-6 col-sm-4 col-md-3 col-lg-2"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            <div className="card skill-card shadow-none bg-transparent">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <div className="icon-wrapper rounded-2">
                                        <img 
                                            src={skill.icon} 
                                            alt={skill.name} 
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}