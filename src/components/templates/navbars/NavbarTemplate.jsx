import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useStyles } from "./NavbarTemplateStyles";

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
          <span className={classes.craft}>YourTitle</span>
        </h1>
        <ul className={classes.menu}>
          {/* Editable menu items */}
          <li className={classes.MenuItem}>
            <a href="" className={classes.a}>
              Home
            </a>
          </li>
          <li className={classes.MenuItem}>
            <a href="" className={classes.a}>
              Templates
            </a>
          </li>
          <li className={classes.MenuItem}>
            <a className={classes.a}>Account</a>
          </li>
          <li className={classes.MenuItem}>
            <a href="" className={classes.a}>
              Details
            </a>
          </li>
          <li className={`${classes.MenuItem} projects-button`}>
            <a href="" className={classes.a}>
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
              <a href="" className={classes.a}>
                Home
              </a>
            </li>
            <li className={classes.MenuItem}>
              <a href="" className={classes.a}>
                Templates
              </a>
            </li>
            <li className={classes.MenuItem}>
              <a href="" className={classes.a}>
                Details
              </a>
            </li>
            <li className={classes.MenuItem}>
              <a className={classes.a}>Account</a>
            </li>
            <li className={`${classes.MenuItem} projects-button`}>
              <a href="" className={classes.a}>
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
