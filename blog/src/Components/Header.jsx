import React from 'react'
import TCS from './../assets/TCS.png'
import { IoLogoYoutube} from "react-icons/io5";
function Header() {
  return (
    <div className='flex justify-between items-center'>
        <img src={TCS} className='w-[130px]'/>
        <ul className='flex gap-4 md:gap-14'>
            <li className='hover:font-bold cursor-pointer'>Home</li>
            <li className='hover:font-bold cursor-pointer'>About us</li>
            <li className='hover:font-bold cursor-pointer'>Contact</li>
        </ul>
        <button className='bg-red-500 rounded-full text-white flex'>Suscribe<IoLogoYoutube /></button>
    </div>
  )
}

export default Header