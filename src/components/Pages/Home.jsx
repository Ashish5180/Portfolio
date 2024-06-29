import React from 'react';
import {ReactTyped} from 'react-typed';

function Home() {
  return (
    <div className="relative h-[635px] py-24" id="home">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        preload="auto"
      >
        <source src="bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="max-w-[1240px] mx-auto text-center relative z-10">
        <div className="text-2xl text-white md:text-4xl font-bold md:p-[64px] p-[55px] stroke-black">
          Hey, Coders!
        </div>

        <h2 className="text-white font-bold md:text-[80px] text-3xl md:p-[24px] p-[15px]">
          I'm Ashish Yadav
        </h2>

        <div className="text-[25px] md:text-[50px] bg-white bg-clip-text text-transparent font-bold md:p-[24px] p-[15px]">
          <ReactTyped
            className="pl-3"
            strings={['I am Learning Web Development']}
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
