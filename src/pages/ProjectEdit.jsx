import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import TemplateFooterOne from "../components/templates/footers/templateFooterOne";
import NavbarTemplate from "../components/templates/navbars/NavbarTemplate";

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column", // Make it a column layout
    color: "black",
  },
  rightSidebar: {
    width: "30%",
    padding: "20px",
    borderRight: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
  },
  leftEditor: {
    flex: 2, // Make the left side larger
    padding: "20px",
    display: "flex",
    flexDirection: "column", // Make it a column layout
  },
  template: {
    marginBottom: "20px",
    cursor: "pointer",
  },
  selectedTemplate: {
    backgroundColor: "#eee",
  },
  placeholder: {
    height: "300px",
    backgroundColor: "red",
    border: "1px dashed #ccc",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    color: "#999",
  },
  dropArea: {
    border: "2px dashed #ccc",
    minHeight: "300px",
    margin: "10px",
    padding: "10px",
    flex: 1, // Allow the footer to take up the remaining space
    display: "flex",
    flexDirection: "column", // Make it a column layout
  },
  footer: {
    flex: 1, // Allow the footer to take up the remaining space
  },
});

const ProjectEdit = () => {
  const classes = useStyles();
  const [selectedHeaderTemplates, setSelectedHeaderTemplates] = useState([]);
  const [selectedBodyTemplates, setSelectedBodyTemplates] = useState([]);
  const [selectedFooterTemplates, setSelectedFooterTemplates] = useState([]);

  const handleHeaderTemplateSelect = (e) => {
    const templateName = e.target.value;
    if (!selectedHeaderTemplates.includes(templateName)) {
      setSelectedHeaderTemplates([...selectedHeaderTemplates, templateName]);
    }
  };

  const handleBodyTemplateSelect = (e) => {
    const templateName = e.target.value;
    if (!selectedBodyTemplates.includes(templateName)) {
      setSelectedBodyTemplates([...selectedBodyTemplates, templateName]);
    }
  };

  const handleFooterTempalteSelect = (e) => {
    const templateName = e.target.value;
    if (!selectedFooterTemplates.includes(templateName)) {
      setSelectedFooterTemplates([...selectedFooterTemplates, templateName]);
    }
  };

  const removeHeaderTemplate = (templateName) => {
    setSelectedHeaderTemplates(
      selectedHeaderTemplates.filter((template) => template !== templateName)
    );
  };

  const removeBodyTemplate = (templateName) => {
    setSelectedBodyTemplates(
      selectedBodyTemplates.filter((template) => template !== templateName)
    );
  };

  const removeFooterTemplate = (templateName) => {
    setSelectedFooterTemplates(
      selectedFooterTemplates.filter((template) => template !== templateName)
    );
  };

  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.rightSidebar}>
          <h3>Select Header Templates</h3>
          <select onChange={handleHeaderTemplateSelect}>
            <option value="none">Select a header template...</option>
            <option value="HeaderTemplate">Header Template</option>
            {/* Add more header templates as needed */}
          </select>
          <h3>Select Body Templates</h3>
          <select onChange={handleBodyTemplateSelect}>
            <option value="none">Select a body template...</option>
            <option value="BodyTemplate">Body Template</option>
            {/* Add more body templates as needed */}
          </select>
          <h3>Select footer Templates</h3>
          <select onChange={handleFooterTempalteSelect}>
            <option value="none">Select a footer template...</option>
            <option value="FooterTemplate">Footer Template</option>
          </select>
        </div>
        <div className={classes.leftEditor}>
          <div className={classes.footer}>
            <div className={classes.text}>Edit Project Screen</div>
            <div className={classes.droppableArea}>
              <div className={classes.text}>Header Templates Goes Here</div>
              <div className={classes.dropArea}>
                {selectedHeaderTemplates.map((templateName) => (
                  <NavbarTemplate
                    key={templateName}
                    templateName={templateName}
                    removeTemplate={removeHeaderTemplate}
                  />
                ))}
              </div>
              <div className={classes.text}>Body Templates Goes Here</div>
              <div className={classes.dropArea}>
                {selectedBodyTemplates.map((templateName) => (
                  <TemplateFooterOne
                    key={templateName}
                    templateName={templateName}
                    removeTemplate={removeBodyTemplate}
                  />
                ))}
              </div>
              <div className={classes.text}>Footer Templates Goes Here</div>
              <div className={classes.dropArea}>
                {selectedFooterTemplates.map((templateName) => (
                  <TemplateFooterOne
                    key={templateName}
                    templateName={templateName}
                    removeTemplate={removeFooterTemplate}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectEdit;
