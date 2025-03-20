import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='socialMedia'>
        <a href="https://www.facebook.com/lambrugeorge/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <InstagramIcon />
        </a>
        <a href="https://github.com/lambrugeorge" target="_blank" rel="noopener noreferrer" className="social-icon">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/lambru-adrian/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2025 Lambru A.</p>
    </footer>
  );
}

export default Footer;
