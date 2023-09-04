import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import TemplateFooterOne from "./footers/templateFooterOne";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  templatesContainer: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "800px",
    margin: "0 auto",
    height: "60vh", //change this to 100% when we have enough content
    padding: "2rem",
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
});

function Templates() {
  const classes = useStyles();
  const [selectedDetailsType, setSelectedDetailsType] = useState("personal"); // Default to personal

  const handleDetailsTypeChange = (event) => {
    setSelectedDetailsType(event.target.value);
  };

  return (
    <>
      <Header />
      <div className={classes.templatesContainer}>
        <h1 className={classes.heading}>Templates</h1>
        <div className={classes.selectContainer}>
          <label className={classes.selectLabel}>
            Select Details Type: &nbsp;
            <select
              value={selectedDetailsType}
              onChange={handleDetailsTypeChange}
              className={classes.select}
            >
              <option value="personal">Personal</option>
              <option value="work">Work</option>
            </select>
          </label>
        </div>
        <TemplateFooterOne detailsType={selectedDetailsType} />
      </div>
      <Footer />
    </>
  );
}

export default Templates;
