import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { useUserDetails } from "../../getDetails/getDetails";

const useStyles = createUseStyles({
  footer: {
    border: "3px solid gray",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1080' height='100' preserveAspectRatio='none' viewBox='0 0 1080 100'%3E%3Cg mask='url(%22%23SvgjsMask1026%22)' fill='none'%3E%3Crect width='1080' height='100' x='0' y='0' fill='%230e2a47'%3E%3C/rect%3E%3Cpath d='M 0,24 C 43.2,25.8 129.6,37.6 216,33 C 302.4,28.4 345.6,-1.6 432,1 C 518.4,3.6 561.6,45 648,46 C 734.4,47 777.6,8.2 864,6 C 950.4,3.8 1036.8,29.2 1080,35L1080 100L0 100z' fill='%23184a7e'%3E%3C/path%3E%3Cpath d='M 0,89 C 72,83.8 216,65.4 360,63 C 504,60.6 576,78 720,77 C 864,76 1008,61.8 1080,58L1080 100L0 100z' fill='%232264ab'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1026'%3E%3Crect width='1080' height='100' fill='%23ffffff'%3E%3C/rect%3E%3C/mask%3E%3C/defs%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "#000",
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
  background: {
    position: "absolute",
    maxWidth: "100rem",
    maxHeight: "100rem",
    zIndex:"-1"
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
function TemplateFooterThree({ detailsType }) {
  const classes = useStyles();
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
  );
}

export default TemplateFooterThree;
