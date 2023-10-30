import { useState } from "react";
import "../../../fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function TemplateHeaderTwo() {
  // State variable to control the visibility of the responsive menu
  const [showMenu, setShowMenu] = useState(false);

  // Function to handle the click event on the bars icon
  const handleIconClick = () => {
    setShowMenu(!showMenu);
  };

  const auth = getAuth();

  const signOutUser = () => {
    auth.signOut();
  };

  return (
    <nav
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1080' height='100' preserveAspectRatio='none' viewBox='0 0 1080 100'%3E%3Cg mask='url(%22%23SvgjsMask1026%22)' fill='none'%3E%3Crect width='1080' height='100' x='0' y='0' fill='%230e2a47'%3E%3C/rect%3E%3Cpath d='M 0,24 C 43.2,25.8 129.6,37.6 216,33 C 302.4,28.4 345.6,-1.6 432,1 C 518.4,3.6 561.6,45 648,46 C 734.4,47 777.6,8.2 864,6 C 950.4,3.8 1036.8,29.2 1080,35L1080 100L0 100z' fill='%23184a7e'%3E%3C/path%3E%3Cpath d='M 0,89 C 72,83.8 216,65.4 360,63 C 504,60.6 576,78 720,77 C 864,76 1008,61.8 1080,58L1080 100L0 100z' fill='%232264ab'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1026'%3E%3Crect width='1080' height='100' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: 600,
          color: "white",
          fontFamily: "Delicious Handrawn, cursive",
        }}
      >
        <span style={{ color: "white" }}>Craft</span>
        My
        <span style={{ color: "white" }}>Portfolio</span>
      </h1>
      {/* Responsive menu for smaller screens */}
      <div
        style={{
          display: "block",
        }}
      >
        <FontAwesomeIcon
          style={{
            display: "none",
          }}
          icon={faBars}
          onClick={handleIconClick}
        />
        <ul
          style={{
            display: "none",
          }}
        >
          <li>
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/templates"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Templates
            </a>
          </li>
          <li>
            <a
              href="/details"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Details
            </a>
          </li>
          <li>
            <a
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Account
            </a>
          </li>
          <li>
            <a
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              Details
            </a>
          </li>
          <li>
            <a
              className="projects-button"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
                borderRadius: "0.5rem",
                cursor: "pointer",
              }}
            >
              My Projects
            </a>
          </li>
          <li onClick={signOutUser}>
            <a
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: 600,
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
  );
}

export default TemplateHeaderTwo;
