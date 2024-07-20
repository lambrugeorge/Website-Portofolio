import React from 'react';
import { Instagram, GitHub, Facebook, LinkedIn } from '@material-ui/icons';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='socialMedia'>
        <a href="https://www.facebook.com/lambrugeorge/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Facebook />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <Instagram />
        </a>
        <a href="https://github.com/lambrugeorge" target="_blank" rel="noopener noreferrer" className="social-icon">
          <GitHub />
        </a>
        <a href="https://www.linkedin.com/in/lambru-adrian/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <LinkedIn />
        </a>
      </div>
      <p>&copy; 2024 Lambru A.</p>
    </footer>
  );
}

export default Footer;
