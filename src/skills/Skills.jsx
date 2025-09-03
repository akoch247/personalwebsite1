import React from "react";
import { motion } from "framer-motion";
import "./Gradient.css";
import GradientText from "./Gradient";
import "./Skills.css";
import { BsBootstrap } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { TbHtml } from "react-icons/tb";
import { MdOutlineCss } from "react-icons/md";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandTailwind } from "react-icons/tb";
import { TbSql } from "react-icons/tb";
import { FaRust } from "react-icons/fa";
import { SiEslint } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import { FaGit } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

export default function Skills() { 
    const skills = [
        { name: "Boostrap", icon: BsBootstrap },
        { name: "React", icon: FaReact },
        { name: "Javascript", icon: DiJavascript },
        { name: "HTML", icon: TbHtml },
        { name: "CSS", icon: MdOutlineCss },
        { name: "Node.js", icon: FaNode },
        { name: "Express", icon: SiExpress },
        { name: "Postgres", icon: BiLogoPostgresql },
        { name: "Tailwind", icon: TbBrandTailwind },
        { name: "SQL", icon: TbSql },
        { name: "Rust", icon: FaRust },
        { name: "Slint", icon: SiEslint },
        { name: "Java", icon: RiJavaLine },
        { name: "Git", icon: FaGit },
        { name: "Figma", icon: FaFigma },
      ];
    

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    

    return (
        <div className="container mt-4 mb-5 text-center text-white">
            <motion.div
                initial= "hidden"
                animate= "show"
                variants= {container}
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

                <motion.div 
                    className="row g-3 justify-content-center"
                    variants={container}
                    >
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i} 
                            className="col-6 col-sm-4 col-md-3 col-lg-2"
                            variants={item}
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="card skill-card shadow-none bg-transparent">
                                <div className=" card-body d-flex flex-column align-items-center">
                                    <div className="icon-wrapper rounded-2">
                                        {typeof skill.icon === "string" ? (
                                            <img src={skill.icon} alt={skill.name} />
                                        ) : (
                                            <skill.icon size={80} color="#034df9" />
                                        )}
                                    </div> 
                                </div>      
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}