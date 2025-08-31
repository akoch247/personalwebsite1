import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

export default function Home() {
    return (
        <div className="d-flex flex-column flex-lg-row align-items-start justify-content-center">
            <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.7 }}
                className="text-center text-lg-start"
            >
                <h1 className="display-5 mt-5">
                    Hi, I'm Adriana Koch <br />
                    Full Stack Developer
                </h1>
                <p className="lead mt-3">
                    Building seamless digital experiences <br />
                    from backend to frontend.
                </p>
                <div className="mt-4">
                    <a href="/Projects" className="btn btn-primary btn-lg me-2">View Projects</a>
                    <a href="/Contact" className="btn btn-outline-light btn-lg contact-btn">Contact Me</a>
                </div>
            </motion.div>

        
            <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.7, delay: 0.2 }}
                
            >
                <img
                     src="/laptop-illustration1.png" 
                     alt="Laptop Illustration" 
                     className="img-fluid computer-img mt-5"
                     style={{ maxWidth: "450px" }}
                />
            </motion.div>
        </div>
    );
}