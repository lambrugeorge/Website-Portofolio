import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Adrian</h2>
        <div className='prompt'>
          <p>A Frontend Developer with a passion for learning and creating.</p>
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
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <div className='category'>
          <h2>Frontend</h2>
          <p>
            ReactJS, HTML, CSS, JavaScript, PWAs, Material UI, React Hooks, React Router, React DOM, 
            Deployment and Hosting, Redux Thunk, Test Automation, Jest, Testing, Redux Saga, 
            Apollo GraphQL, React-Redux
          </p>
        </div>
        <div className='category'>
          <h2>Backend</h2>
          <p>Node.js, RESTful API, MongoDB, Express.js, Firebase, SQL, PostgreSQL</p>
        </div>
        <div className='category'>
          <h2>Languages</h2>
          <p>JavaScript ES6+, TypeScript, ECMAScript</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
