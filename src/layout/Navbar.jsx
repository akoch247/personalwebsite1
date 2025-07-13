import React from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header id="navbar">
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
        </header>
    )
}