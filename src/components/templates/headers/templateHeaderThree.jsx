import { useState } from "react";
import "../../../fonts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getAuth } from "firebase/auth";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function TemplateHeaderThree() {
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
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='100' viewBox='0 0 1080 100'%3E%3Crect width='1080' height='100' fill='%23001220'%3E%3C/rect%3E%3Cg fill='%23A7233A'%3E%3Ccircle r='30' cx='122' cy='96'%3E%3C/circle%3E%3Ccircle r='13' cx='119' cy='16'%3E%3C/circle%3E%3Ccircle r='22' cx='617' cy='54'%3E%3C/circle%3E%3Ccircle r='24' cx='936' cy='32'%3E%3C/circle%3E%3Ccircle r='14' cx='314' cy='72'%3E%3C/circle%3E%3Ccircle r='20' cx='466' cy='19'%3E%3C/circle%3E%3Ccircle r='25' cx='478' cy='78'%3E%3C/circle%3E%3Ccircle r='13' cx='544' cy='59'%3E%3C/circle%3E%3Ccircle r='14' cx='200' cy='54'%3E%3C/circle%3E%3Ccircle r='15' cx='1028' cy='7'%3E%3C/circle%3E%3Ccircle r='28' cx='255' cy='28'%3E%3C/circle%3E%3Ccircle r='26' cx='578' cy='8'%3E%3C/circle%3E%3Ccircle r='23' cx='53' cy='9'%3E%3C/circle%3E%3Ccircle r='16' cx='24' cy='72'%3E%3C/circle%3E%3Ccircle r='18' cx='743' cy='5'%3E%3C/circle%3E%3Ccircle r='20' cx='1071' cy='77'%3E%3C/circle%3E%3Ccircle r='22' cx='741' cy='78'%3E%3C/circle%3E%3Ccircle r='21' cx='393' cy='2'%3E%3C/circle%3E%3Ccircle r='12' cx='917' cy='90'%3E%3C/circle%3E%3Ccircle r='18' cx='846' cy='50'%3E%3C/circle%3E%3Ccircle r='19' cx='805' cy='93'%3E%3C/circle%3E%3Ccircle r='17' cx='316' cy='1'%3E%3C/circle%3E%3Ccircle r='12' cx='1000' cy='91'%3E%3C/circle%3E%3Ccircle r='24' cx='691' cy='43'%3E%3C/circle%3E%3Ccircle r='20' cx='387' cy='87'%3E%3C/circle%3E%3Ccircle r='22' cx='253' cy='96'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")`,
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

export default TemplateHeaderThree;
