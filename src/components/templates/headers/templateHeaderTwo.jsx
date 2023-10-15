import { useState } from "react";
import "../../../fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

function TemplateHeaderTwo() {
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
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1080' height='100' preserveAspectRatio='none' viewBox='0 0 1080 100'%3E%3Cg mask='url(%22%23SvgjsMask1026%22)' fill='none'%3E%3Crect width='1080' height='100' x='0' y='0' fill='%230e2a47'%3E%3C/rect%3E%3Cpath d='M 0,24 C 43.2,25.8 129.6,37.6 216,33 C 302.4,28.4 345.6,-1.6 432,1 C 518.4,3.6 561.6,45 648,46 C 734.4,47 777.6,8.2 864,6 C 950.4,3.8 1036.8,29.2 1080,35L1080 100L0 100z' fill='%23184a7e'%3E%3C/path%3E%3Cpath d='M 0,89 C 72,83.8 216,65.4 360,63 C 504,60.6 576,78 720,77 C 864,76 1008,61.8 1080,58L1080 100L0 100z' fill='%232264ab'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1026'%3E%3Crect width='1080' height='100' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
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

export default TemplateHeaderTwo;
