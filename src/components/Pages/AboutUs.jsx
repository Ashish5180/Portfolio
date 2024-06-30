import React from 'react';
import Timeline from './Timeline';
import Header from '../Layout/Header';

function AboutUs() {
  return (
    <>
      <Header />
      <div name="about" className="w-full min-h-screen bg-[#040404] text-gray-300 flex flex-col items-center">
        <div className="flex flex-col justify-center items-center w-full h-full py-8">
          <div className="max-w-[1000px] w-full grid grid-cols-1 gap-8 px-4 text-center">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-[#122f99]">
                About Me
              </p>
            </div>
          </div>

          <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 text-center">
            <div className="text-3xl sm:text-4xl font-bold">
              <p>
                Hi. I'm Ashish Yadav, nice to meet you. Please take a look around.
              </p>
            </div>
            <div className="relative sm:pl-8">
              <p className="text-lg sm:text-xl pl-4 sm:pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-[#122f99]">
                As an aspiring web developer mastering the MERN stack, I am passionate about building dynamic, responsive web applications. My commitment to continuous learning and clean, efficient code drives my journey in technology. I thrive in collaborative environments that foster innovation and am eager to contribute to impactful projects that push the boundaries of web development.
              </p>
            </div>
          </div>
        </div>

        <button className="border-2 hover:bg-[#122f99] hover:border-[#122f99] rounded-3xl text-lg font-semibold text-white p-3 m-2 transition duration-300">
          Download My Resume
        </button>

        <div className="w-full bg-[#040404] py-8">
          <h1 className="text-white text-4xl font-bold text-center leading-relaxed">
            Qualifications & Certifications
          </h1>
          <Timeline />
        </div>
      </div>
    </>
  );
}

export default AboutUs;
