import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import { GitHub } from '@material-ui/icons';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
        <img src={project.image} alt={`${project.name} snapshot`} />
      </a>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <GitHub />
      </a>
    </div>
  );
}

export default ProjectDisplay;
