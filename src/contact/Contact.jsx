import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <div className="container mt-4 text-center text-white">
            <motion.div
                initial= {{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
            >
            <h1 className="d-flex justify-content-center align-items-center mt-4">
                Contact<br />
            </h1>
            <p className="lead d-flex justify-content-center">
            I'm seeking opportunities to apply my skills to mission-driven projects—full-time, contract, or freelance.   
            </p>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <label for="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                 Send
                </button>
            </form>
            </motion.div>
        </div>
    );
}