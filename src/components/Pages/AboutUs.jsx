import React from 'react';
import Timeline from './Timeline';

function AboutUs() {
  return (
    <>
    <div name="about" className="w-screen h-screen bg-[#040404] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">

        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8" id="about">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Ashish Yadav, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-lg relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-pink-600">
              A passionate beginner front-end developer in my second year of B.Tech. I specialize in creating impactful software solutions that transform lives for individuals, small businesses, and large corporations. Proficient in HTML, CSS, JavaScript, and ReactJS, I craft intuitive interfaces, aiming to exceed expectations and make a meaningful difference through collaborations.
            </p>
          </div>
        </div>

        {/* Add Timeline component below the main content */}
      </div>
    </div>
        <div className="w-full  bg-[#040404] ">
          <h1 className='text-white text-4xl font-bold text-center '>Qualifications & Certification</h1>
          <Timeline />
        </div>

        </>
  );
}

export default AboutUs;
