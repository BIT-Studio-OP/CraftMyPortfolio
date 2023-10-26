import React, { useState, useEffect } from "react";
import AutoFillButton from "../autoFill/autoFillButton";
import { useParams } from "react-router-dom";

function TemplateFooterThree() {
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1080' height='100' preserveAspectRatio='none' viewBox='0 0 1080 100'%3E%3Cg mask='url(%22%23SvgjsMask1026%22)' fill='none'%3E%3Crect width='1080' height='100' x='0' y='0' fill='%230e2a47'%3E%3C/rect%3E%3Cpath d='M 0,24 C 43.2,25.8 129.6,37.6 216,33 C 302.4,28.4 345.6,-1.6 432,1 C 518.4,3.6 561.6,45 648,46 C 734.4,47 777.6,8.2 864,6 C 950.4,3.8 1036.8,29.2 1080,35L1080 100L0 100z' fill='%23184a7e'%3E%3C/path%3E%3Cpath d='M 0,89 C 72,83.8 216,65.4 360,63 C 504,60.6 576,78 720,77 C 864,76 1008,61.8 1080,58L1080 100L0 100z' fill='%232264ab'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1026'%3E%3Crect width='1080' height='100' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "#fff",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "500",
          padding: "1rem 2rem 1rem 2rem",
          bottom: "-1",
          left: "5vw",
          minWidth: "90%",
          width: "90%",
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
            alignItems: "center",
            flexDirection: "column",
            color: "#161925",
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
            color: "#fff",
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

export default TemplateFooterThree;
