import React from "react";
import { motion } from "framer-motion";
import "./Gradient.css";
import GradientText from "./Gradient";

export default function Skills() {
    const skills = [
        { name: "HTML", icon: "/html5.svg" },
        { name: "CSS", icon: "/css3.svg" },
        { name: "JavaScript", icon: "/js.svg" },
        { name: "TypeScript", icon: "/ts.svg" },
        { name: "React", icon: "/react.svg" },
        { name: "Node.js", icon: "/node.svg" },
        { name: "Express", icon: "/express.svg" },
        { name: "MongoDB", icon: "/mongo.svg" },
      ];

    return (
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center">
            <motion.div
                initial= {{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="text-center text-lg-start"
            >
                <div className="fw-bold display-5">
                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={15}
                        showBorder={false}
                        className="custom-class"
                     >
                        Skills
                    </GradientText>
                </div>
                <div className="lead">
                    Here is the list of my technical skills that I have acquired in my career as a Full Stack Developer.
                </div>

                <div className="row g-4 justify-content-center">
                    {skills.map((skill, i) => (
                        <div key={i} className="col-6 col-md-3">
                            <div className="card bg-dark border-info h-100 text-center shadow-sm">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <img src={skill.icon} alt={skill.name} width="50" height="50" className="mb-3" />
                                    <h6 className="card-title">{skill.name}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}