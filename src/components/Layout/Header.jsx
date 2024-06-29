import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../../index.css';
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDiscord
} from 'react-icons/fa';

function Header() {
  const [toggle, setToggle] = useState(false);

  const handleCloseMenu = () => {
    console.log('Close menu');
    setToggle(false); // Close the menu when a menu item is clicked
  };

  return (
    <>
      <div className=' p-3 bg-black'>
        <div className='max-w-[1435px] py-[6px] items-center flex justify-between'>
          <div className="text-2xl font-bold text-slate-300">
            {/* Logo or Brand Name */}
          </div>

          {/* Responsive Menu Toggle */}
          {
            toggle ?
              <AiOutlineClose onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block cursor-pointer" />
              :
              <AiOutlineMenu onClick={() => setToggle(!toggle)} className="text-white text-2xl md:hidden block cursor-pointer" />
          }

          {/* Mobile Menu */}
          <ul className={`duration-500 md:hidden text-white bg-black fixed top-[54px] bottom-0 left-0 right-0 w-full flex flex-col justify-center items-center font-bold text-xl gap-4 ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
            <li className="hover:text-white font-bold glow-text cursor-pointer">
              <Link
                to="/"
                onClick={handleCloseMenu} // Close the menu when a menu item is clicked
              >
                Home
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text cursor-pointer">
              <Link
                to="/about-us"
                onClick={handleCloseMenu} // Close the menu when a menu item is clicked
              >
                About Me
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text cursor-pointer">
              <Link
                to="/skills"
                onClick={handleCloseMenu} // Close the menu when a menu item is clicked
              >
                Skills
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text cursor-pointer">
              <Link
                to="/contact"
                onClick={handleCloseMenu} // Close the menu when a menu item is clicked
              >
                Contact Me
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text cursor-pointer">
              <Link
                to="/projects"
                onClick={handleCloseMenu} // Close the menu when a menu item is clicked
              >
                Projects
              </Link>
            </li>
          </ul>

          {/* Main Navigation Menu */}
          <ul className="hidden md:flex text-white gap-10 text-xl font-semibold cursor-pointer">
            <li className="hover:text-white  font-bold glow-text hover:scale-110">
              <Link
                to="/"
                onClick={handleCloseMenu} // Close the menu when a menu item is clicked
              >
                Home
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text hover:scale-110">
              <Link
                to="/about-us"
                onClick={handleCloseMenu} // Close the menu when a menu item is clicked
              >
                About Me
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text hover:scale-110">
              <Link
                to="/skills"
                onClick={handleCloseMenu} // Close the menu when a menu item is clicked
              >
                Skills
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text hover:scale-110">
              <Link
                to="/contact"
                onClick={handleCloseMenu} // Close the menu when a menu item is clicked
              >
                Contact Me
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text hover:scale-110">
              <Link
                to="/projects"
                onClick={handleCloseMenu} // Close the menu when a menu item is clicked
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
        {/* Social Media Links */}
      </div>
    </>
  );
}

export default Header;
