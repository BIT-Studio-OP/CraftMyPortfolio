import { useState } from "react";
import "../../../fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

function TemplateHeaderFive() {
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
    backgroundImage: `url("data:image/svg+xml,%3Csvg id='visual' viewBox='0 0 1080 100' width='1080' height='100' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'%3E%3Crect x='0' y='0' width='1080' height='100' fill='%23001220'%3E%3C/rect%3E%3Cdefs%3E%3ClinearGradient id='grad1_0' x1='90.7%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='-166%' stop-color='%23001220' stop-opacity='1'%3E%3C/stop%3E%3Cstop offset='266.0000000000001%' stop-color='%23001220' stop-opacity='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cdefs%3E%3ClinearGradient id='grad2_0' x1='0%' y1='0%' x2='9.3%' y2='100%'%3E%3Cstop offset='-166%' stop-color='%23001220' stop-opacity='1'%3E%3C/stop%3E%3Cstop offset='266.0000000000001%' stop-color='%23001220' stop-opacity='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(1080, 0)'%3E%3Cpath d='M0 100C-6.7 100.2 -13.4 100.3 -19.5 98.1C-25.6 95.8 -31 -91.2 -36 -86.8C-40.9 82.5 -45.5 78.6 -50 74.8C-54.5 71.1 -59.1 67.6 -64.3 64.3C-69.6 61 -75.5 57.9 -79.8 53.3C-84.1 48.8 -86.9 42.8 -88.7 36.7C-90.5 30.7 -91.4 24.7 -93.2 18.5C-94.9 12.4 -97.5 6.2 -100 0L0 0Z' fill='%23FBAE3C'%3E%3C/path%3E%3C/g%3E%3Cg transform='translate(0, 100)'%3E%3Cpath d='M0 -100C6.9 -100.6 13.8 -101.2 19.5 -98.1C25.2 -95 29.8 -88.2 34.8 -84.1C39.9 -79.9 45.4 -78.4 50.6 -75.7C55.7 -73 60.5 -69.1 65.1 -65.1C69.6 -61 73.8 -56.8 78.2 -52.2C82.5 -47.6 87.1 -42.6 88.7 -36.7C90.3 -30.9 88.8 -24.2 90.2 -17.9C91.6 -11.7 95.8 -5.8 100 0L0 0Z' fill='%23FBAE3C'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
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

export default TemplateHeaderFive;
