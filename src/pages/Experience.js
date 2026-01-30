/* cSpell:ignore Murgescu noopener noreferrer Pentest */
import React from 'react';
import { 
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import '../styles/Experience.css';

import navalImage from '../assets/naval.jpg';
import eproDesign from '../assets/eprodesign.png';
import ztmImage from '../assets/ztm1.png';
import thmImage from '../assets/thm.png';

function Experience() {
  const links = {
    tryHackMePdf: 'https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-AKFX75FVJQ.pdf',
    tryHackMePath: 'https://tryhackme.com/path/outline/soclevel1',
    linkedinCerts: 'https://www.linkedin.com/in/lambru-adrian/details/certifications/'
  };

  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2011 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>"Ion Ghica" Economic College Brăila</h3>
          <p>High School</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2016 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Cook</h3>
          <p>Restaurant</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2021 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Naval Forces Non-Commissioned Officers School 'Admiral Ion Murgescu'</h3>
          <p>Electrical Technician Level 5</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2021 - 2024"
          iconStyle={{ background: "#fff", color: "#000" }}
          icon={<img src={navalImage} alt="Nava Icon" className="vertical-timeline-element-icon" />} 
        >
          <h3 className='vertical-timeline-element-title'>Petit Navy Officer</h3>
          <p>Navigator Navy</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2023 - 2024"
          iconStyle={{ background: "#fff", color: "#000" }}  
          icon={<img src={ztmImage} alt="ZTM Icon" className="ztm" />}
        >
          <h3 className='vertical-timeline-element-title'>Frontend Developer Courses</h3>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.2rem', margin: '2px 0' }}>
            <a href={links.linkedinCerts} target="_blank" rel="noopener noreferrer">Complete Web Developer – Zero To Mastery (December 2023)</a>
          </p>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.2rem', margin: '2px 0' }}>
            <a href={links.linkedinCerts} target="_blank" rel="noopener noreferrer">JavaScript: The Advanced Concepts – Zero To Mastery (April 2024)</a>
          </p>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.2rem', margin: '2px 0' }}>
            <a href={links.linkedinCerts} target="_blank" rel="noopener noreferrer">Complete React Developer in 2024 (w/ Redux, Hooks, GraphQL) – Zero To Mastery (June 2024)</a>
          </p>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.2rem', margin: '2px 0' }}>
            <a href={links.linkedinCerts} target="_blank" rel="noopener noreferrer">JavaScript Web Projects – Zero To Mastery (July 2024)</a>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2025"
          iconStyle={{ background: "#fff", color: "#000" }}  
          icon={<img src={thmImage} alt="THM Icon" className="ztm" />}
        >
          <h3 className='vertical-timeline-element-title'>TryHackMe Premium Courses</h3>
          <p style={{ fontSize: '0.85rem', lineHeight: '1.2rem', margin: '2px 0' }}>
            <a href={links.tryHackMePdf} target="_blank" rel="noopener noreferrer">Web Fundamentals – TryHackMe (Certificate PDF)</a>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2024 - Present"
          iconStyle={{ background: "#fff", color: "#000" }}  
          icon={<img src={eproDesign} alt="eProDesign Icon" className="vertical-timeline-element-icon" />} 
        >
          <h3 className='vertical-timeline-element-title'>WordPress Developer & Database Administrator at e-ProDesign</h3>
          <p><strong>Full-time</strong> WordPress and database administrator, designing and maintaining robust, scalable WordPress installations. Developing custom themes and plugins, optimizing database performance, managing site security and malware remediation, and ensuring seamless user experiences across multiple client projects.</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;