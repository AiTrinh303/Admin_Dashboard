
import './navbar.scss'

const Navbar = () => {
  return (
    <>
      <div className='navbar'>
        <div className="logo">
          <img src="icons8-logo.svg" alt="logo" />
          <span>JO JO</span>
        </div>
  
        <div className="icons">
          <img src="/search.svg" alt="search" className="container icon" />
          <img src="/app.svg" alt="app" className="container icon" />
          <img src="/expand.svg" alt="expand" className="container icon" />
          <div className="notification">
            <img src="/notifications.svg" alt="notification" />
            <span>1</span>
          </div>
          <div className="user">
            <img src="/profile.svg" alt="profile" />
            <span>Ai</span>
          </div>
          <img src="/settings.svg" alt="" className="container" />
        </div>
        
      </div>

      <hr />
    </>
  )
}

export default Navbar
