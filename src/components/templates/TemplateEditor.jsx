import React, { useState } from "react";
import Header from "../header/Header";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";
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
  templatesColumn: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
});

function TemplateEditor() {
  const classes = useStyles();
  const { templateId } = useParams();

  return (
    <>
      <Header />
      <div className={classes.templatesContainer}>
        <h1 className={classes.heading}>Template {templateId}</h1>
        {templateId === "1" && <TemplateFooterOne />}
        {templateId === "2" && <TemplateFooterTwo />}
        {templateId === "3" && <TemplateFooterThree />}
        {templateId === "4" && <TemplateFooterFour />}
        {templateId === "5" && <TemplateFooterFive />}
        {templateId === "6" && <TemplateFooterSix />}
        {templateId === "7" && <TemplateHeaderOne />}
        {templateId === "8" && <TemplateHeaderTwo />}
        {templateId === "9" && <TemplateHeaderThree />}
        {templateId === "10" && <TemplateHeaderFour />}
        {templateId === "11" && <TemplateHeaderFive />}
      </div>
    </>
  );
}

export default TemplateEditor;
