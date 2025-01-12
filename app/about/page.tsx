import React from 'react';
import Image from 'next/image';
import Profile from '@/public/images/profile.jpg';
import { GoArrowRight } from 'react-icons/go';

function About() {
  return (
    <>
      <div className="flex flex-col md:flex-row m-10 md:m-20 justify-between">
        <div className="flex flex-col gap-6 md:gap-10 w-full md:w-[40%]">
          <h1 className="text-4xl md:text-5xl font-title">
            Hi, I'm <br /> Muhammad Usman, <br />
            Web Developer
          </h1>
          <p className="text-base md:text-lg font-title text-[#606060]">
            Highly motivated and detail-oriented web developer with over a year of experience in developing responsive websites and applications.
          </p>
          <p className="text-base md:text-lg text-[#606060]">
            Passionate about creating robust and user-friendly web applications. Proficient in front-end technologies like HTML, CSS, JavaScript, and frameworks such as React and Next.js. <br />
            Racing to the best technologies like Agentic AI.
          </p>
        </div>
        <div className="w-full md:w-[40%] h-[300px] md:h-[400px] overflow-hidden mt-8 md:mt-0">
          <Image src={Profile} alt="Profile Image" width={380} height={600} className="object-cover" />
        </div>
      </div>

      <div className="flex flex-col gap-12 mx-10 md:mx-20 my-16 md:my-32 w-full md:w-[50%]">
        <div className="flex gap-6 md:gap-20">
          <h1 className="text-base md:text-lg font-medium underline w-[30%] font-inter text-[#181717]">Main Projects</h1>
          <p className="text-base md:text-lg w-[70%] font-normal font-inter text-[#181717]">
            Currency Convertor, Portfolio, Animated Website, Word Counter,
          </p>
        </div>

        <div className="flex gap-6 md:gap-20">
          <h1 className="text-base md:text-lg font-medium underline w-[30%] font-inter text-[#181717]">Main Skills</h1>
          <p className="text-base md:text-lg w-[70%] font-normal font-inter text-[#181717]">
            HTML, CSS, Typescript, JavaScript, ReactJs, Next.js, Tailwind,
          </p>
        </div>
      </div>

      <hr className="w-[88%] mx-auto h-0.5 bg-[#181717]" />

      <div className="flex flex-col md:flex-row mx-10 md:mx-20 justify-between my-10 md:my-20">
        <h1 className="text-xl md:text-2xl flex font-semibold font-title">
          I am Thrilled to answer to <br /> your next project{' '}
          <span className="mt-2 md:mt-10 -ml-10 md:-ml-20 w-[1.5em] h-[1.5em] font-extrabold">
            <GoArrowRight />
          </span>
        </h1>

        <div className="mt-8 md:mt-0 mr-4 md:mr-10">
          <h2 className="text-base md:text-lg font-semibold mb-2 md:mb-4 font-title">usmanqaisrani110@gmail.com</h2>
          <p className="underline cursor-pointer font-inter">View resume</p>
        </div>
      </div>
    </>
  );
}

export default About;
