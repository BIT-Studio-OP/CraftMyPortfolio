import React, { useState } from "react";
import Header from "../header/Header";
import TemplateFooterOne from "./footers/templateFooterOne";
import { createUseStyles } from "react-jss";
import { useParams } from "react-router-dom";
import TemplateFooterTwo from "./footers/templateFooterTwo";
import TemplateFooterThree from "./footers/templateFooterThree";

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
      </div>
    </>
  );
}

export default TemplateEditor;
