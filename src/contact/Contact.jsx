import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", formData);

        // uncomment after the backend is finished
       /* fetch("http://localhost:5000/send-email", {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => alert(data.message))
            .catch(err => alert("Email failed to send.")); */
    }
    return (
        <>
            <motion.div
                className="contact-page"
                initial= {{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
            >
                <div className="conteact-container">
                    <h2>Get in Touch</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Email:
                            <input 
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Message: 
                            <textarea
                                name="message"
                                placeholder="Write your message here..."
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </motion.div>
        </>
    );
}