import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

export default function Home() {
    return (
        <>
            <motion.div
                className="home-container"
                initial= {{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
            >
                <motion.h1
                    className="home-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                >
                    Hello World
                </motion.h1> 
            </motion.div>
        </>
    );
}