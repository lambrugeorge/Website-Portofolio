import React from 'react'
import { 
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { School } from '@material-ui/icons'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2010-2014"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
