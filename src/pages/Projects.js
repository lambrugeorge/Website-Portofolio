import React from 'react'
import ProjectItem from '../components/ProjectItem'
import Proj1 from '../assets/Proj1.png';
import Proj2 from '../assets/Proj2.png';
import '../styles/Projects.css'



function Projects() {
  return (
    <div className='projects'>
      <h1> My Personal Projects</h1>
      <div className="projectList">
      <ProjectItem name="Social Media Website" image={Proj1}/>
      <ProjectItem name="Social Media Website" image={Proj2}/>
      </div>
    </div>
  )
}

export default Projects