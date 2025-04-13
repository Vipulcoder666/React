import React, { useLayoutEffect, useState } from 'react'
import Banner from './../assets/Banner.jpeg'
import { VscLibrary, VscSearch } from "react-icons/vsc";
function Search() {

    // const tags=[
    //   {
    //     id:1,
    //     name:'All',
    //   },
    //   {
    //     id:2,
    //     name:'React',
    //   },
    //   {
    //     id:3,
    //     name : 'React Native',
    //   },
    //   {
    //     id:4,
    //     name : 'Angular',
    //   },
    //   {
    //     id:5,
    //     name : UI/UX,
    //   },
    // ]
    // const [activeIndex,setActiveIndex]=useState

  return (
    <div className='flex item-center justify-center mt-8 flex-col  px-[70] md:px-[150px]'>
        <img src={Banner} alt="banner" className='rounded-2xl'/>
        <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
          <VscSearch className='text-[20px] text-gray-400'/>
          <input type="text" placeholder='Search' className='outline-none ml-2'/>
        </div>

          {/* <div>
            {tags.map((item)=>{
              <ul>
                <li>{item.name}</li>
              </ul>
            })}
          </div> */}
         
    </div>
  )
}

export default Search