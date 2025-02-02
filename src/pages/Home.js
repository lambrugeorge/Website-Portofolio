import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, I'm Adrian</h2>
        <p>Frontend Developer passionate about building user-friendly applications.</p>
        <div className='social-links'>
          <a href="https://www.linkedin.com/in/lambru-adrian/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="mailto:lambru_george@yahoo.com" target="_blank" rel="noopener noreferrer">
            <EmailIcon />
          </a>
          <a href="https://github.com/lambrugeorge" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <div className='skills-container'>
          <div className='card'>
            <h2>Frontend</h2>
            <p>HTML, CSS, JavaScript ES6+, React, Material UI, Redux, Jest, PWAs</p>
          </div>
          <div className='card'>
            <h2>Backend</h2>
            <p>Node.js, REST APIs, Firebase</p>
          </div>
          <div className='card'>
            <h2>Languages</h2>
            <p>JavaScript, PHP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;