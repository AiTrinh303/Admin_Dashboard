import React from 'react'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src="icons8-logo.svg" alt="logo" />
        <span>JO JO</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search" className="container" />
        <img src="/app.svg" alt="app" className="container" />
        <img src="/expand.svg" alt="expand" className="container" />
        <div className="notification"></div>
        <div className="user"></div>
        <img src="/setting.svg" alt="" className="container" />
      </div>
    </div>
  )
}

export default Navbar
