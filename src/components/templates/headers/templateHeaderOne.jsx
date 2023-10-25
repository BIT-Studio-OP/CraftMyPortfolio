import { useState } from "react";
import "../../../fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function TemplateHeaderOne() {
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
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='100' viewBox='0 0 1080 100'%3E%3Crect width='1080' height='100' fill='%23140021'%3E%3C/rect%3E%3Cpath d='M0 57L154 57L154 42L309 42L309 45L463 45L463 47L617 47L617 42L771 42L771 51L926 51L926 39L1080 39L1080 44L1080 101L1080 101L926 101L926 101L771 101L771 101L617 101L617 101L463 101L463 101L309 101L309 101L154 101L154 101L0 101Z' fill='%239900ff'%3E%3C/path%3E%3Cpath d='M0 63L154 63L154 56L309 56L309 63L463 63L463 53L617 53L617 52L771 52L771 61L926 61L926 66L1080 66L1080 58L1080 101L1080 101L926 101L926 101L771 101L771 101L617 101L617 101L463 101L463 101L309 101L309 101L154 101L154 101L0 101Z' fill='%238800e2'%3E%3C/path%3E%3Cpath d='M0 67L154 67L154 71L309 71L309 69L463 69L463 72L617 72L617 72L771 72L771 70L926 70L926 66L1080 66L1080 66L1080 101L1080 101L926 101L926 101L771 101L771 101L617 101L617 101L463 101L463 101L309 101L309 101L154 101L154 101L0 101Z' fill='%237700c6'%3E%3C/path%3E%3Cpath d='M0 82L154 82L154 82L309 82L309 80L463 80L463 79L617 79L617 74L771 74L771 79L926 79L926 82L1080 82L1080 76L1080 101L1080 101L926 101L926 101L771 101L771 101L617 101L617 101L463 101L463 101L309 101L309 101L154 101L154 101L0 101Z' fill='%236600ab'%3E%3C/path%3E%3Cpath d='M0 85L154 85L154 89L309 89L309 90L463 90L463 93L617 93L617 85L771 85L771 84L926 84L926 93L1080 93L1080 86L1080 101L1080 101L926 101L926 101L771 101L771 101L617 101L617 101L463 101L463 101L309 101L309 101L154 101L154 101L0 101Z' fill='%23560090'%3E%3C/path%3E%3C/svg%3E")`,
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
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "1rem",
          listStyle: "none",
          alignItems: "center",
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
              transition: "all 0.1s ease-in-out",
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
              transition: "all 0.1s ease-in-out",
              borderRadius: "0.5rem",
              cursor: "pointer",
            }}
          >
            Templates
          </a>
        </li>
        <li>
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
        <li>
          <a
            href="/details"
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
        <li>
          <a
            className="projects-button"
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
        <li onClick={signOutUser}>
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

export default TemplateHeaderOne;
