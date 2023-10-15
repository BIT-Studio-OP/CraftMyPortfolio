import React, { useState } from "react";
import Header from "../header/Header";
import TemplateFooterOne from "./footers/templateFooterOne";
import TemplateFooterTwo from "./footers/templateFooterTwo";
import TemplateFooterThree from "./footers/templateFooterThree";
import TemplateFooterFour from "./footers/templateFooterFour";
import TemplateFooterFive from "./footers/templateFooterFive";
import TemplateFooterSix from "./footers/templateFooterSix";
import TemplateHeaderOne from "./headers/templateHeaderOne";
import TemplateHeaderTwo from "./headers/templateHeaderTwo";
import TemplateHeaderThree from "./headers/templateHeaderThree";
import TemplateHeaderFour from "./headers/templateHeaderFour";
import TemplateHeaderFive from "./headers/templateHeaderFive";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";

const useStyles = createUseStyles({
  templatesContainer: {
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    padding: "2rem",
    alignItems: "center",
  },
  selectContainer: {
    marginBottom: "1rem",
  },
  selectLabel: {
    fontSize: "1.2rem",
    color: "black",
  },
  select: {
    fontSize: "1rem",
    padding: "0.5rem",
    borderRadius: "4px",
    textAlign: "center",
    backgroundColor: "white",
  },
  heading: {
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "2rem",
    color: "var(--primary-colour)",
  },
  templatesFooterColumn: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  templatesHeaderColumn: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2rem",
  },
});

const Templates = () => {
  const classes = useStyles();
  const { templateId } = useParams();
  console.log("templateId", templateId);

  return (
    <>
      <Header />
      <div className={classes.templatesContainer}>
        <h1 className={classes.heading}>Templates</h1>
        <h1 className={classes.heading}>Footers</h1>
        <div className={classes.templatesFooterColumn}>
          <a href="/templates/1">
            {" "}
            <TemplateFooterOne />
          </a>
          <a href="/templates/2">
            {" "}
            <TemplateFooterTwo />
          </a>
          <a href="/templates/3">
            {" "}
            <TemplateFooterThree />
          </a>
          <a href="/templates/4">
            {" "}
            <TemplateFooterFour />
          </a>
          <a href="/templates/5">
            {" "}
            <TemplateFooterFive />
          </a>
          <a href="/templates/6">
            {" "}
            <TemplateFooterSix />
          </a>
        </div>
        <h1 className={classes.heading}>Headers</h1>
        <div className={classes.templatesHeaderColumn}>
          <a href="/templates/7">
            {" "}
            <TemplateHeaderOne />
          </a>
          <a href="/templates/8">
            {" "}
            <TemplateHeaderTwo />
          </a>
          <a href="/templates/9">
            {" "}
            <TemplateHeaderThree />
          </a>
          <a href="/templates/10">
            {" "}
            <TemplateHeaderFour />
          </a>
          <a href="/templates/11">
            {" "}
            <TemplateHeaderFive />
          </a>
        </div>
      </div>
    </>
  );
};

export default Templates;
