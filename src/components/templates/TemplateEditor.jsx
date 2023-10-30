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
import ReactDOMServer from "react-dom/server";
import firestore from "../../utils/Firestore";
import { setDoc, doc, addDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

  // useEffect(() => {
  //   const fetchDetails = async () => {
  //     const collectionPath = `users/${auth.currentUser.uid}/DetailsPersonal/${auth.currentUser.uid}`;
  //     const userRef = doc(firestore, ...collectionPath.split("/"));

  //     const docSnap = await getDoc(userRef);
  //     console.log("fetchDetails", docSnap.data());

  //     if (docSnap.exists()) {
  //       setDetails(docSnap.data());
  //     } else {
  //       console.log("No such document!");
  //       setDetails("");
  //     }
  //   };

  //   fetchDetails();
  // }, []);

  const addToProjects = async (htmlString) => {
    const auth = getAuth();
    const userRef = doc(firestore, "users", auth.currentUser.uid);
    const userTemplatesCollectionRef = collection(
      userRef,
      "Templates",
    );

    try {
      const template = {
        html: htmlString,
        createdAt: new Date(),
      };

      await addDoc(userTemplatesCollectionRef, template);

      console.log("Template added");
    } catch (error) {
      console.log(error);
    }
  };

  const exportToProjects = (templateId) => {
    console.log(templateId);
    let htmlString = "";
    switch (templateId) {
      case "1":
        htmlString = ReactDOMServer.renderToString(<TemplateFooterOne />);
        console.log(htmlString);
        addToProjects(htmlString);
        break;
      case "2":
        htmlString = ReactDOMServer.renderToString(<TemplateFooterTwo />);
        console.log(htmlString);
        addToProjects(htmlString);
        break;
      case "3":
        htmlString = ReactDOMServer.renderToString(<TemplateFooterThree />);
        console.log(htmlString);
        addToProjects(htmlString);
        break;
      case "4":
        htmlString = ReactDOMServer.renderToString(<TemplateFooterFour />);
        console.log(htmlString);
        addToProjects(htmlString);
        break;
      case "5":
        htmlString = ReactDOMServer.renderToString(<TemplateFooterFive />);
        console.log(htmlString);
        addToProjects(htmlString);
        break;
      case "6":
        htmlString = ReactDOMServer.renderToString(<TemplateFooterSix />);
        console.log(htmlString);
        addToProjects(htmlString);
        break;
      case "7":
        htmlString = ReactDOMServer.renderToString(<TemplateHeaderOne />);
        console.log(htmlString);
        addToProjects(htmlString);
        break;
      case "8":
        htmlString = ReactDOMServer.renderToString(<TemplateHeaderTwo />);
        console.log(htmlString);
        addToProjects(htmlString);
        break;
      case "9":
        htmlString = ReactDOMServer.renderToString(<TemplateHeaderThree />);
        console.log(htmlString);
        addToProjects(htmlString);
        break;
      case "10":
        htmlString = ReactDOMServer.renderToString(<TemplateHeaderFour />);
        console.log(htmlString);
        addToProjects(htmlString);
        break;
      case "11":
        htmlString = ReactDOMServer.renderToString(<TemplateHeaderFive />);
        console.log(htmlString);
        addToProjects(htmlString);
        break;
      default:
        return <div>Invalid template ID</div>;
    }
  };

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
      <button onClick={() => exportToProjects(templateId)} className="btn btn-primary">
        Export to Projects
      </button>
    </>
  );
}

export default TemplateEditor;
