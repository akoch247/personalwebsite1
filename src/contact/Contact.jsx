import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaEnvelope } from "react-icons/fa"; 
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

         // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("Please fill in all fields.");
            return;
        }
  
        if (!validateEmail(formData.email)) {
            setStatus("Please enter a valid email.");
            return;
        }

         // Send email via EmailJS
        emailjs
            .send(
            "service_toxn9bp",  
            "template_bvm3bhw",  
            formData,
            "XqhnAiTnyLreytAiZ"    
            )
            .then(
            (result) => {
                setStatus("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" }); // clear form
            },
            (error) => {
                console.error(error);
                setStatus("Failed to send message. Try again later.");
            }
        );
    };

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
            <p className="lead d-flex justify-content-center pb-2">
            I'm seeking opportunities to apply my skills to mission-driven projects—full-time, contract, or freelance.   
            </p>
            <div className="d-flex justify-content-center align-items-center gap-3">
                <a 
                    href="mailto:akoch@oberlin.edu"
                    className="contact-icon btn btn-primary"
                    title="Email Me"
                >
                    <FaEnvelope size={32} />
                </a>

                <a 
                    href="https://www.linkedin.com/in/adrianakoch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon btn btn-primary"
                    title="LinkedIn Profile"
                >
                    <FaLinkedin size={32} />
                </a>
            </div>

            <div className="d-flex justify-content-center mt-5 mb-5">
                <form className="card contact-card text-start responsive-form p-4 rounded-4 text-white" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-control custom-input" 
                            id="name" 
                            name="name"
                            placeholder="Enter your name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required/>
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control custom-input" 
                            id="email" 
                            name="email"
                            placeholder="Enter your email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required />
                    </div>
                    <div className="mb-3">
                        <label for="message" className="form-label">Message</label>
                        <textarea 
                            className="form-control custom-input" 
                            id="message" 
                            name="message"
                            rows="4" 
                            placeholder="Enter your message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required>
                        </textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                    Send
                    </button>
                    {status && (
                        <p className="mt-3 d-flex justify-content-center align-items-center" style={{ color: status.includes("successfully") ? "white" : "lightcoral" }}>
                            {status}
                        </p>
                    )}
                </form>
            </div>
            </motion.div>
        </div>
    );
}