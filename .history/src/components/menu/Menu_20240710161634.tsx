
import {Link} from 'react-router-dom'
import './menu.scss'


const Menu = () => {
  return (
    <div className='menu'>
      <div className="item">
        <span className="title">MAIN</span>
        <Link to ='/'>
          <img src="/home.svg" alt="home" />
          <span className="listItemTitle">Home</span>
        </Link>
        <Link to ='/'>
          <img src="/prof.svg" alt="home" />
          <span className="listItemTitle">Home</span>
        </Link>
      </div>
    </div>
  )
}

export default Menu
