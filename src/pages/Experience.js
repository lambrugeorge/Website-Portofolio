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

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        
        {/* High School Experience */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2011 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>"Ion Ghica" Economic College Brăila</h3>
          <p>High School</p>
        </VerticalTimelineElement>

        {/* Work Experience - Restaurant */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2016 - 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Like Cook</h3>
          <p>Restaurant</p>
        </VerticalTimelineElement>

        {/* Education - Military Training */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2021 - 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Naval Forces Non-Commissioned Officers School 'Admiral Ion Murgescu'</h3>
          <p>Military Petit Navy Officer</p>
          <p>Electrical Engineer</p>
        </VerticalTimelineElement>

        {/* Work Experience - Petit Navy Officer */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2021 - 2024"
          iconStyle={{ background: "#ffff", color: "#fff" }}
          icon={<img src={navalImage} alt="Nava Icon" className="vertical-timeline-element-icon" />} 
        >
          <h3 className='vertical-timeline-element-title'>Petit Navy Officer</h3>
          <p>Navigator Navy</p>
        </VerticalTimelineElement>

        {/* Work Experience - Web Developer */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2024 - Present"
          iconStyle={{ background: "#ffff", color: "#fff" }}  
          icon={<img src={eproDesign} alt="Nava Icon" className="vertical-timeline-element-icon" />} 
        >
          <h3 className='vertical-timeline-element-title'>Web Developer at e-ProDesign</h3>
          <p>Working as a web developer, focusing on building responsive and user-friendly websites.</p>
        </VerticalTimelineElement>

        {/* Education - Frontend Developer Courses */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2023 - Present"
          iconStyle={{ background: "#ffff", color: "#fff" }}  
          icon={<img src={ztmImage} alt="ZTM Icon" className="ztm" />}
        >
          <h3 className='vertical-timeline-element-title'>Frontend Developer Courses</h3>
          <p>Zero To Mastery Academy</p>
          <p>Complete Web Developer in 2024</p>
          <p>JavaScript: The Advanced Concepts, Frontend</p>
          <p>Complete React Developer in 2024 (w/ Redux, Hooks, GraphQL)</p>
          <p>JavaScript Web Projects: 20 Projects to Build Your Portfolio</p>
          <p>The Complete Junior to Senior Web Developer Roadmap (2024)</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience;
