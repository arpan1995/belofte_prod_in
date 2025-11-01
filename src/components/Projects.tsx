import React from "react";
import "./Projects.css";

// Import your project images
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projectData = [
  {
    id: 1,
    title: "Skill Development Program",
    description:
      "Empowering women and youth through digital literacy and vocational training to create sustainable livelihoods.",
    image: project1,
    status: "Ongoing",
  },
  {
    id: 2,
    title: "Child Education Initiative",
    description:
      "Providing access to quality education and learning materials for children in underprivileged communities.",
    image: project2,
    status: "Completed",
  },
  {
    id: 3,
    title: "Health & Hygiene Campaign",
    description:
      "Organizing awareness drives and medical camps to promote community health and hygiene practices.",
    image: project3,
    status: "Ongoing",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">Our Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <span
                className={`project-status ${
                  project.status === "Ongoing" ? "ongoing" : "completed"
                }`}
              >
                {project.status}
              </span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <button className="project-button">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
