import { useState } from "react";
import "../../fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

function Header() {
  // State variable to control the visibility of the responsive menu
  const [showMenu, setShowMenu] = useState(false);
  const classes = useStyles();
  // Function to handle the click event on the bars icon
  const handleIconClick = () => {
    setShowMenu(!showMenu);
  };
  const auth = getAuth();
  const signOutUser = () => {
    auth.signOut();
  };

  return (
    <>
        <nav className="nav-parent">
            <h1>Craft My Portfolio</h1>
            <ul className="menu">
                <li><a href="/">Home</a></li>
                <li><a href="/templates">Templates</a></li>
                <li><a>Account</a></li>
                <li className="projects-button"><a>My Projects</a></li>
                <li className="projects-button"><a href='/form'>Details Form</a></li>
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

const useStyles = createUseStyles({
  navParent: {
    backgroundColor: "var(--primary-colour)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
  },
  h1: {
    fontSize: "48px !important",
    fontWeight: 600,
    color: "white",
    fontFamily: "Delicious Handrawn, cursive",
  },
  ul: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    listStyle: "none",
    alignItems: "center",
    "& li": {
      "& a": {
        fontFamily: "Delicious Handrawn, cursive !important",
      },
    },
  },
  menu: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1rem",
    listStyle: "none",
    alignItems: "center",
    "& li": {
      "& a": {
        fontFamily: "Raleway, sans-serif !important",
        fontWeight: 200,
        "&:hover": {
          textDecoration: "underline !important",
          transition: "all 0.3s ease-in-out",
        }
      }
    }
  },
  resMenuParent: {
    display: "none",
  },
  resMenu: {
    display: "none",
  },
  resMenuHide: {
    display: "none",
  },
  a: {
    textDecoration: "none",
    color: "white",
    fontSize: "1.2rem",
    fontWeight: 600,
    transition: "all 0.1s ease-in-out",
    borderRadius: "0.5rem",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "var(--white)",
      color: "var(--accent-colour)",
    },
  },
  bars: {
    display: "none",
  },
  "@media screen and (orientation: portrait)": {
    h1: {
      fontSize: "20px !important",
      color: "var(--text-colour)",
    },
    menu: {
      display: "none",
    },
    resMenuParent: {
      display: "block",
    },
    resMenu: {
      display: "block",
      position: "absolute",
      padding: "1rem",
      top: "3rem",
      right: "1rem",
      backgroundColor: "var(--primary-colour)",
      borderRadius: "5px",
      border: "2px solid var(--text-colour)",
    },
    bars: {
      display: "block",
      color: "var(--text-colour)",
      fontSize: "2rem",
      cursor: "pointer",
    },
  },
});

export default Header;
