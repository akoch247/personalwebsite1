import React from "react";
import { motion } from "framer-motion";
import "./Projects.css"; // import your custom CSS

export default function Projects() {
  const projects = [
    {
      name: "Portfolio Website",
      description:
        "My personal website with an overview of my skills and projects",
      techStack: ["HTML", "CSS", "JS", "React", "Bootstrap"],
      icon: "portfolio.png",
    },
    {
      name: "Ecommerce Social Media Platform",
      description:
        "A full-featured ecommerce platform with social media integration",
      techStack: ["React", "Bootstrap", "Express", "Postgres", "Mapbox"],
      icon: "ecommerce.png",
    },
    {
      name: "Fitness App",
      description:
        "A fitness tracking app with exercise routines and diet plans",
      techStack: ["React Native", "Expo", "Firebase"],
      icon: "fitness.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
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
        <a href="/Projects" className="btn btn-primary btn-lg mt-3 shadow">
          View All Projects
        </a>
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
              <div className="project-card card h-100 text-center text-white border-0">
                <div className="card-body d-flex flex-column align-items-center">
                  <div className="icon-wrapper mb-3">
                    <img
                      src={project.icon}
                      alt={project.name}
                      className="project-icon"
                    />
                  </div>
                  <h5 className="card-title fw-bold">{project.name}</h5>
                  <p className="card-text text-white small">
                    {project.description}
                  </p>
                  <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-badge badge rounded-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
