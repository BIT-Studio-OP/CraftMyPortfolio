import { useState } from "react";
import "../../../fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function TemplateHeaderFour() {
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
        backgroundImage: `url("data:image/svg+xml,%3Csvg id='visual' viewBox='0 0 1080 100' width='1080' height='100' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'%3E%3Cg stroke-width='1' stroke-linejoin='bevel'%3E%3Cpath d='M532 0L341 0L564 100Z' fill='%231b4965' stroke='%231b4965'%3E%3C/path%3E%3Cpath d='M341 0L269 100L564 100Z' fill='%2300101c' stroke='%2300101c'%3E%3C/path%3E%3Cpath d='M564 100L783 100L532 0Z' fill='%23236385' stroke='%23236385'%3E%3C/path%3E%3Cpath d='M783 100L837 0L532 0Z' fill='%23297ea6' stroke='%23297ea6'%3E%3C/path%3E%3Cpath d='M0 0L0 100L269 100Z' fill='%23173d55' stroke='%23173d55'%3E%3C/path%3E%3Cpath d='M341 0L0 0L269 100Z' fill='%23123146' stroke='%23123146'%3E%3C/path%3E%3Cpath d='M783 100L1080 100L837 0Z' fill='%230d2637' stroke='%230d2637'%3E%3C/path%3E%3Cpath d='M1080 100L1080 0L837 0Z' fill='%230d2637' stroke='%230d2637'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
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
    </nav>
  );
}

export default TemplateHeaderFour;
