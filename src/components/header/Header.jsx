import React, {useState} from 'react'
import "./nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {

  const [showMenu, setShowMenu] = useState(false);
  const handleIconClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
        <nav className="nav-parent">
            <h1>Craft My Portfolio</h1>
            <ul className="menu">
                <li><a>Home</a></li>
                <li><a>Templates</a></li>
                <li><a>Account</a></li>
                <li className="projects-button"><a>My Projects</a></li>
            </ul>
            <div className='res-menu-parent'>
              <FontAwesomeIcon className='bars' icon={faBars} onClick={handleIconClick} />
              <ul className={ showMenu ? 'res-menu' : 'res-menu-hide'}>
                  <li><a>Home</a></li>
                  <li><a>Templates</a></li>
                  <li><a>Account</a></li>
                  <li className="projects-button"><a>My Projects</a></li>
              </ul>
            </div>
        </nav>
    </>
  )
}

export default Header
