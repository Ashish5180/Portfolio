import React from 'react';
import {ReactTyped} from 'react-typed';

function Home() {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center py-24  " id="home">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] "
      >
        <source src='https://www.pexels.com/download/video/3129671/' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="max-w-[1240px] mx-auto text-center relative z-10">
        <div className="text-2xl text-white md:text-4xl font-bold md:p-6 p-4">
          Hey, Coders!
        </div>
        <h2 className="text-white font-bold md:text-[80px] text-3xl md:p-6 p-4">
          I'm Ashish Yadav
        </h2>
        <div className="text-[25px] md:text-[50px] bg-white bg-clip-text text-transparent font-bold md:p-6 p-4">
          <ReactTyped
            className="pl-3"
            strings={['I am Learning Front-End Development', 'with React.js']}
            typeSpeed={100}
            loop
          />
        </div>
        <button className="border-2 hover:bg-pink-600 hover:border-pink-600 rounded-3xl text-lg font-semibold text-white p-3 m-2">
          Download My Resume
        </button>
      </div>
    </div>
  );
}

export default Home;
