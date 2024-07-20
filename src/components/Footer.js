import React from 'react';
import { Instagram, GitHub, Facebook, LinkedIn } from '@material-ui/icons';
import '../styles/Footer.css'



function Footer() {
  return (
    <footer className='footer'>
      <div className='socialMedia'>
        <Facebook />
        <Instagram />
        <GitHub />
        <LinkedIn />
      </div>
      <p>&copy; 2024 Lambru A.</p>
    </footer>
  );
}

export default Footer;
