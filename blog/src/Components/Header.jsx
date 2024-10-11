import React from 'react'
import TCS from './../assets/TCS.png'
function Header() {
  return (
    <div className='w-28'>
        <img src={TCS}/>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
        </ul>
        <button>Suscribe</button>
    </div>
  )
}

export default Header