import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import AutoFillButton from "../autoFill/autoFillButton";
import { useParams } from "react-router-dom";

const useStyles = createUseStyles({
  footer: {
  border: "3px solid gray",
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1080' height='100' viewBox='0 0 1080 100'%3E%3Crect width='1080' height='100' fill='%23001220'%3E%3C/rect%3E%3Cg fill='%23A7233A'%3E%3Ccircle r='30' cx='122' cy='96'%3E%3C/circle%3E%3Ccircle r='13' cx='119' cy='16'%3E%3C/circle%3E%3Ccircle r='22' cx='617' cy='54'%3E%3C/circle%3E%3Ccircle r='24' cx='936' cy='32'%3E%3C/circle%3E%3Ccircle r='14' cx='314' cy='72'%3E%3C/circle%3E%3Ccircle r='20' cx='466' cy='19'%3E%3C/circle%3E%3Ccircle r='25' cx='478' cy='78'%3E%3C/circle%3E%3Ccircle r='13' cx='544' cy='59'%3E%3C/circle%3E%3Ccircle r='14' cx='200' cy='54'%3E%3C/circle%3E%3Ccircle r='15' cx='1028' cy='7'%3E%3C/circle%3E%3Ccircle r='28' cx='255' cy='28'%3E%3C/circle%3E%3Ccircle r='26' cx='578' cy='8'%3E%3C/circle%3E%3Ccircle r='23' cx='53' cy='9'%3E%3C/circle%3E%3Ccircle r='16' cx='24' cy='72'%3E%3C/circle%3E%3Ccircle r='18' cx='743' cy='5'%3E%3C/circle%3E%3Ccircle r='20' cx='1071' cy='77'%3E%3C/circle%3E%3Ccircle r='22' cx='741' cy='78'%3E%3C/circle%3E%3Ccircle r='21' cx='393' cy='2'%3E%3C/circle%3E%3Ccircle r='12' cx='917' cy='90'%3E%3C/circle%3E%3Ccircle r='18' cx='846' cy='50'%3E%3C/circle%3E%3Ccircle r='19' cx='805' cy='93'%3E%3C/circle%3E%3Ccircle r='17' cx='316' cy='1'%3E%3C/circle%3E%3Ccircle r='12' cx='1000' cy='91'%3E%3C/circle%3E%3Ccircle r='24' cx='691' cy='43'%3E%3C/circle%3E%3Ccircle r='20' cx='387' cy='87'%3E%3C/circle%3E%3Ccircle r='22' cx='253' cy='96'%3E%3C/circle%3E%3C/g%3E%3C/svg%3E")`,
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
    background: "linear-gradient(45deg, #161925 10%, #161925 25%, #FCFCEE 5%, #FCFCEE 100%)",
  },
  "@media (max-width: 800px)": {
    background: "linear-gradient(45deg, #161925 10%, #161925 29%, #FCFCEE 1%, #FCFCEE 100%)",
  },
  "@media (max-width: 750px)": {
    background: "#FCFCEE",
  },
},
  background: {
    position: "absolute",
    maxWidth: "100rem",
    maxHeight: "100rem",
    zIndex: "-1",
  },
  leftContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    color: "white",
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
    color: "#fff",
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
    color: "#fff",
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

function TemplateFooterFour() {
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

export default TemplateFooterFour;
