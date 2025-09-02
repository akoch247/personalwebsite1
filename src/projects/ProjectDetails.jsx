import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Projects.css";

export default function ProjectDetails() {
  const { slug } = useParams();

  // Normally you'd fetch this from a backend or context
  const projects = {
    "portfolio-website": {
      name: "Portfolio Website",
      fullDescription:
        "This is a detailed write-up about the portfolio website project. It covers the design, development process, challenges, and future improvements.",
      techStack: ["HTML", "CSS", "JS", "React", "Bootstrap"],
      icon: "/portfolio.png",
    },
    "ecommerce-platform": {
      name: "Ecommerce Social Media Platform",
      fullDescription:
        "This ecommerce project integrates shopping features with social media-like functionality. Built with React, Bootstrap, Express, and Postgres. Includes mapping features via Mapbox.",
      techStack: ["React", "Bootstrap", "Express", "Postgres", "Mapbox", "SQL"],
      icon: "/ecommerce.png",
    },
    "audio-analysis-program": {
      name: "Audio Analysis Visualiztion Program",
      fullDescription:
        "This audio processing project analyzes and manipulates sound using Fourier Transforms. Built with Rust, RustFFT, Rodio, and Slint. Features include real-time spectrogram visualization and interactive effects controls via a GUI.",
      techStack: ["Rust", "Slint", "Git"],
      icon: "/fitness.png",
    },
  };

  const project = projects[slug];

  if (!project) {
    return <h2 className="text-center text-danger mt-5">Project not found</h2>;
  }

  return (
    <section className="projects-section text-white py-5">
      <div className="container">
        <Link to="/projects" className="btn btn-secondary mb-4">
          ← Back to Projects
        </Link>
        <div className="card project-card text-center text-white border-0 p-4">
          <div className="icon-wrapper mb-3">
            <img src={project.icon} alt={project.name} className="img-fluid mb-4 project-detail-img" />
          </div>
          <h2 className="fw-bold">{project.name}</h2>
          <p className="mt-3 text-white">{project.fullDescription}</p>
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-4">
            {project.techStack.map((tech, index) => (
              <span key={index} className="tech-badge badge rounded-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
