import React from 'react';
import { useState } from 'react';
import PopupComponent from './ShowModal';

const Projects = () => { 
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (<div className='w-full h-screen py-16 text-white px-4 bg-[#040404]' id='projects'>
  <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
    <div className='lg:col-span-2 my-4'>
      <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
        Want to see my projects?
      </h1>
      <p>Projects which are made with latest technology</p>
    </div>
    <div className='my-4'>
      <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
        {/* <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            /> */}
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'onClick={handleOpenPopup}>
          My projects
        </button>
        {showPopup && <PopupComponent onClose={handleClosePopup} />}
      </div>

    </div>
  </div>
</div>)};

export default Projects;