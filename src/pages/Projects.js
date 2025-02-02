import React from 'react';
import { ProjectList } from '../helpers/ProjectList';
import '../styles/Projects.css';
import '../styles/Animations.css';

function Projects() {
  return (
    <div className="projects fade-in">
      <h1>My Projects</h1>
      <div className="project-list">
        {ProjectList.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.name} />
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;