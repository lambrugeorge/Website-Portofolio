import React from 'react';
import '../styles/Resume.css';
import resumeImage from '../assets/resume.jpg'; // Importăm imaginea
import resumePDF from '../assets/resume.pdf';   // Importăm PDF-ul

function Resume() {
  return (
    <div className="resume">
      <h1>My Resume</h1>
      <div className="resume-container">
        <img src={resumeImage} alt="Resume" className="resume-image" />
        <a href={resumePDF} download="CV_LAMBRU_ADRIAN.pdf" className="download-link">
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Resume;
