import React, { useRef, useEffect } from 'react';
import { ReactTyped } from 'react-typed';
import { FaLocationArrow } from "react-icons/fa";
import { Link } from 'react-router-dom';

const InstantVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center py-24" id="home">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        preload="auto"
        muted
        playsInline
        loop
      >
        <source src="https://cdn.pixabay.com/video/2021/08/06/84086-584871133_large.mp4" type="video/mp4" />
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
            strings={['I am Learning Mern Stack Development.']}
            typeSpeed={100}
            loop
          />
        </div>
        
      </div>
        <Link
          to="/about-us"
          className="flex items-center justify-center text-center border-2 hover:bg-[#122f99] hover:border-[#122f99] rounded-3xl text-lg font-semibold text-white p-3 m-2 transition-transform transform hover:scale-105 duration-300"
        >
          <FaLocationArrow className="mr-2 w-4 h-4" />
          <span>Learn More</span>
        </Link>
    </div>
  );
};

export default InstantVideo;
