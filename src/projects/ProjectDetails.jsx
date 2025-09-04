import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Projects.css";
import { LuAudioLines } from "react-icons/lu";
import { MdComputer } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";

export default function ProjectDetails() {
  const { slug } = useParams();

  const projects = {
    "portfolio-website": {
      name: "Portfolio Website",
      fullDescription:
        "This is a detailed write-up about the portfolio website project. It covers the design, development process, challenges, and future improvements.",
      techStack: ["HTML", "CSS", "JS", "React", "Bootstrap"],
      liveDemo: "http://localhost:5173/",
      github: "https://github.com/akoch247/personalwebsite1",
      icon: MdComputer,
    },
    "ecommerce-platform": {
      name: "Ecommerce Social Media Platform",
      fullDescription:
        "This ecommerce project integrates shopping features with social media-like functionality. Built with React, Bootstrap, Express, and Postgres. Includes mapping features via Mapbox.",
      techStack: ["React", "Bootstrap", "Express", "Postgres", "Mapbox", "SQL"],
      liveDemo: "https://out2gether.netlify.app/",
      github: "https://github.com/LBuddyBoy/out2gether-frontend",
      icon: TiSocialInstagram,
    },
    "audio-analysis-program": {
      name: "Audio Analysis Visualiztion Program",
      fullDescription:
        "This audio processing project analyzes and manipulates sound using Fourier Transforms. Built with Rust, RustFFT, Rodio, and Slint. Features include real-time spectrogram visualization and interactive effects controls via a GUI.",
      techStack: ["Rust", "Slint", "Git"],
      liveDemo: "https://github.com/systems-programming/241-group-project-rafael-elijah-allison-riah-final",
      github: "https://github.com/systems-programming/241-group-project-rafael-elijah-allison-riah-final",
      icon: LuAudioLines,
    },
  };

  const project = projects[slug];

  if (!project) {
    return <h2 className="text-center text-danger mt-5">Project not found</h2>;
  }

  return (
    <section className="projects-section text-white py-5">
      <div className="container">
        <Link to="/projects" className="btn btn-primary mb-4">
          ← Back to Projects
        </Link>
        <div className="card project-card text-center text-white border-0 p-4">
          <div className="icon-wrapper mb-3">
          {typeof project.icon === "string" ? (
            <img src={project.icon} alt={project.name} />
            ) : (
            <project.icon size={80} color="#034df9" />
          )}
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
          <div className="d-flex justify-content-center gap-3 mt-4">
            <a 
              href={project.liveDemo}
              tabIndex={"_blank"}
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
              onClick={(e) => e.stopPropagation()}
            > 🌐 Live Demo</a>
            <a 
              href={project.github}
              tabIndex={"_blank"}
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
              onClick={(e) => e.stopPropagation()}
            > 💻 Github</a>
          </div>          
        </div>
      </div>
    </section>
  );
}
