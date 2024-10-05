import React from "react";
import linkedIn from "./Assets/linkedIn.jpeg";
import vipul from "./Assets/vipul.jpg";
import Parking from "./Assets/Parking.avif";
import Travel from "./Assets/Travel.avif";
import Portfolio from "./Assets/Portfolio.avif";
import { BiEnvelope } from "react-icons/bi";
import { Fa6, FaPhone } from "react-icons/fa6";
function App() {

  return (
    <div class="bg-black text-white">

      <nav className="bg-gradient-to-l from-pink-500 to-blue-500 text-white h-12 flex items-center justify-between px-10">
        <div class="font-bold text-3xl hidden md:inline">Vipul</div>
        <div className="space-x-6 ">
          <a href="#" className="hover:text-amber-950">Home</a>
          <a href="#" className="hover:text-amber-950">Contact</a>
          <a href="#" className="hover:text-amber-950">About us</a>
        </div>
      </nav>

      <div>
        <div className="flex items-center justify-center my-10">
          <img src={linkedIn} alt="Vipul" className="sm:h-40 w-40 md:h-50 w-50 rounded-full" />
        </div>
      
        <h1 className="text-2xl font-bold flex items-center justify-center">I'm Vipul Shrivastav, Web Developer</h1>

        <p className="flex my-2 items-center justify-center text-xl">Empowering ideas through code</p>

        <div class="flex items-center justify-center space-x-16 my-7">
          <button class="bg-gradient-to-r from-slate-800 to-emerald-700 rounded-lg h-8 w-24">Contact me</button>

          <button class="bg-gradient-to-r from-yellow-800 to-pink-500 rounded-lg h-8 w-24">
            <a href="https://drive.google.com/file/d/1RJ01nIO23TUA-RwmeSgWJvFqXFE5mSwG/view?usp=drive_link" target="_blank">Resume</a>
          </button>
        </div>
      </div>

        <div className="flex flex-col items-center justify-center md:flex-row gap-10 w-full p-10">
          <div><img src={vipul} alt="" className="h-60 w-56 my-12 md:mx-20"/></div>
          <div className="w-96"><p className="text-justify">I am a passionate frontend developer with a focus on modern and responsive UI. with a strong foundation in frontend technologies, proficient in JavaScript and React.js.</p></div>
        </div>

        {/* My Education */}
        <div class="flex-row ">
          <h1 className=" mt-40 text-4xl font-bold flex items-center justify-center my-7">My Education</h1>
          <div className="inline-grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12 md:mx-28 lg:mx-40  gap-8  mb-10 ">
            {/* BTech */}
            <div class=" bg-gray-900 h-80 w-72 rounded-2xl ">
              <h1 className="mt-2 text-2xl font-bold  bg-gradient-to-r  from-pink-500 to-blue-500 bg-clip-text text-transparent ">Bachelor of Technology</h1>
              <p className="mt-12 text-yellow-100">Currently I am persuing B.Tech (CSE) from Maharana Institute Of Professional Studies, Kanpur, Batch (2022-26).</p>
            </div>
            {/* Intermediate */}
            <div class="bg-gray-900 h-80 w-72 rounded-2xl">
              <h1 className="mt-2 text-2xl font-bold  bg-gradient-to-r  from-pink-500 to-blue-500 bg-clip-text text-transparent">Intermediate</h1>

              <p className="mt-12 text-yellow-100">I did my Intermediate from UP board english medium with 69 percentage.</p>
            </div>
            {/* Highschool */}
            <div class=" bg-gray-900 h-80 w-72 rounded-2xl">
              <h1 className=" mt-2 text-2xl font-bold bg-gradient-to-r  from-pink-500 to-blue-500 bg-clip-text text-transparent">Highschool</h1>

              <p className="mt-12 text-yellow-100">I did my Highschool from CBSE board with 72.2 percentage.</p>
            </div>
          </div>
        </div>

        {/* My Projects */}
        <div class="flex-row mt-40">
          <h1 className="text-4xl font-bold flex items-center justify-center my-7">My Projects</h1>
          <div className="inline-grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-12 md:mx-28 lg:mx-40  gap-8  mb-10 ">
            {/* Parking Management System */}
            <div class="bg-gray-900 h-96 w-72 rounded-2xl ">
            <img src={Parking} alt="Parking" className="h-36 w-72 mx-auto"/>
              <h1 className=" mt-2 mx-1 text-2xl font-bold bg-gradient-to-r  from-pink-500 to-blue-500 bg-clip-text text-transparent">Parking Management System</h1>
              
              <p className="mt-0.5 mx-2 text-yellow-100">I have created a Parking Management System as my Mini Project, It is constructed on C programming.</p>

              <button className="mx-20 my-1 bg-gradient-to-r from-yellow-800 to-pink-500 rounded-lg h-8 w-24">
                <a href="https://github.com/Vipulcoder666/Projects" target="_blank">GitHub</a>
              </button>
            </div>

            {/* Travel Agency Website */}
            <div class=" bg-gray-900 h-96 w-72 rounded-2xl">
            <img src={Travel} alt="" className="h-36 w-72 mx-auto"/>
              <h1 className=" mt-2 mx-1 text-2xl font-bold bg-gradient-to-r  from-pink-500 to-blue-500 bg-clip-text text-transparent">Travel Agency Website</h1>

              <p className="mt-3 mx-2  text-yellow-100">I have created a travel agency website which is based on HTML,CSS and JavaScript. </p>

              <button className="mx-20 my-3 bg-gradient-to-r from-yellow-800 to-pink-500 rounded-lg h-8 w-24">
              <a href="https://github.com/Vipulcoder666/TopperWorld/tree/main/Landing_Page/html"target="_blank">GitHub</a>
              </button>
            </div>

            

            {/* Personal Portfolio */}
            <div class=" bg-gray-900 h-96 w-72 rounded-2xl">
            <img src={Portfolio} alt="" className="h-36 w-72 mx-auto"/>
              <h1 className=" mt-2 mx-1 text-2xl font-bold bg-gradient-to-r  from-pink-500 to-blue-500 bg-clip-text text-transparent">Personal Portfolio</h1>

              <p className="mt-10 mx-2 text-yellow-100">I have created a Portfolio website which is based on HTML,CSS and JavaScript.</p>

              <button className="mx-20 my-5 bg-gradient-to-r from-yellow-800 to-pink-500 rounded-lg h-8 w-24">
                <a href="https://github.com/Vipulcoder666/React/tree/main/First"target="_blank">GitHUb</a>
              </button>
            </div>
          </div>
        </div>

        {/* Last Page */}
        <div class="flex-row mt-40">
          <h1 className="text-4xl font-bold flex items-center justify-center my-7">Contact Me</h1>
        
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div>
            <h1 className=" mx-32 text-xl text-green-400">Let's talk</h1>
            <p className="mx-32 ">I'm open to talk about Front-end developement.</p>
            <br />
            
            {/* <FaPhone className="mx-32 my-4"/> */}
            <div className="ml-24 flex flex-row gap-5">
              <BiEnvelope/>
              <a href="mailto:shrivastav.vipul252@gmail.com"></a>
            </div>

            <div className="ml-24 flex flex-row gap-5">
              <FaPhone/>
              <a href="#">7897516265</a>
            </div>
          </div>

          <div>
            <form className="space-y-4 grid ">
              <div>
                <label htmlFor="name">Your name:</label>
                <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" placeholder="enter your name"/>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">Email:</label>
                <input type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" placeholder="enter your email"/>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">Message: </label>
                <textarea type="text" className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400" placeholder="enter your message"/>
              </div>
              <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>
          </div>
        </div>
        </div>

    </div>
  )
}

export default App