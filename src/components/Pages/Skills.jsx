import React from 'react';
import Header from '../Layout/Header';


const Skills = () => {
  return (
    <>
    <Header/>
    <div name='skills' className='w-full h-full  bg-[#040404] text-gray-300' id='services'>
      <div className='max-w-[1000px] mx-auto p-4'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#122f99]'>Skills</p>
          <p className='py-4 text-lg'>// "These are the technologies I'm currently working with in my projects."</p>
        </div>

{/* Skills Cards */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 text-center py-11'>
          {/* HTML */}
          <div className=' w-40 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://cdn3d.iconscout.com/3d/free/thumb/free-html-5728485-4781249.png?f=webp' alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>
          {/* CSS */}
          <div className=' w-40 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://cdn3d.iconscout.com/3d/free/thumb/free-css-9294881-7578024.png?f=webp' alt='CSS icon' />
            <p className='my-4'>CSS</p>
          </div>
          {/* JavaScript */}
          <div className=' w-40 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png?f=webp' alt='JavaScript icon' />
            <p className='my-4'>JavaScript</p>
          </div>
          {/* React */}
          <div className=' w-40 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://cdn3d.iconscout.com/3d/free/thumb/free-react-9294867-7578010.png' alt='React icon' />
            <p className='my-4'>React JS</p>
          </div>
          {/* React-Redux */}
          <div className=' w-40 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://w7.pngwing.com/pngs/332/110/png-transparent-logo-brand-logo-brand-react-3d-icon.png' alt='React icon' />
            <p className='my-4'>Redux ToolKit</p>
          </div>
          {/* GitHub */}
          <div className=' w-40 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://cdn3d.iconscout.com/3d/free/thumb/free-github-8173947-6491025.png?f=webp' alt='GitHub icon' />
            <p className='my-4'>GitHub</p>
          </div>
          {/* Git */}
          <div className=' w-40 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://cdn3d.iconscout.com/3d/free/thumb/free-git-9294878-7578021.png?f=webp' alt='GitHub icon' />
            <p className='my-4'>Git</p>
          </div>
          {/* Node */}
          <div className=' w-40 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://cdn3d.iconscout.com/3d/free/thumb/free-nodejs-11492982-9325317.png' alt='Node.js icon' />
            <p className='my-4'>Node JS</p>
          </div>
          {/* Tailwind */}
          <div className=' w-40 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://cdn3d.iconscout.com/3d/free/preview/tailwind-css-11492968-9325303@0.png?f=webp&h=700' alt='Tailwind CSS icon' />
            <p className='my-4'>Tailwind</p>
          </div>
          {/* Debugging */}
          <div className=' w-40 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://cdn3d.iconscout.com/3d/premium/thumb/debugging-9863778-8000490.png?f=webp' alt='Debugging icon' />
            <p className='my-4'>Debugging</p>
          </div>
          {/* Package */}
          <div className=' w-40 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://cdn3d.iconscout.com/3d/free/thumb/free-npm-9294882-7578025.png?f=webp' alt='Package icon' />
            <p className='my-4'>Package</p>
          </div>
          {/* Auth 0  */}
          <div className=' w-40 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://seeklogo.com/images/A/auth0-logo-03B0DBA304-seeklogo.com.png' alt='Package icon' />
            <p className='my-4'>Auth 0</p>
          </div>
          {/* Firebase */}
          <div className=' w-40 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://cdn.iconscout.com/icon/free/png-256/free-firebase-3521427-2944871.png?f=webp' alt='Package icon' />
            <p className='my-4'>Firebase</p>
          </div>
          {/* AWS */}
          <div className=' w-40 hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://cdn3d.iconscout.com/3d/free/thumb/free-amazon-web-services-8074662-6507782.png?f=webp' alt='Package icon' />
            <p className='my-4'>AWS</p>
          </div>
         
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;
