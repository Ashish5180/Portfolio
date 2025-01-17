import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import img1 from '../../assets/Screenshot (39).png'
import img2 from '../../assets/Screenshot (40).png'
import img3 from '../../assets/Screenshot (48).png'
import img4 from '../../assets/Screenshot (58).png'
import { GrProjects } from "react-icons/gr";; // Importing necessary icons from react-icons

function ImageTimeline() {
  return (
    <VerticalTimeline>
     



     <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(255,255,255)', color: '#404040' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255)' }}
        iconStyle={{ background: 'rgb(18, 47, 153)', color: '#fff' }}
        icon={<GrProjects  />} // Using the imported icon
      >
        <h3 className="vertical-timeline-element-title">Advance Project</h3>
        <h4 className="vertical-timeline-element-subtitle">Fitness-website</h4>
        <p>Technologies used: React js, Redux Toolkit, Tailwind CSS, Component land, Firebase Authentication, Fitness API
        Functionality: User can perform CRUD Operation on the blog section, add items to cart , Protected Routing,User data saves to firebase , API perform operations like:Fetch nutrition data, exercise data</p>
        <img src={img4} alt="Senior Secondary" className="my-4 w-full h-auto rounded-lg" />
            
            <div className="flex space-x-4 justify-center">
    <a 
      href='https://github.com/Ashish5180/React-Fitness-Website'
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    >
      Get Code
    </a>
    <a 
      href="https://vocal-horse-bd4d1d.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    >
      Go to Website
    </a>
  </div>
      </VerticalTimelineElement>


      {/* --------------------------------------------------------------------------- */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(255,255,255)', color: '#404040' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255)' }}
        iconStyle={{ background: 'rgb(18, 47, 153)', color: '#fff' }}
        icon={<GrProjects  />} // Using the imported icon
      >
        <h3 className="vertical-timeline-element-title">Intermediate Project</h3>
        <h4 className="vertical-timeline-element-subtitle">Real-Estate Solutions web</h4>
        <p>Using:React js , Auth0, Tailwind css</p>
        <img src={img1} alt="Senior Secondary" className="my-4 w-full h-auto rounded-lg" />
            
            <div className="flex space-x-4 justify-center">
    <a 
      href='https://github.com/Ashish5180/Real-Estate'
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    >
      Get Code
    </a>
    <a 
      href="https://static-web21.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    >
      Go to Website
    </a>
  </div>
      </VerticalTimelineElement>

{/* ----------------------------------------------------------------------- */}

      <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'rgb(255,255,255)', color: '#404040' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(18, 47, 153)' }}
  iconStyle={{ background: 'rgb(18, 47, 153)', color: '#fff' }}
  icon={<GrProjects />} // Using the imported icon
>
  <h3 className="vertical-timeline-element-title">Basic Project</h3>
  <h4 className="vertical-timeline-element-subtitle">Starbucks Landing page</h4>
  <p>Using: Html, CSS, Javascript</p>
  <img src={img2} alt="Btech" className="my-4 w-full h-auto rounded-lg" />
  <div className="flex space-x-4 justify-center">
    <a 
      href="https://github.com/Ashish5180/Starbucks-Landing-Page"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    >
      Get Code
    </a>
    <a 
      href="https://cool-lebkuchen-6b78fd.netlify.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    >
      Go to Website
    </a>
  </div>
</VerticalTimelineElement>

{/* ----------------------------------------------------------------------------- */}


      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(255,255,255)', color: '#404040' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255)' }}
        iconStyle={{ background: 'rgb(18, 47, 153)', color: '#fff' }}
        icon={<GrProjects  />} // Using the imported icon
      >
        <h3 className="vertical-timeline-element-title">Basic To-do</h3>
        
        <p>Using:Html ,Css , Javascript</p>
        <img src={img3} alt="Cloud Certification" className="my-4 w-full h-auto rounded-lg" />
            
            <div className="flex space-x-4 justify-center">
    <a 
        href='https://github.com/Ashish5180/To-Do'
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    >
      Get Code
    </a>
    <a 
      href="https://to-do-tau-mauve.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
    >
      Go to Website
    </a>
  </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default ImageTimeline;
