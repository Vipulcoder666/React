import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import AboutImage from "../../assets/About.png"; // Make sure this path is correct

function About() {
  return (
    <section
      id="About"
      className="bg-[#12171f] text-white px-6 md:px-20 py-10 my-16 max-w-6xl mx-auto rounded-lg shadow-lg"
    >
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={AboutImage}
            alt="About"
            className="w-80 h-80 object-cover rounded-xl shadow-md" // Slightly larger image
          />
        </div>

        {/* Right: Description */}
        <div className="w-full md:w-1/2 space-y-6">
          {/* Frontend Developer */}
          <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-[#1c2433] hover:scale-[1.03] transition-all duration-300">
            <RiArrowRightSLine className="text-2xl text-[#00FFFF] mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Frontend Developer</h3>
              <p className="text-gray-300 text-sm md:text-base">
                I build responsive and interactive user interfaces using React, Tailwind CSS, and JavaScript. I focus on performance, accessibility, and modern design.
              </p>
            </div>
          </div>

          {/* Backend Developer */}
          <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-[#1c2433] hover:scale-[1.03] transition-all duration-300">
            <RiArrowRightSLine className="text-2xl text-[#00FFFF] mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Backend Developer</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Skilled in building server-side logic using Node.js and Express. I ensure API security, performance, and smooth integration with the frontend.
              </p>
            </div>
          </div>

          {/* Database Developer */}
          <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-[#1c2433] hover:scale-[1.03] transition-all duration-300">
            <RiArrowRightSLine className="text-2xl text-[#00FFFF] mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-1">Database Developer</h3>
              <p className="text-gray-300 text-sm md:text-base">
                Experienced in designing and managing databases like MongoDB and MySQL. I focus on data integrity, speed, and scalability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
