import React, { useState } from "react";
import Header from "../header/Header";
import TemplateFooterOne from "./footers/templateFooterOne";
import TemplateFooterTwo from "./footers/templateFooterTwo";
import TemplateFooterThree from "./footers/templateFooterThree";
import { createUseStyles } from "react-jss";

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

function Templates() {
  const classes = useStyles();
  const [selectedDetailsType, setSelectedDetailsType] = useState(); // Default to personal
  const myList = [1, 2, 3, 4];

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
        <div className={classes.templatesColumn}>
          <a href="/templates/1">
            {" "}
            <TemplateFooterOne detailsType={selectedDetailsType} />
          </a>
          <TemplateFooterTwo detailsType={selectedDetailsType} />
          <TemplateFooterThree detailsType={selectedDetailsType} />
        </div>
      </div>
    </>
  );
}

export default Templates;
