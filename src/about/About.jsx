import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-5 mt-lg-0"
            >
                <img 
                    src="/laptop-illustration.png" 
                    alt="Laptop Illustration" 
                    className="img-fluid"
                    style={{ maxWidth: "450px" }}
                />
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.7 }}
                className="text-center text-lg-start"
            >
                <h1 className="display-5">
                    About Me<br />
                </h1>
                <p className=" mt-3">
                    I'm Adriana Koch, a full stack developer based in Indianapolis. 
                    I have a passion for creating seamless and efficient digital experiences from backend to frontend.
                </p>
            </motion.div>
        </div>
    );
}