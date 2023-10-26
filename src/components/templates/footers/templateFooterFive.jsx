import React, { useState } from "react";
import AutoFillButton from "../autoFill/autoFillButton";
import { useParams } from "react-router-dom";

function TemplateFooterFive() {
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='100' viewBox='0 0 1080 100'%3E%3Crect width='1080' height='100' fill='%23140021'%3E%3C/rect%3E%3Cpath d='M0 57L154 57L154 42L309 42L309 45L463 45L463 47L617 47L617 42L771 42L771 51L926 51L926 39L1080 39L1080 44L1080 101L1080 101L926 101L926 101L771 101L771 101L617 101L617 101L463 101L463 101L309 101L309 101L154 101L154 101L0 101Z' fill='%239900ff'%3E%3C/path%3E%3Cpath d='M0 63L154 63L154 56L309 56L309 63L463 63L463 53L617 53L617 52L771 52L771 61L926 61L926 66L1080 66L1080 58L1080 101L1080 101L926 101L926 101L771 101L771 101L617 101L617 101L463 101L463 101L309 101L309 101L154 101L154 101L0 101Z' fill='%238800e2'%3E%3C/path%3E%3Cpath d='M0 67L154 67L154 71L309 71L309 69L463 69L463 72L617 72L617 72L771 72L771 70L926 70L926 66L1080 66L1080 66L1080 101L1080 101L926 101L926 101L771 101L771 101L617 101L617 101L463 101L463 101L309 101L309 101L154 101L154 101L0 101Z' fill='%237700c6'%3E%3C/path%3E%3Cpath d='M0 82L154 82L154 82L309 82L309 80L463 80L463 79L617 79L617 74L771 74L771 79L926 79L926 82L1080 82L1080 76L1080 101L1080 101L926 101L926 101L771 101L771 101L617 101L617 101L463 101L463 101L309 101L309 101L154 101L154 101L0 101Z' fill='%236600ab'%3E%3C/path%3E%3Cpath d='M0 85L154 85L154 89L309 89L309 90L463 90L463 93L617 93L617 85L771 85L771 84L926 84L926 93L1080 93L1080 86L1080 101L1080 101L926 101L926 101L771 101L771 101L617 101L617 101L463 101L463 101L309 101L309 101L154 101L154 101L0 101Z' fill='%23560090'%3E%3C/path%3E%3C/svg%3E")`,
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

export default TemplateFooterFive;
