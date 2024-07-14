import React from 'react'
import {Link} from 'react-router-dom'
import './menu.scss'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu'>
      <div className="item">
        <span className="title">MAIN</span>
        <Link>
          <img src="/h" alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Menu