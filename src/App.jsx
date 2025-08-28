import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Error404 from "./Error404.jsx";
import Home from "./home/Home.jsx";
import About from "./about/About.jsx";
import Projects from "./projects/Projects.jsx";
import Contact from "./contact/Contact.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from "./skills/Skills.jsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    );
}