import React from 'react'
import Banner from './../assets/Banner.jpeg'
import { VscSearch } from "react-icons/vsc";
function Search() {
  return (
    <div className='flex item-center justify-center mt-8 flex-col  px-[70] md:px-[150px]'>
        <img src={Banner} alt="banner" className='rounded-2xl'/>
        <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
          <VscSearch className='text-[20px] text-gray-400'/>
          <input type="text" placeholder='Search' className='outline-none ml-2'/>
        </div>
    </div>
  )
}

export default Search