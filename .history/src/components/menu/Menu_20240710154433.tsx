import React from 'react'
import {Link} from 'react-router-dom'
import './menu.scss'


const Menu = () => {
  return (
    <div className='menu'>
      <div className="item">
        <span className="title">MAIN</span>
        <Link>
          <img src="/home.svg" alt="home" />
          <span className="listItemTitle">Home</span>
        </Link>
      </div>
    </div>
  )
}

export default Menu
