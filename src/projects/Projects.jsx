import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

export default function Projects() {
    return (
        <>
            <motion.div
                initial= {{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
            >
                <section>
                    <h1>Projects</h1>
                </section>
            </motion.div>
        </>
    );
}