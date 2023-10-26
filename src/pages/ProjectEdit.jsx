import React, { useState, useRef } from "react";
import { createUseStyles } from "react-jss";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import TemplateFooterOne from "../components/templates/footers/templateFooterOne";
import NavbarTemplate from "../components/templates/navbars/NavbarTemplate";
import { useStyles as useNavbarStyles } from "../components/templates/navbars/NavbarTemplateStyles";
import ReactDOMServer from "react-dom/server";

const useStyles = createUseStyles({
  container: {
    width: "100%",
    height: "100%",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
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
    flex: 2,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
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
    backgroundColor: "gray",
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
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  footer: {
    flex: 1,
  },
  bodyContent: {
    flex: 1,
    backgroundColor: "white",
    border: "1px solid #ccc",
    padding: "20px",
  },
  bodyOption: {
    marginBottom: "10px",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(650px, 1fr))",
    gap: "20px",
  },
  gridItem: {
    backgroundColor: "lightgray",
    padding: "10px",
    border: "1px solid #ccc",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  gridImage: {
    width: "100%",
    height: "100px", // Set the desired image height
    objectFit: "cover",
    marginBottom: "10px",
  },
  gridDescription: {
    textAlign: "center",
    padding: "5px",
    border: "1px dashed #ccc",
  },
  select: {
    display: "flex",
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    color: "#444",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginBottom: "10px",
  },
  droppableArea: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  descriptionModal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  modalContent: {
    background: "white",
    padding: "20px",
    borderRadius: "5px",
  },
  button: {
    width: "15%",
    alignSelf: "center",
    padding: "0.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    background: "#3b82f6",
    borderRadius: "0.25rem",
    boxShadow: "0 0 0.25rem rgba(0, 0, 0, 0.5)",
    transition: "background 0.2s ease-in-out",
    "&:hover": {
      background: "#2563eb",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
    },
  },
  header: {
    backgroundColor: "lightblue",
    padding: "10px",
    borderBottom: "1px solid #ccc",
  },
});

const ProjectEdit = () => {
  const classes = useStyles();
  const [selectedHeaderTemplates, setSelectedHeaderTemplates] = useState([]);
  const [selectedFooterTemplates, setSelectedFooterTemplates] = useState([]);
  const [selectedBodyOption, setSelectedBodyOption] = useState("blank");
  const [gridRows, setGridRows] = useState(3);
  const [gridCols, setGridCols] = useState(1);
  const [gridDescriptions, setGridDescriptions] = useState(
    Array.from({ length: gridRows * gridCols }, () => "")
  );
  const handleHeaderTemplateSelect = (e) => {
    const templateName = e.target.value;
    if (!selectedHeaderTemplates.includes(templateName)) {
      setSelectedHeaderTemplates([...selectedHeaderTemplates, templateName]);
    }
  };

  const handleFooterTemplateSelect = (e) => {
    const templateName = e.target.value;
    if (!selectedFooterTemplates.includes(templateName)) {
      setSelectedFooterTemplates([...selectedFooterTemplates, templateName]);
    }
  };

  const handleBodyOptionSelect = (e) => {
    setSelectedBodyOption(e.target.value);
  };

  const removeHeaderTemplate = (templateName) => {
    setSelectedHeaderTemplates(
      selectedHeaderTemplates.filter((template) => template !== templateName)
    );
  };

  const removeFooterTemplate = (templateName) => {
    setSelectedFooterTemplates(
      selectedFooterTemplates.filter((template) => template !== templateName)
    );
  };

  const handleGridRowsChange = (e) => {
    const newGridRows = parseInt(e.target.value, 10);
    setGridRows(newGridRows);

    // If the number of rows is increased, add descriptions for new grid items
    if (newGridRows > gridRows) {
      setGridDescriptions((descriptions) => [
        ...descriptions,
        ...Array.from(
          { length: gridCols * (newGridRows - gridRows) },
          () => ""
        ),
      ]);
    }
  };

  const handleGridColsChange = (e) => {
    setGridCols(parseInt(e.target.value, 10));
  };

  const generateHTML = () => {
    // Render the selected header templates

    // not triggering
    const headerContent = selectedHeaderTemplates
      .map((templateName) => {
        console.log("templateName", templateName);
        switch (templateName) {
          case "HeaderTemplate":
            return ReactDOMServer.renderToString(<NavbarTemplate />);
          // Add more cases as needed
          default:
            return "";
        }
      })
      .join("");

    // Render the selected footer templates
    const footerContent = selectedFooterTemplates
      .map((templateName) => {
        switch (templateName) {
          case "FooterTemplate":
            return ReactDOMServer.renderToString(<TemplateFooterOne />);
          // Add more cases as needed
          default:
            return "";
        }
      })
      .join("");

    // Define your HTML content
    const htmlContent = `
      <html>
      <head>
        <style>
          /* Add your CSS styles here */
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;900&display=swap');
          .header {  border-bottom: 1px solid #ccc; }
          .footer {  border-top: 1px solid #ccc; }
          body { font-family: 'Montserrat', sans-serif; margin: 0 !important;}
          /* ...other styles... */
          </style>
          </head>
          <body>
            <div class="header">
              ${headerContent}
            </div>
            <div class="body">
              ${
                selectedBodyOption === "blank"
                  ? `<div class="placeholder">Blank White Body (default)</div>`
                  : selectedBodyOption === "grid"
                  ? `<div class="gridContainer">
                  ${Array.from(
                    { length: gridRows * gridCols },
                    (_, index) => `
                    <div class="gridItem">
                      <img src="" alt="Grid Item Image" class="gridImage" />
                      <p class="gridDescription">${gridDescriptions[index]}</p>
                    </div>
                  `
                  ).join("")}
                </div>`
                  : selectedBodyOption === "carousel"
                  ? `<div class="bodyOption">Carousel content</div>`
                  : ""
              }
            </div>
            <div class="footer">
              ${footerContent}
            </div>
          </body>
          </html>
        `;

    // Create a Blob with the HTML content
    const blob = new Blob([htmlContent], { type: "text/html" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a link for downloading the HTML file
    const a = document.createElement("a");
    a.href = url;
    a.download = "generated-page.html";
    a.click();
  };

  return (
    <>
      <Header />
      <div className={classes.container}>
        <div className={classes.rightSidebar}>
          <h3>Select Header Templates</h3>
          <select
            onChange={handleHeaderTemplateSelect}
            className={classes.select}
          >
            <option value="none">Select a header template...</option>
            <option value="HeaderTemplate">Header Template</option>
            {/* Add more header templates as needed */}
          </select>

          <h3>Select Body Options</h3>
          <select onChange={handleBodyOptionSelect} className={classes.select}>
            <option value="blank">Blank Body</option>
            <option value="grid">Grid</option>
            <option value="carousel">Carousel</option>
            {/* Add more body options as needed */}
          </select>

          {selectedBodyOption === "grid" && (
            <>
              <label>Number of Rows:</label>
              <input
                type="number"
                min={3}
                value={gridRows}
                onChange={handleGridRowsChange}
                className={classes.select}
              />
              <label>Number of Columns:</label>
              <input
                type="number"
                min={1}
                value={gridCols}
                onChange={handleGridColsChange}
                className={classes.select}
              />
            </>
          )}
          <h3>Select Footer Templates</h3>
          <select
            onChange={handleFooterTemplateSelect}
            className={classes.select}
          >
            <option value="none">Select a footer template...</option>
            <option value="FooterTemplate">Footer Template</option>
          </select>
        </div>
        <div className={classes.leftEditor}>
          <div className={classes.footer}>
            <div className={classes.text}>Edit Project Screen</div>
            <div className={classes.droppableArea}>
              <div className={classes.text}>Header Templates Goes Here</div>
              <div className={`${classes.dropArea} ${classes.navParent}`}>
                {" "}
                {selectedHeaderTemplates.map((templateName) => (
                  <NavbarTemplate
                    key={templateName}
                    templateName={templateName}
                    removeTemplate={removeHeaderTemplate}
                  />
                ))}
              </div>
              <div className={classes.text}>Body Content Goes Here</div>
              <div className={classes.bodyContent}>
                {selectedBodyOption === "blank" && (
                  <div className={classes.placeholder}>
                    Blank White Body (default)
                  </div>
                )}
                {selectedBodyOption === "grid" && (
                  <div className={classes.gridContainer}>
                    {Array.from({ length: gridRows * gridCols }, (_, index) => (
                      <div key={index} className={classes.gridItem}>
                        <img
                          src=""
                          alt="Grid Item Image"
                          className={classes.gridImage}
                        />
                        <p className={classes.gridDescription}>
                          {gridDescriptions[index]}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {selectedBodyOption === "carousel" && (
                  <div className={classes.bodyOption}>
                    {/* Render your carousel content here */}
                  </div>
                )}
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
        <button className={classes.button} onClick={generateHTML}>
          Generate HTML
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ProjectEdit;
