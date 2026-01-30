/* cSpell:ignore noopener noreferrer Elementor Wordfence */
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';
import profile from '../assets/profile.jpg';

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

        {/* Professional Summary */}
        <p>
          WordPress Developer focused on building custom websites and plugins using PHP and JavaScript.
          <br />
          Experienced in developing tailored solutions, maintaining large-scale WordPress installations
          and working in ticket-driven environments.
        </p>

        <div className='social-links'>
          <a
            href="https://www.linkedin.com/in/lambru-adrian/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>

          <a
            href="mailto:lambru_george@yahoo.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>

          <a
            href="https://github.com/lambrugeorge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>

      <div className='skills'>
        <h1>Skills</h1>

        <div className='skills-container'>
          <div className='card'>
            <h2>WordPress & CMS</h2>
            <p>
              WordPress, Elementor, WP Bakery, Custom Themes & Plugins
            </p>
          </div>

          <div className='card'>
            <h2>Backend</h2>
            <p>
              PHP, MySQL, REST APIs
            </p>
          </div>

          <div className='card'>
            <h2>Frontend</h2>
            <p>
              HTML5, CSS3, JavaScript (ES6+)
            </p>
          </div>

          <div className='card'>
            <h2>Dev Tools</h2>
            <p>
              VS Code, Git, GitHub, PowerShell
            </p>
          </div>

          <div className='card'>
            <h2>Hosting & Platforms</h2>
            <p>
              cPanel, Linux, Windows
            </p>
          </div>

          <div className='card'>
            <h2>Workflow & Security</h2>
            <p>
              Jira (ticket solving), Wordfence Security,
              Kali Linux, Wireshark
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
