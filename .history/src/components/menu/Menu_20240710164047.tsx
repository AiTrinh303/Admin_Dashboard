
import {Link} from 'react-router-dom'
import './menu.scss'
import {menu} from '../../data'


const Menu = () => {
  return (
    <div className='menu'>
      {menu.map((item) => (
        <div className="item" key={item.id}>
        <span className="title">{item.title}</span>
        {item.listItems.map(listItem => (
          <Link to ='/' className='listItem' key={listItem}>
          <img src={"/home.svg"} alt="home" />
          <span className="listItemTitle">Home</span>
        </Link>
        ))}
        </div>
      ))} 
    </div>
  )
}

export default Menu
