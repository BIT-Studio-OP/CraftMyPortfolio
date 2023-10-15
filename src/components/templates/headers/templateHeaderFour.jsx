import { useState } from "react";
import "../../../fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

function TemplateHeaderFour() {
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
    <nav className={classes.navParent}>
      <h1 className={classes.h1}><span className={classes.craft}>Craft</span>My<span className={classes.portfolio}>Portfolio</span></h1>
      <ul className={classes.menu}>
        <li className={classes.MenuItem}>
          <a href="/" className={classes.a}>
            Home
          </a>
        </li>
        <li className={classes.MenuItem}>
          <a href="/templates" className={classes.a}>
            Templates
          </a>
        </li>
        <li className={classes.MenuItem}>
          <a className={classes.a}>Account</a>
        </li>
        <li className={classes.MenuItem}>
          <a href="/details" className={classes.a}>
            Details
          </a>
        </li>
        <li className={`${classes.MenuItem} projects-button`}>
          <a className={classes.a}>My Projects</a>
        </li>
        <li className={classes.MenuItem} onClick={signOutUser}>
          <a className={classes.a}>Log Out</a>
        </li>
      </ul>
      {/* Responsive menu for smaller screens */}
      <div className={classes.resMenuParent}>
        <FontAwesomeIcon
          className={classes.bars}
          icon={faBars}
          onClick={handleIconClick}
        />
        <ul className={showMenu ? classes.resMenu : classes.resMenuHide}>
          <li className={classes.MenuItem}>
            <a href="/" className={classes.a}>
              Home
            </a>
          </li>
          <li className={classes.MenuItem}>
            <a href="/templates" className={classes.a}>
              Templates
            </a>
          </li>
          <li className={classes.MenuItem}>
            <a href="/details" className={classes.a}>
              Details
            </a>
          </li>
          <li className={classes.MenuItem}>
            <a className={classes.a}>Account</a>
          </li>
          <li className={`${classes.MenuItem} projects-button`}>
            <a href="/details" className={classes.a}>
              Details
            </a>
          </li>
          <li className={`${classes.MenuItem} projects-button`}>
            <a className={classes.a}>My Projects</a>
          </li>
          <li className={classes.MenuItem} onClick={signOutUser}>
            <a className={classes.a}>Log Out</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const useStyles = createUseStyles({
  navParent: {
    background:
    "linear-gradient(45deg, #161925 15%, #161925 20%, #FCFCEE 15%, #FCFCEE 100%)",
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
        "&:hover": {
          textDecoration: "underline !important",
          transition: "all 0.3s ease-in-out",
        },
      },
    },
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

export default TemplateHeaderFour;
