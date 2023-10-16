import React, { useState, useEffect } from "react";
import { useUserDetails } from "../../getDetails/getDetails";

function TemplateFooterOne({ detailsType }) {
  const [isEditing, setEditing] = useState(false);
  const details = useUserDetails(detailsType);

  const [leftContent, setLeftContent] = useState({
    instagram: "Instagram",
    facebook: "Facebook",
    linkedIn: "LinkedIn",
  });

  const [middleContent, setMiddleContent] = useState({
    copyright: "@2023 CraftMyPortfolio",
    contactEmail: "CraftMyPortfolio@gmail.com",
  });

  const [rightContent, setRightContent] = useState({
    userOne: "UserOne",
    userTwo: "UserTwo",
    userThree: "UserThree",
  });

  // Function to update the content for each section
  const handleLeftContentChange = (e) => {
    setLeftContent({
      ...leftContent,
      [e.target.name]: e.target.value,
    });
  };

  const handleMiddleContentChange = (e) => {
    setMiddleContent({
      ...middleContent,
      [e.target.name]: e.target.value,
    });
  };

  const handleRightContentChange = (e) => {
    setRightContent({
      ...rightContent,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (details) {
      setLeftContent({
        instagram: details.name,
        facebook: details.facebook,
        linkedIn: details.linkedIn,
      });

      setRightContent({
        userOne: details.name,
        userTwo: details.email,
        userThree: details.portfolio,
      });
    }
  }, [details]);

  return (
    <footer
      style={{
        border: "3px solid gray",
        background:
          "linear-gradient(45deg, #161925 10%, #161925 15%, #FCFCEE 15%, #FCFCEE 100%)",
        color: "#FCFCEE",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "500",
        padding: "2rem",
        position: "absolute",
        bottom: "-1",
        left: "",
        width: "95%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "1vw",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "1rem",
        }}
      >
        <p>Follow us:</p>
        {isEditing ? (
          <input
            type="text"
            name="instagram"
            value={leftContent.instagram}
            onChange={handleLeftContentChange}
            style={{
              background: isEditing ? "rgba(182,130,148)" : "transparent",
            }}
          />
        ) : (
          <p>{leftContent.instagram}</p>
        )}
        {isEditing ? (
          <input
            type="text"
            name="facebook"
            value={leftContent.facebook}
            onChange={handleLeftContentChange}
            style={{
              background: isEditing ? "rgba(182,130,148)" : "transparent",
            }}
          />
        ) : (
          <p>{leftContent.facebook}</p>
        )}
        {isEditing ? (
          <input
            type="text"
            name="linkedIn"
            value={leftContent.linkedIn}
            onChange={handleLeftContentChange}
            style={{
              background: isEditing ? "rgba(182,130,148)" : "transparent",
            }}
          />
        ) : (
          <p>{leftContent.linkedIn}</p>
        )}
      </div>
      <div
        style={{
          display: "flex",
          color: "#161925",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "1rem",
        }}
      >
        {isEditing ? (
          <input
            type="text"
            name="copyright"
            value={middleContent.copyright}
            onChange={handleMiddleContentChange}
            style={{
              background: isEditing ? "rgba(182,130,148)" : "transparent",
            }}
          />
        ) : (
          <p>{middleContent.copyright}</p>
        )}
        {isEditing ? (
          <input
            type="text"
            name="contactEmail"
            value={middleContent.contactEmail}
            onChange={handleMiddleContentChange}
            style={{
              background: isEditing ? "rgba(182,130,148)" : "transparent",
            }}
          />
        ) : (
          <p>{middleContent.contactEmail}</p>
        )}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          color: "#161925",
          paddingBottom: "1rem",
        }}
      >
        <p>The Team:</p>
        {isEditing ? (
          <input
            type="text"
            name="userOne"
            value={rightContent.userOne}
            onChange={handleRightContentChange}
            style={{
              background: isEditing ? "rgba(182,130,148)" : "transparent",
            }}
          />
        ) : (
          <p>{rightContent.userOne}</p>
        )}
        {isEditing ? (
          <input
            type="text"
            name="userTwo"
            value={rightContent.userTwo}
            onChange={handleRightContentChange}
            style={{
              background: isEditing ? "rgba(182,130,148)" : "transparent",
            }}
          />
        ) : (
          <p>{rightContent.userTwo}</p>
        )}
        {isEditing ? (
          <input
            type="text"
            name="userThree"
            value={rightContent.userThree}
            onChange={handleRightContentChange}
            style={{
              background: isEditing ? "rgba(182,130,148)" : "transparent",
            }}
          />
        ) : (
          <p>{rightContent.userThree}</p>
        )}
      </div>
    </footer>
  );
}

export default TemplateFooterOne;