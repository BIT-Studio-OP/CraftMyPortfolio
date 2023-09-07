import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  footer: {
    backgroundColor: "#161925",
    color: "#fff",
    paddingTop: "0rem",
    paddingBottom: "2rem",
    textAlign: "center",
    height: "100%",
    "& h1": {
      fontSize: "2rem !important",
      fontWeight: 600,
      color: "white",
      fontFamily: "Delicious Handrawn, cursive",
    },
    "& p": {
      fontSize: "1.2rem",
      fontWeight: 300,
      color: "white",
      fontFamily: "Raleway, sans-serif !important",
      "& a": {
      transition: "all 0.3s ease-in-out",
          "&:hover": {
            textDecoration: "underline !important",
            transition: "all 0.3s ease-in-out",
          }
      }
    },
    "& ul": {
      "& li": {
        "& a": {
          fontFamily: "Raleway, sans-serif !important",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            textDecoration: "underline !important",
            transition: "all 0.3s ease-in-out",
          }
        }
      }
    }
  },

});

function Footer() {
  const classes = useStyles();
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#161925" fillOpacity="1" d="M0,224L40,197.3C80,171,160,117,240,117.3C320,117,400,171,480,197.3C560,224,640,224,720,208C800,192,880,160,960,160C1040,160,1120,192,1200,213.3C1280,235,1360,245,1400,250.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    <div className={classes.footer}>
      <h1>CraftMyPortfolio</h1>
      <p>Contact us via email or through our contact form:</p>
      <ul>
      <li>
        <a href="mailto:craftmyportfolio@gmail.com">craftmyportfolio@gmail.com</a>
      </li>
      <li>
        <a href="/contact">Contact Form</a>
      </li>
      </ul>
      <p>We&rsquo;re open source! <a href="https://github.com/BIT-Studio-OP/CraftMyPortfolio">Checkout our repo here</a></p>
    <br />
      <p>&copy; 2023 CraftMyPortfolio All rights reserved.</p>
    </div>
    </>

  );
}

export default Footer;