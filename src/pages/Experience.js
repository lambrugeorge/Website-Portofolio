import React from 'react';
import { 
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function Experience() {
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
          <h3 className='vertical-timeline-element-title'>Like Cook</h3>
          <p>Restaurant</p>
        </VerticalTimelineElement>

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

        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2021 - Present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Petit Navy Officer</h3>
          <p>Navigator Navy</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2023 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Frontend Developer</h3>
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
