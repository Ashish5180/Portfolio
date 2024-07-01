import React, { useState } from 'react';
import Header from '../Layout/Header';
import ImageTimeline from './ImageTimeline';

const Projects = () => {
  const [showTimeline, setShowTimeline] = useState(false);

  const handleShowTimeline = () => {
    setShowTimeline(true);
  };

  return (
    <>
      <Header />
      <div className="w-full min-h-screen py-16 text-white px-4 bg-[#040404]" id="projects">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center justify-center text-center">
          <div className="my-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
              Want to see my FrontEnd Projects?
            </h1>
            <p className="mb-8">Projects which are made with the latest technology</p>
            <button
              onClick={handleShowTimeline}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              My Projects
            </button>
          </div>
          {showTimeline && (
            <div className="w-full mt-8">
              <ImageTimeline />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
