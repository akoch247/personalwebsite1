import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.header
            id="navbar"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: 0.2,
            }}
        >
            <div id="brand">
                <img src = "/Adrianakoch.jpg" alt="Adriana Koch Headshot" />
                <p>Adriana Koch</p>
            </div>
            <nav id="nav-links">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
        </motion.header>
    )
}