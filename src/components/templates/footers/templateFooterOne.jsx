import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import AutoFillButton from "../autoFill/autoFillButton";
import { useParams } from "react-router-dom";

const useStyles = createUseStyles({
  footer: {
    border: "3px solid gray",
    background:
      "linear-gradient(45deg, #161925 10%, #161925 15%, #FCFCEE 15%, #FCFCEE 100%)",
    color: "#FCFCEE",
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
    "@media (max-width: 500px)": {
      flexDirection: "column",
      fontSize: "4vw",
      fontFamily: "Arial, sans-serif",
      fontWeight: "400",
    },
    "@media (max-width: 680px)": {
      flexDirection: "column",
      fontSize: "2vw",
      fontFamily: "Arial, sans-serif",
      fontWeight: "400",
    },
    "@media (max-width: 1500px)": {
      background:
        "linear-gradient(45deg, #161925 10%, #161925 25%, #FCFCEE 5%, #FCFCEE 100%)",
    },
    "@media (max-width: 800px)": {
      background:
        "linear-gradient(45deg, #161925 10%, #161925 29%, #FCFCEE 1%, #FCFCEE 100%)",
    },
    "@media (max-width: 750px)": {
      background: "#FCFCEE",
    },
  },
  leftContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& p": {
      margin: "0 1rem",
      "@media (max-width: 750px)": {
        color: "#161925",
      },
    },
    "& > a": {
      textDecoration: "none",
      color: "#FCFCEE",
      "@media (max-width: 750px)": {
        color: "#161925",
      },
    },
    "@media (max-width: 500px)": {
      paddingBottom: "1rem",
    },
  },
  rightContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "#161925",
    "& p": {
      margin: "0 1rem",
    },
    "& > a": {
      textDecoration: "none",
      color: "#161925",
    },
    "@media (max-width: 500px)": {
      paddingBottom: "1rem",
    },
  },
  middleContent: {
    display: "flex",
    color: "#161925",
    alignItems: "center",
    flexDirection: "column",
    "& p": {
      margin: "0 1rem",
    },
    "& > a": {
      textDecoration: "none",
      color: "#161925",
    },
    "@media (max-width: 500px)": {
      paddingBottom: "1rem",
    },
  },
});

function TemplateFooterOne() {
  const classes = useStyles();
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

      <footer className={classes.footer}>
        <div className={classes.leftContent}>
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
        <div className={classes.middleContent}>
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
        <div className={classes.rightContent}>
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

export default TemplateFooterOne;
