import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getAuth } from "firebase/auth"
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
  // State variable to control the visibility of the responsive menu
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  // Function to handle the click event on the bars icon
  const handleIconClick = () => {
    setShowMenu(!showMenu);
  };
const auth = getAuth()
    const signOutUser = () => {
        auth.signOut()
    }

  return (
    <>
        <nav className="nav-parent">
            <h1>Craft My Portfolio</h1>
            <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/templates">Templates</a></li>
                <li><a>Account</a></li>
                <li className="projects-button"><a>My Projects</a></li>
                <li onClick={signOutUser}><a>Log Out</a></li>
            </ul>
            {/* Responsive menu for smaller screens */}
            <div className='res-menu-parent'>
              <FontAwesomeIcon className='bars' icon={faBars} onClick={handleIconClick} />
              <ul className={ showMenu ? 'res-menu' : 'res-menu-hide'}>
                  <li><a>Home</a></li>
                  <li><a>Templates</a></li>
                  <li><a>Account</a></li>
                  <li className="projects-button"><a>My Projects</a></li>
                  <li onClick={signOutUser}><a>Log Out</a></li>
              </ul>
            </div>
        </nav>
    </>
  )
}

export default Header
