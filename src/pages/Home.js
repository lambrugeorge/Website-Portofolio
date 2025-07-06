import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';
import profile from '../assets/profile.jpg'; // Import the profile image

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <img 
          src={profile} 
          alt="Profile" 
          className="profile-picture"
        />
        <h2>Hi, I'm Adrian</h2>
        <p>Web Developer passionate about building user-friendly applications.</p>
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
            <h2>Security Operations & SOC</h2>
            <p>SIEM (Splunk, ELK), MITRE ATT&CK, Alert Triage, Endpoint & Network Monitoring, Digital Forensics</p>
          </div>
          <div className='card'>
            <h2>Threat Intelligence & Investigation</h2>
            <p>OSINT, YARA, MISP, Phishing Analysis</p>
          </div>
          <div className='card'>
            <h2>Web Security & Pentesting</h2>
            <p>OWASP Top 10, Burp Suite, SQLi, XSS, Authentication Bypass</p>
          </div>
          <div className='card'>
            <h2>Programming & Web Development</h2>
            <p>HTML, CSS, Material UI, JavaScript (ES6+), React.js, Node.js, PHP, WordPress, MySQL, REST APIs</p>
          </div>
          <div className='card'>
            <h2>Operating Systems & Tools</h2>
            <p>Linux, Windows, CLI, Git, GitHub</p>
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
