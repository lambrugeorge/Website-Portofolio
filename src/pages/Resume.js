import React from 'react';
import '../styles/Resume.css';
import resume from '../assets/resume.pdf';
import resumeImage from '../assets/resume.jpg';

function Resume() {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <div className="resume-container">
        <img src={resumeImage} alt="Resume" className="resume-image" />
        <a href={resume} download="CV_ADRIAN.pdf" className="download-link">
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Resume;
