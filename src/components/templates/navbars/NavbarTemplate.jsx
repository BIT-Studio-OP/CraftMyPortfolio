import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavbarTemplate() {
  const [showMenu, setShowMenu] = useState(false);

  const handleIconClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav
        style={{
          backgroundColor: "gray",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          margin: "0 !important",
        }}
      >
        <h1
          style={{
            fontSize: "48px !important",
            fontWeight: 600,
            color: "white",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          <span style={{ fontFamily: "Montserrat, sans-serif" }}>
            YourTitle
          </span>
        </h1>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            listStyle: "none",
            alignItems: "center",
          }}
        >
          {/* Editable menu items */}
          <li
            style={
              {
                // Add your menu item styles here
              }
            }
          >
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
                transition: "all 0.1s ease-in-out",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Home
            </a>
          </li>
          <li
            style={
              {
                // Add your menu item styles here
              }
            }
          >
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
                transition: "all 0.1s ease-in-out",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Templates
            </a>
          </li>
          <li
            style={
              {
                // Add your menu item styles here
              }
            }
          >
            <a
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
                transition: "all 0.1s ease-in-out",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Account
            </a>
          </li>
          <li
            style={
              {
                // Add your menu item styles here
              }
            }
          >
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
                transition: "all 0.1s ease-in-out",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Details
            </a>
          </li>
          <li
            className="projects-button"
            style={
              {
                // Add your menu item styles here
              }
            }
          >
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
                transition: "all 0.1s ease-in-out",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              My Projects
            </a>
          </li>
          {/* End of editable menu items */}
          <li
            style={
              {
                // Add your menu item styles here
              }
            }
          >
            <a
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
                transition: "all 0.1s ease-in-out",
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Log Out
            </a>
          </li>
        </ul>
        <div style={{ display: "none" }}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={handleIconClick}
            style={{ display: "none" }}
          />
          <ul
            style={{
              display: "none",
            }}
          >
            {/* Editable responsive menu items */}
            <li
              style={
                {
                  // Add your menu item styles here
                }
              }
            >
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  transition: "all 0.1s ease-in-out",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
              >
                Home
              </a>
            </li>
            <li
              style={
                {
                  // Add your menu item styles here
                }
              }
            >
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  transition: "all 0.1s ease-in-out",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
              >
                Templates
              </a>
            </li>
            <li
              style={
                {
                  // Add your menu item styles here
                }
              }
            >
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  transition: "all 0.1s ease-in-out",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
              >
                Details
              </a>
            </li>
            <li
              style={
                {
                  // Add your menu item styles here
                }
              }
            >
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  transition: "all 0.1s ease-in-out",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
              >
                Account
              </a>
            </li>
            <li
              className="projects-button"
              style={
                {
                  // Add your menu item styles here
                }
              }
            >
              <a
                href=""
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  transition: "all 0.1s ease-in-out",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
              >
                My Projects
              </a>
            </li>
            {/* End of editable responsive menu items */}
            <li
              style={
                {
                  // Add your menu item styles here
                }
              }
            >
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "1.2rem",
                  fontWeight: 600,
                  transition: "all 0.1s ease-in-out",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                }}
              >
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavbarTemplate;
