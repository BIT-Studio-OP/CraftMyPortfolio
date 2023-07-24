import React, { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    background:
      "linear-gradient(45deg, #161925 10%, #161925 15%, #FCFCEE 15%, #FCFCEE 100%)",
    color: "#FCFCEE",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    padding: "1rem 2rem 1rem 2rem",
    position: "absolute",
    bottom: "-1",
    left: "0",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 500px)": {
      flexDirection: "column",
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

  // Define state variables for the content of each section
  const [leftContent, setLeftContent] = useState({
    instagram: "Instagram",
    facebook: "Facebook",
    linkedIn: "LinkedIn",
  });

  const [middleContent, setMiddleContent] = useState({
    copyright: "&copy; 2023 CraftMyPortfolio",
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

  return (
    <footer className={classes.footer}>
      <div className={classes.leftContent}>
        <p>Follow us:</p>
        <input
          type="text"
          name="instagram"
          value={leftContent.instagram}
          onChange={handleLeftContentChange}
        />
        <input
          type="text"
          name="facebook"
          value={leftContent.facebook}
          onChange={handleLeftContentChange}
        />
        <input
          type="text"
          name="linkedIn"
          value={leftContent.linkedIn}
          onChange={handleLeftContentChange}
        />
      </div>
      <div className={classes.middleContent}>
        <p>
          <input
            type="text"
            name="copyright"
            value={middleContent.copyright}
            onChange={handleMiddleContentChange}
          />
        </p>
        <p>
          <input
            type="text"
            name="contactEmail"
            value={middleContent.contactEmail}
            onChange={handleMiddleContentChange}
          />
        </p>
      </div>
      <div className={classes.rightContent}>
        <p>The Team:</p>
        <input
          type="text"
          name="userOne"
          value={rightContent.userOne}
          onChange={handleRightContentChange}
        />
        <input
          type="text"
          name="userTwo"
          value={rightContent.userTwo}
          onChange={handleRightContentChange}
        />
        <input
          type="text"
          name="userThree"
          value={rightContent.userThree}
          onChange={handleRightContentChange}
        />
      </div>
    </footer>
  );
}

export default TemplateFooterOne;
