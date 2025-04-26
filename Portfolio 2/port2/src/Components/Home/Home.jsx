import React from 'react';
import Avatar from "../../assets/Avatar.png";

function Home() {
  return (
    <div className="min-h-screen bg-[#1b1e32] text-white flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10 md:py-20">
      
      {/* Left Content */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-center md:text-left">
        <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tighter">
          Hello! I am Vipul
        </h1>
        <p className="mt-4 text-gray-300 text-base md:text-lg">
          Building logic into life—one line of code at a time.
        </p>
        <a 
          href="https://drive.google.com/file/d/1RJ01nIO23TUA-RwmeSgWJvFqXFE5mSwG/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-[#465697] hover:bg-[#5c6fb3] text-white font-semibold py-2 px-5 md:py-3 md:px-7 rounded-full text-sm md:text-lg transition-all duration-300 hover:scale-105"
        >
          Resume
        </a>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img src={Avatar} alt="Vipul Avatar" className="w-3/4 md:w-4/5 max-w-xs md:max-w-md object-cover" />
      </div>

    </div>
  );
}

export default Home;
