import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white w-full text-black p-4 flex flex-col md:flex-row justify-between items-center cursor-pointer">
      <Link href="/">
        <h1 className="text-2xl md:text-3xl font-bold ml-0 md:ml-16 mb-4 md:mb-0">usMan.</h1>
      </Link>
      <ul className="flex gap-4 md:gap-7 text-lg md:text-[21px] font-medium font-title text-[#181717]">
        <li>Work</li>
        <Link href="about">
          <li>About</li>
        </Link>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
