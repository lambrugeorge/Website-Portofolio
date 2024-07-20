import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={`${project.name} snapshot`} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      )}
      {project.liveDemo && (
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      )}
      {project.subProjects && (
        <div className="subProjects">
          <h2>Sub Projects</h2>
          {project.subProjects.map((subProject, index) => (
            <div key={index} className="subProject">
              <h3>{subProject.name}</h3>
              <img src={subProject.image} alt={`${subProject.name} snapshot`} />
              <a href={subProject.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectDisplay;
