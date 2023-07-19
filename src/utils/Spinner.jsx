import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  spinner: {
    display: "inline-block",
    width: "10rem",
    height: "10rem",
    border: "0.2rem solid #ccc",
    borderRadius: "50%",
    borderTopColor: "#007acc",
    animation: "$spin 1s linear infinite",
  },
    spinnerOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    },
  "@keyframes spin": {
    to: {
      transform: "rotate(360deg)",
    },
  },
});

const Spinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.spinnerOuter}>
  <div className={classes.spinner}></div>
  </div>
  );
};

export default Spinner;