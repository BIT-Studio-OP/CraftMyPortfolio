import React, { useState, useEffect } from "react";
import AutoFillButton from "../autoFill/autoFillButton";
import { useParams } from "react-router-dom";

function TemplateFooterSix() {
  const [isEditing, setEditing] = useState(false);
  const { templateId } = useParams();

  const [details, setDetails] = useState({
    instagram: "Instagram",
    facebook: "Facebook",
    linkedIn: "LinkedIn",
  });

  const [leftContent, setLeftContent] = useState(details);
  const [middleContent, setMiddleContent] = useState({
    copyright: "@2023 CraftMyPortfolio",
    contactEmail: "CraftMyPortfolio@gmail.com",
  });
  const [rightContent, setRightContent] = useState({
    userOne: "UserOne",
    userTwo: "UserTwo",
    userThree: "UserThree",
  });

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

  const handleAutoFill = (userDetails) => {
    setDetails({
      instagram: userDetails.name.first || "Instagram",
      facebook: userDetails.facebook || "Facebook",
      linkedIn: userDetails.linkedIn || "LinkedIn",
    });

    setLeftContent({
      instagram: userDetails.name.first || "Instagram",
      facebook: userDetails.facebook || "Facebook",
      linkedIn: userDetails.linkedIn || "LinkedIn",
    });

    setRightContent({
      userOne: userDetails.name.first || "UserOne",
      userTwo: userDetails.email || "UserTwo",
      userThree: userDetails.portfolio || "UserThree",
    });
    setMiddleContent({
      ...middleContent,
      contactEmail: userDetails.email || "CraftMyPortfolio@gmail.com",
    });
  };

  const showAutoFillButton = templateId !== undefined;

  return (
    <>
      {showAutoFillButton && <AutoFillButton onAutoFill={handleAutoFill} />}

      <footer
        style={{
          border: "3px solid gray",
          backgroundImage: `url("data:image/svg+xml,%3Csvg id='visual' viewBox='0 0 1080 100' width='1080' height='100' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'%3E%3Crect x='0' y='0' width='1080' height='100' fill='%23001220'%3E%3C/rect%3E%3Cdefs%3E%3ClinearGradient id='grad1_0' x1='90.7%' y1='0%' x2='100%' y2='100%'%3E%3Cstop offset='-166%' stop-color='%23001220' stop-opacity='1'%3E%3C/stop%3E%3Cstop offset='266.0000000000001%' stop-color='%23001220' stop-opacity='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cdefs%3E%3ClinearGradient id='grad2_0' x1='0%' y1='0%' x2='9.3%' y2='100%'%3E%3Cstop offset='-166%' stop-color='%23001220' stop-opacity='1'%3E%3C/stop%3E%3Cstop offset='266.0000000000001%' stop-color='%23001220' stop-opacity='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cg transform='translate(1080, 0)'%3E%3Cpath d='M0 100C-6.7 100.2 -13.4 100.3 -19.5 98.1C-25.6 95.8 -31 -91.2 -36 -86.8C-40.9 82.5 -45.5 78.6 -50 74.8C-54.5 71.1 -59.1 67.6 -64.3 64.3C-69.6 61 -75.5 57.9 -79.8 53.3C-84.1 48.8 -86.9 42.8 -88.7 36.7C-90.5 30.7 -91.4 24.7 -93.2 18.5C-94.9 12.4 -97.5 6.2 -100 0L0 0Z' fill='%23FBAE3C'%3E%3C/path%3E%3C/g%3E%3Cg transform='translate(0, 100)'%3E%3Cpath d='M0 -100C6.9 -100.6 13.8 -101.2 19.5 -98.1C25.2 -95 29.8 -88.2 34.8 -84.1C39.9 -79.9 45.4 -78.4 50.6 -75.7C55.7 -73 60.5 -69.1 65.1 -65.1C69.6 -61 73.8 -56.8 78.2 -52.2C82.5 -47.6 87.1 -42.6 88.7 -36.7C90.3 -30.9 88.8 -24.2 90.2 -17.9C91.6 -11.7 95.8 -5.8 100 0L0 0Z' fill='%23FBAE3C'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "#fff",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "500",
          padding: "1rem 2rem 1rem 2rem",
          bottom: "-1",
          left: "5vw",
          minWidth: "90%",
          display: "flex",
          marginBottom: "2rem",
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
            color: "white",
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
            color: "#fff",
            alignItems: "center",
            flexDirection: "column",
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
            color: "#fff",
            alignItems: "center",
            flexDirection: "column",
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
    </>
  );
}

export default TemplateFooterSix;
