import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import edit from "../../assets/edit.svg";
import deleteicon from "../../assets/delete.svg";
import firestore, { auth } from "../../utils/Firestore";
import { getDoc, setDoc, doc, addDoc, collection } from "firebase/firestore";

function ProjectsContent() {
  const classes = useStyles();

  // Sample project data
  const projects = [
    {
      name: "Project 1",
      creationDate: "2022-01-01",
    },
    {
      name: "Project 2",
      creationDate: "2022-01-02",
    },
    {
      name: "Project 3",
      creationDate: "2022-01-03",
    },
  ];

  const createProject = async () => {
    // Create a new project document in the database with a unique ID
    await addDoc(collection(firestore, `users/${auth.currentUser.uid}/projects`), {
      name: "New Project",
      creationDate: new Date().toISOString().slice(0, 10),
    });
  };

  return (
    <div className={classes.body}>
      <h1>Projects</h1>
      <button className={classes.button} onClick={createProject}>
        Create Project
      </button>
      <div className={classes.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={classes.project}>
            <div className={classes.text}>
              <h2>{project.name}</h2>
              <p>Created on {project.creationDate}</p>
            </div>
            
            <div>
              <button className={classes.editButton}>
                <img src={edit} style={{ fill: "#fff !important" }} />
              </button>
              <button className={classes.deleteButton}>
                <img src={deleteicon} style={{ fill: "#fff" }} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsContent;

const useStyles = createUseStyles({
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    "& h1": {
      color: "#161925",
      fontFamily: "Delicious Handrawn, cursive",
      fontSize: "3rem",
    },
  },
  text: {
    "& h2": {
      fontSize: "1.5rem",
      fontFamily: "Raleway, sans-serif",
      fontWeight: "500",
      color: "#161925",
    },
    "& p": {
      fontSize: "1rem",
      fontFamily: "Raleway, sans-serif",
      fontWeight: "300",
      color: "#161925",
    }
  },
  button: {
    display: "inline-block",
    padding: "0.5rem 1rem",
    marginTop: "1rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    background: "#3b82f6",
    borderRadius: "0.25rem",
    boxShadow: "0 0 0.25rem rgba(0, 0, 0, 0.5)",
    transition: "background 0.2s ease-in-out",
    textDecoration: "none",
    "&:hover": {
      background: "#2563eb",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
    },
  },
  projectList: {
    marginTop: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  project: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    padding: "1rem",
    margin: "1rem",
    border: "1px solid #ccc",
    borderRadius: "0.5rem",
    boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
    "& h2": {
      fontSize: "1.5rem",
      margin: "0",
    },
    "& p": {
      margin: "0",
    },
  },
  editButton: {
    padding: "0.5rem 1rem",
    marginRight: "1rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    background: "#3b82f6",
    borderRadius: "0.25rem",
    boxShadow: "0 0 0.25rem rgba(0, 0, 0, 0.5)",
    transition: "background 0.2s ease-in-out",
    textDecoration: "none",
    "&:hover": {
      background: "#2563eb",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
    },
  },
  deleteButton: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    background: "#f44336",
    borderRadius: "0.25rem",
    boxShadow: "0 0 0.25rem rgba(0, 0, 0, 0.5)",
    transition: "background 0.2s ease-in-out",
    textDecoration: "none",
    "&:hover": {
      background: "#d32f2f",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
    },
  },
});