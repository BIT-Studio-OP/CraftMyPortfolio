import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    background: "linear-gradient(45deg, #161925 10%, #161925 15%, #FCFCEE 15%, #FCFCEE 100%)",
    color: "#FCFCEE",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    padding: "1rem 2rem 1rem 2rem",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media (max-width: 500px)": {
      flexDirection: "column",
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

function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.leftContent}>
        <p>Follow us:</p>
        <a href="https://www.instagram.com/craftmyportfolio/">
          <p>Instagram</p>
        </a>
        <a href="https://www.facebook.com/CraftMyPortfolio">
          <p>Facebook</p>
        </a>
        <a href="https://www.linkedin.com/company/craftmyportfolio">
          <p>LinkedIn</p>
        </a>
      </div>
      <div className={classes.middleContent}>
        <p>&copy; 2023 CraftMyPortfolio</p>
        <p>Contact us: CraftMyPortfolio@gmail.com</p>
      </div>
      <div className={classes.rightContent}>
        <p>The Team:</p>
        <p>Caleb</p>
        <a href="https:/www.dani-op.com">
          <p>Dani</p>
        </a>
        <a href="https:/www.jakeclearwater.com">
          <p>Jake</p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;