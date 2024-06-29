import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaStar, FaSchool } from 'react-icons/fa'; // Importing necessary icons from react-icons

function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(219, 39, 119)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(219, 39, 119)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(219, 39, 119)', color: '#fff' }}
        icon={<FaSchool />} // Using the imported icon
      >
        <h3 className="vertical-timeline-element-title">High School Education</h3>
        <h4 className="vertical-timeline-element-subtitle">Jhankar School</h4>
        <p>
          I got 78% in CBSE Board 
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: 'rgb(219, 39, 119)', color: '#fff' }}
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
        date="2008 - 2010"
        iconStyle={{ background: 'rgb(219, 39, 119)', color: '#fff' }}
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
        date="2006 - 2008"
        iconStyle={{ background: 'rgb(219, 39, 119)', color: '#fff' }}
        icon={<FaStar />} // Using the imported icon
      >
        <h3 className="vertical-timeline-element-title">Intershala Cloud Certification</h3>
        <h4 className="vertical-timeline-element-subtitle">Online training</h4>
        <p>
          AWS CLOUD COMPUTING
        </p>
      </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<FaSchool />} // Using the imported icon
      >
        <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>
          Strategy, Social Media
        </p>
      </VerticalTimelineElement> */}
      {/* <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="November 2012"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<FaSchool />} // Using the imported icon
      >
        <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>
          Creative Direction, User Experience, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<FaSchool />} // Using the imported icon
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>
          Creative Direction, Visual Design
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<FaStar />} // Using the imported icon
      /> */}
    </VerticalTimeline>
  );
}

export default Timeline;
