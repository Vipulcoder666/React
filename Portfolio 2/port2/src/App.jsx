import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/Aboutme/About'
import Experience from './Components/Experience/Experience'
import Project from './Components/Project/Project'


function App() {
  return <div className="bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar/>
    <Home/>
    <About/>
    <Experience/>
    <Project/>
  </div>
  
}

export default App
