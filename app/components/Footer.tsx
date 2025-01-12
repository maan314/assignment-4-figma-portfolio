import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <div className="bg-white w-full text-black p-4 flex flex-col md:flex-row justify-between items-center">
      <Link href="#">
        <h1 className="text-lg md:text-[21px] font-medium font-title text-[#2429AF] text-center md:text-left">
          Muhammad Usman ⏤ 2024
        </h1>
      </Link>
      <ul className="flex gap-4 md:gap-8 mt-4 md:mt-0 cursor-pointer text-lg md:text-[21px] font-medium font-title text-[#181717]">
        <li>Instagram</li>
        <li>LinkedIn</li>
        <li>Github</li>
      </ul>
    </div>
  );
}

export default Footer;
