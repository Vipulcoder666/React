import React from "react";
import linkedIn from "./Assets/linkedIn.jpeg";
import vipul from "./Assets/vipul.jpg";
import Parking from "./Assets/Parking.avif";
import Travel from "./Assets/Travel.avif";
import Portfolio from "./Assets/Portfolio.avif";
function App() {

  return (
    <div class="bg-black text-white">

      <nav className="bg-gradient-to-l from-pink-500 to-blue-500 text-white h-12 flex items-center justify-between px-10">
        <div class="font-bold text-3xl hidden md:inline">Vipul</div>
        <div className="space-x-6">
          <a href="#">Home</a>
          <a href="#">About us</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <div>
        <div className="flex items-center justify-center my-10">
          <img src={linkedIn} alt="Vipul" className="sm:h-40 w-40 md:h-50 w-50 rounded-full" />
        </div>
      
        <h1 className="text-2xl font-bold flex items-center justify-center">I'm Vipul Shrivastav, Web Developer</h1>

        <p className="flex items-center justify-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis.</p>

        <div class="flex items-center justify-center space-x-16 my-7">
          <button class="bg-gradient-to-r from-slate-800 to-emerald-700 rounded-lg h-8 w-24">Contact me</button>

          <button class="bg-gradient-to-r from-yellow-800 to-pink-500 rounded-lg h-8 w-24">
            <a href="https://drive.google.com/file/d/1RJ01nIO23TUA-RwmeSgWJvFqXFE5mSwG/view?usp=drive_link" target="_blank">Resume</a>
          </button>
        </div>
      </div>

        <div>
          <h1 className=" mt-36 text-4xl font-bold flex items-center justify-center">About Me</h1>
          <div flex flex-col md:flex-row items-center md:space-x-12>
            <img src={vipul} alt="" className="h-60 w-56 my-12 mx-20"/>
            <div className="flex-1">
              <p>I am a passionate frontend developer with a focus on modern and responsive UI. with a strong foundation in frontend technologies, proficient in JavaScript and React.js.</p>
            </div>
          </div>
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
              
              <p className="mt-2 mx-2 text-yellow-100">I have created a Parking Management System as my Mini Project, It is constructed on C programming.</p>

              <button className="mx-20 my-5 bg-gradient-to-r from-yellow-800 to-pink-500 rounded-lg h-8 w-24">GitHub</button>
            </div>

            {/* Travel Agency Website */}
            <div class=" bg-gray-900 h-96 w-72 rounded-2xl">
            <img src={Travel} alt="" className="h-36 w-72 mx-auto"/>
              <h1 className=" mt-2 mx-1 text-2xl font-bold bg-gradient-to-r  from-pink-500 to-blue-500 bg-clip-text text-transparent">Travel Agency Website</h1>

              <p className="mt-10 mx-2 text-yellow-100">I have created a travel agency website which is based on HTML,CSS and JavaScript. </p>

              <button className="mx-20 my-5 bg-gradient-to-r from-yellow-800 to-pink-500 rounded-lg h-8 w-24">
              <a href="https://github.com/Vipulcoder666/TopperWorld/tree/main/Landing_Page/html"target="_blank">GitHub</a>
              </button>
            </div>

            

            {/* Personal Portfolio */}
            <div class=" bg-gray-900 h-96 w-72 rounded-2xl">
            <img src={Portfolio} alt="" className="h-36 w-72 mx-auto"/>
              <h1 className=" mt-2 mx-1 text-2xl font-bold bg-gradient-to-r  from-pink-500 to-blue-500 bg-clip-text text-transparent">Personal Portfolio</h1>

              <p className="mt-10 mx-2 text-yellow-100">I have created a Portfolio website which is based on HTML,CSS and JavaScript.</p>

              <button className="mx-20 my-5 bg-gradient-to-r from-yellow-800 to-pink-500 rounded-lg h-8 w-24">GitHub</button>
            </div>
          </div>
        </div>

    </div>
  )
}

export default App
