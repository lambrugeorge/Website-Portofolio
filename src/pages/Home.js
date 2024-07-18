import React from 'react'
import { LinkedIn, Email, GitHub } from '@material-ui/icons'
import '../styles/Home.css'


function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Adrian</h2>
        <div className='prompt'>
          <p>A Front end developer with a passion for learning and creating.</p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <div className='category'>
          <h2>Front-end</h2>
          <p>ReactJS, HTML, CSS, JavaScript,(PWAs), Material UI, React Hooks, React Router, React DOM, Deployment and Hosting, Redux Thunk, Test Automation, Jest, Testing, Redux Saga, Apollo GraphQL, React-Redux</p>
        </div>
        <div className='category'>
          <h2>Back-end</h2>
          <p>Node.js, RESTful API, MongoDB, Express.js, Firebase, SQL, PostgreSQL</p>
        </div>
        <div className='category'>
          <h2>Languages</h2>
          <p>JavaScript ES6+, TypeScript, ECMAScript</p>
        </div>
      </div>
    </div>
  )
}

export default Home
