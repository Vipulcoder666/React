import React from "react";
import image from "./Assets/peter.jpg";
import lap from "./Assets/lap.jpeg";
import linkedIn from "./Assets/linkedIn.jpeg";
function App() {

  return (
  <div class="bg-white dark:bg-black">


    <nav className="bg-gradient-to-l from-pink-500 to-blue-500 text-white h-12 flex items-center justify-between px-10">
      {/* <div className="flex items-center justify-center space-x-6"> */}
      <div>Logo</div>
      <div className="space-x-6">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">Contact</a>
      </div>
    </nav>

    <div className="flex items-center justify-center my-10">
      <img src={linkedIn} alt="Vipul" className="sm:h-40 w-40 md:h-50 w-50 rounded-full"/>
    </div>

    <div class="text-white">
      <h1 className="text-2xl font-bold flex items-center justify-center">I'm Vipul Shrivastav, Web Developer</h1>

      <p className="flex items-center justify-center text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quis.</p>

      <div class="flex items-center justify-center space-x-16">
        <button class="bg-gradient-to-r from-slate-800 to-emerald-700 rounded-lg h-8 w-24">Contact me</button>

        <button class="bg-gradient-to-r from-yellow-800 to-pink-500 rounded-lg h-8 w-24">
          <a href="https://drive.google.com/file/d/1RJ01nIO23TUA-RwmeSgWJvFqXFE5mSwG/view?usp=drive_link" target="_blank">Resume</a>
        </button>
      </div>
      

      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, quos assumenda quasi ullam impedit accusantium nulla sit blanditiis odio officiis?</p>
    </div>


  </div>
  )
}

export default App
