import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between text-white px-6 py-4 bg-[#171d32]">
      {/* Logo */}
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      {/* Hamburger icon - visible on mobile */}
      <div className="text-2xl cursor-pointer md:hidden" onClick={() => setMenu(!menu)}>
        <i className="ri-menu-line"></i>
      </div>

      {/* Menu items */}
      <ul
        className={`${
          menu ? 'block' : 'hidden'
        } w-full md:flex md:items-center md:w-auto md:gap-6 mt-4 md:mt-0 text-center font-semibold`}
      >
        <li className="py-2 md:py-0">
          <a href="#About" className="hover:text-red-400">About</a>
        </li>
        <li className="py-2 md:py-0">
          <a href="#Experience" className="hover:text-red-400">Experience</a>
        </li>
        <li className="py-2 md:py-0">
          <a href="#Projects" className="hover:text-red-400">Projects</a>
        </li>
        <li className="py-2 md:py-0">
          <a href="#Contact" className="hover:text-red-400">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
