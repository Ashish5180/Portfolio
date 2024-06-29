import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-screen mx-auto py-16 px-4 flex flex-col items-center text-gray-300 bg-black">
        
        <div className="flex justify-center space-x-6 my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
        <p className="py-4 text-center max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perspiciatis ipsa dolorum laudantium doloremque. Sed pariatur quia blanditiis exercitationem nesciunt!
        </p>
    </div>
  );
}

export default Footer;
