import React from "react";
import image from "./Assets/peter.jpg";
import lap from "./Assets/lap.jpeg";
import linkedIn from "./Assets/linkedIn.jpeg";
import Vipul from "./Assets/Vipul.jpg";
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
          <h1 className="text-4xl font-bold flex items-center justify-center">About Me</h1>
          <div flex flex-col md:flex-row items-center md:space-x-12>
            <img src={Vipul} alt="" className="h-60 w-56 my-12 mx-20"/>
            <div className="flex-1">
              <p>I am a passionate frontend developer with a focus on modern and responsive UI. with a strong foundation in frontend technologies, proficient in JavaScript and React.js.</p>
            </div>
          </div>
        </div>

    </div>
  )
}

export default App
