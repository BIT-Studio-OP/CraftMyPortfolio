import { useState } from "react";
import "../../../fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

function TemplateHeaderThree() {
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
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='100' viewBox='0 0 1080 100'%3E%3Crect width='1080' height='100' fill='%23001220'%3E%3C/rect%3E%3Cg fill='%23A7233A'%3E%3Ccircle r='30' cx='122' cy='96'%3E%3C/circle%3E%3Ccircle r='13' cx='119' cy='16'%3E%3C/circle%3E%3Ccircle r='22' cx='617' cy='54'%3E%3C/circle%3E%3Ccircle r='24' cx='936' cy='32'%3E%3C/circle%3E%3Ccircle r='14' cx='314' cy='72'%3E%3C/circle%3E%3Ccircle r='20' cx='466' cy='19'%3E%3C/circle%3E%3Ccircle r='25' cx='478' cy='78'%3E%3C/circle%3E%3Ccircle r='13' cx='544' cy='59'%3E%3C/circle%3E%3Ccircle r='14' cx='200' cy='54'%3E%3C/circle%3E%3Ccircle r='15' cx='1028' cy='7'%3E%3C/circle%3E%3Ccircle r='28' cx='255' cy='28'%3E%3C/circle%3E%3Ccircle r='26' cx='578' cy='8'%3E%3C/circle%3E%3Ccircle r='23' cx='53' cy='9'%3E%3C/circle%3E%3Ccircle r='16' cx='24' cy='72'%3E%3C/circle%3E%3Ccircle r='18' cx='743' cy='5'%3E%3C/circle%3E%3Ccircle r='20' cx='1071' cy='77'%3E%3C/circle%3E%3Ccircle r='22' cx='741' cy='78'%3E%3C/circle%3E%3Ccircle r='21' cx='393' cy='2'%3E%3C/circle%3E%3Ccircle r='12' cx='917' cy='90'%3E%3C/circle%3E%3Ccircle r='18' cx='846' cy='50'%3E%3C/circle%3E%3Ccircle r='19' cx='805' cy='93'%3E%3C/circle%3E%3Ccircle r='17' cx='316' cy='1'%3E%3C/circle%3E%3Ccircle r='12' cx='1000' cy='91'%3E%3C/circle%3E%3Ccircle r='24' cx='691' cy='43'%3E%3C/circle%3E%3Ccircle r='20' cx='387' cy='87'%3E%3C/circle%3E%3Ccircle r='22' cx='253' cy='96'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")`,
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

export default TemplateHeaderThree;
