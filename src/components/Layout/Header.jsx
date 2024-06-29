import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import '../../index.css';

function Header() {
  const [toggle, setToggle] = useState(false);

  const handleCloseMenu = () => {
    setToggle(false);
  };

  return (
    <>
      <div className='relative p-3 bg-black'>
        <div className='max-w-[1435px] py-[6px] items-center flex justify-between'>
          <div className="text-2xl font-bold text-slate-300">
            {/* Logo or Brand Name */}
          </div>

          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(false)}
              className="text-white text-2xl md:hidden block cursor-pointer z-50"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(true)}
              className="text-white text-2xl md:hidden block cursor-pointer z-50"
            />
          )}

          {/* Mobile Menu */}
          <ul
            className={`duration-500 md:hidden text-white bg-black fixed top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center font-bold text-xl gap-4 z-40 transform ${
              toggle ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            <li className="hover:text-white font-bold glow-text cursor-pointer">
              <Link to="/" onClick={handleCloseMenu}>
                Home
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text cursor-pointer">
              <Link to="/about-us" onClick={handleCloseMenu}>
                About Me
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text cursor-pointer">
              <Link to="/skills" onClick={handleCloseMenu}>
                Skills
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text cursor-pointer">
              <Link to="/contact" onClick={handleCloseMenu}>
                Contact Me
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text cursor-pointer">
              <Link to="/projects" onClick={handleCloseMenu}>
                Projects
              </Link>
            </li>
          </ul>

          {/* Main Navigation Menu */}
          <ul className="hidden md:flex text-white gap-10 text-xl font-semibold cursor-pointer">
            <li className="hover:text-white font-bold glow-text hover:scale-110">
              <Link to="/" onClick={handleCloseMenu}>
                Home
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text hover:scale-110">
              <Link to="/about-us" onClick={handleCloseMenu}>
                About Me
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text hover:scale-110">
              <Link to="/skills" onClick={handleCloseMenu}>
                Skills
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text hover:scale-110">
              <Link to="/contact" onClick={handleCloseMenu}>
                Contact Me
              </Link>
            </li>
            <li className="hover:text-white font-bold glow-text hover:scale-110">
              <Link to="/projects" onClick={handleCloseMenu}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
