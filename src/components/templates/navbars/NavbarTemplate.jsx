import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

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
  menu: {
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
  MenuItem: {
    // Add your menu item styles here
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
  resMenuParent: {
    display: "none",
  },
  resMenu: {
    display: "none",
  },
  resMenuHide: {
    display: "none",
  },
  // Add responsive styles here
});

function NavbarTemplate() {
  const [showMenu, setShowMenu] = useState(false);
  const classes = useStyles();

  const handleIconClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav className={classes.navParent}>
        <h1 className={classes.h1}>
          <span className={classes.craft}>Craft</span>My
          <span className={classes.portfolio}>Portfolio</span>
        </h1>
        <ul className={classes.menu}>
          {/* Editable menu items */}
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
            <a href="/projects" className={classes.a}>
              My Projects
            </a>
          </li>
          {/* End of editable menu items */}
          <li className={classes.MenuItem}>
            <a className={classes.a}>Log Out</a>
          </li>
        </ul>
        <div className={classes.resMenuParent}>
          <FontAwesomeIcon
            className={classes.bars}
            icon={faBars}
            onClick={handleIconClick}
          />
          <ul className={showMenu ? classes.resMenu : classes.resMenuHide}>
            {/* Editable responsive menu items */}
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
              <a href="/projects" className={classes.a}>
                My Projects
              </a>
            </li>
            {/* End of editable responsive menu items */}
            <li className={classes.MenuItem}>
              <a className={classes.a}>Log Out</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavbarTemplate;
