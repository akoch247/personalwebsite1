import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent px-0">
            {/* Brand */}
            <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
                <img 
                    src="/Adrianakoch.jpg" 
                    alt="Adriana Koch Headshot" 
                    className="rounded-circle" 
                    width="40" 
                    height="40"
                />
                <span className="fw-bold">Adriana Koch</span>
            </Link>

            {/* Mobile Toggler */}
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* Nav Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Skills">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Experience">Experience</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/Contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
