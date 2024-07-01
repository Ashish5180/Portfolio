import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaStar, FaSchool } from 'react-icons/fa'; // Importing necessary icons from react-icons

function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(18, 47, 153)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(18, 47, 153)' }}
        date="2021-22"
        iconStyle={{ background: 'rgb(18, 47, 153)', color: '#fff' }}
        icon={<FaSchool />} // Using the imported icon
      >
        <h3 className="vertical-timeline-element-title">High School Education</h3>
        <h4 className="vertical-timeline-element-subtitle">Jhankar School</h4>
        <p>
          I got 78% in CBSE Board 
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
      contentStyle={{ background: 'rgb(255,255,255)', color: '#404040' }}
        className="vertical-timeline-element--work"
        date="2022-23"
        iconStyle={{ background: 'rgb(18, 47, 153)', color: '#fff' }}
        icon={<FaSchool />} // Using the imported icon
      >
        <h3 className="vertical-timeline-element-title">Senior Secondary Education</h3>
        <h4 className="vertical-timeline-element-subtitle">Jhankar School</h4>
        <p>
        I got 78% in CBSE Board (Non-Med.)
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(18, 47, 153)', color: '#fff' }}
        date="2023-27 Batch"
        iconStyle={{ background: 'rgb(18, 47, 153)', color: '#fff' }}
        icon={<FaBriefcase />} // Using the imported icon
      >
        <h3 className="vertical-timeline-element-title"> Pursuing Btech(Full Stack Development)</h3>
        <h4 className="vertical-timeline-element-subtitle">KR Mangalam University,Sohna</h4>
        <p>
          1st year - 8cgpa
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(255,255,255)', color: '#404040' }}
        date="2024"
        iconStyle={{ background: 'rgb(18, 47, 153)', color: '#fff' }}
        icon={<FaStar />} // Using the imported icon
      >
        <h3 className="vertical-timeline-element-title">Intershala Cloud Certification</h3>
        <h4 className="vertical-timeline-element-subtitle">Online training</h4>
        <p>
          AWS CLOUD COMPUTING
        </p>
      </VerticalTimelineElement>
      
    </VerticalTimeline>
  );
}

export default Timeline;
