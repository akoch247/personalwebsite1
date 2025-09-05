import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Projects.css";
import { LuAudioLines } from "react-icons/lu";
import { MdComputer } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";

export default function Projects() {
  const projects = [
    {
      slug: "portfolio-website",
      name: "Portfolio Website",
      description:
        "My personal website with an overview of my skills and projects",
      fullDescription:
        "This is a detailed write-up about the portfolio website project. It covers the design, development process, challenges, and future improvements.",
      techStack: ["HTML", "CSS", "JS", "React", "Bootstrap"],
      liveDemo: "https://adrianakoch.netlify.app/",
      github: "https://github.com/akoch247/personalwebsite1",
      icon: MdComputer,
    },
    {
      slug: "ecommerce-platform",
      name: "Ecommerce Social Media Platform",
      description:
        "A full-featured ecommerce platform with social media integration",
      fullDescription:
        "This ecommerce project integrates shopping features with social media-like functionality. Built with React, Bootstrap, Express, and Postgres. Includes mapping features via Mapbox.",
      techStack: ["React", "Bootstrap", "Express", "Postgres", "Mapbox", "SQL"],
      liveDemo: "https://out2gether.netlify.app/",
      github: "https://github.com/LBuddyBoy/out2gether-frontend",
      icon: TiSocialInstagram,
    },
    {
      slug: "audio-analysis-program",
      name: "Audio Analysis Visualization Program",
      description:
        "A audio processing program displayed through a spectrogram visualization",
      fullDescription:
        "This audio processing project analyzes and manipulates sound using Fourier Transforms. Built with Rust, RustFFT, Rodio, and Slint. Features include real-time spectrogram visualization and interactive effects controls via a GUI.",
      techStack: ["Rust", "Slint", "Git"],
      download: "https://github.com/akoch247/audio-analysis-visualization/releases/download/v1.0.0/audio-analysis-visualization-macos.zip",
      github: "https://github.com/akoch247/audio-analysis-visualization",
      icon: LuAudioLines ,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="projects-section text-white py-5">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h1 className="fw-bold display-5">Projects</h1>
        <p className="lead text-white">
          Some of the projects I've built over the years.
        </p>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        className="container py-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="row g-4 justify-content-center">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="col-12 col-sm-6 col-lg-4"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Link
                to={`/projects/${project.slug}`}
                className="text-decoration-none"
              >
                <div className="project-card card h-100 text-center text-white border-0">
                  <div className="card-body d-flex flex-column align-items-center">
                    <div className="icon-wrapper mb-3">
                    {typeof project.icon === "string" ? (
                      <img src={project.icon} alt={project.name} />
                      ) : (
                      <project.icon size={80} color="#034df9" />
                    )}
                    </div>
                    <h5 className="card-title fw-bold">{project.name}</h5>
                    <p className="card-text text-white small">
                      {project.description}
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="tech-badge badge rounded-pill"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
