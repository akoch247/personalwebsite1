import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center text-center">

            <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.7 }}
                className="text-center text-lg-start"
            >
                <h1 className="fw-bold display-5">
                    Projects<br />
                </h1>
                <p className="lead">
                    Some of the projects I've built over the years.
                </p>
                <div className="mt-4">
                    <a href="/Projects" className="btn btn-primary btn-lg me-3">View All Projects</a>
                </div>
            </motion.div>
        </div>
    );
}