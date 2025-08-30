import React from "react";
import { motion } from "framer-motion";

export default function Projects() {

    const projects = [
        { 
            name: "Portfolio Website", 
            description: "My personal website with an overview of my skills and projects",
            techStack: "HTML, CSS, JS, React, Bootstrap",
            icon: "portfolio.png"
        },
        {
            name: "Ecommerce Social Media Platform",
            description: "A full-featured ecommerce platform with social media integration",
            techStack: "React, Bootstrap, Express, Postgres, Mapbox",
            icon: "ecommerce.png"
        },
    ];
    return (
        <>
            <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.7 }}
            >
                <h1 className="d-flex justify-content-center mt-4 fw-bold display-5">
                    Projects<br />
                </h1>
                <p className="lead d-flex justify-content-center">
                    Some of the projects I've built over the years.
                </p>
                <div className="d-flex justify-content-center mt-4">
                    <a href="/Projects" className="btn btn-primary btn-lg me-3">View All Projects</a>
                </div>

                <div className="container text-center py-5">
                    <div className="row g-1 justify-content-center">
                        {projects.map((project, i) => (
                            <motion.div
                                key={i} 
                                className="col-md-3"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <div className="card shadow-none bg-transparent">
                                    <div className="card-body d-flex flex-column align-items-center">
                                        <div className="icon-wrapper rounded-2">
                                            <img 
                                                src={project.icon} 
                                                alt={project.description} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

        </>
    );
}