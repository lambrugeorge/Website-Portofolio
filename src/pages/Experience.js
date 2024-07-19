import React from 'react'
import { 
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { School, Work } from '@material-ui/icons'
import '../styles/Experience.css'



function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2010 - 2014"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
        <h3 className='vertical-timeline-element-title'> My Random Highschool, Random Place, Random State</h3>
        <p> High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
        <h3 className='vertical-timeline-element-title'> My Random Highschool, Random Place, Random State</h3>
        <p> High School</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2010 - 2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
        <h3 className='vertical-timeline-element-title'> My Random Highschool, Random Place, Random State</h3>
        <p> High School</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
    </div>
  )
}

export default Experience
