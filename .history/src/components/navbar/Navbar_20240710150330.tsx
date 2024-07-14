import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="iconlogo.svg" alt="logo" />
        <span>AI TRINH</span>
      </div>
      <div className="icons">
        <img src="" alt="" className="container" />
        <img src="" alt="" className="container" />
        <img src="" alt="" className="container" />
        <div className="notification"></div>
        <img src="" alt="" className="container" />
      </div>

    </div>
  )
}

export default Navbar
