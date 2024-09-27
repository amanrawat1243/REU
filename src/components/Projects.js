// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Digital Marketing Website",
            description: "A web application that does XYZ.",
            link: "https://amanrawat1243.github.io/project/"
        },
        {
            title: "Node Simple CRUD APP",
            description: "A mobile application that does ABC.",
            link: "https://amanrawat1243.github.io/HHREPO/"
        }
    ];

    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project-item" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
