import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import edit from "../../assets/edit.svg";
import deleteicon from "../../assets/delete.svg";
import firestore, { auth } from "../../utils/Firestore";
import Fade from 'react-reveal/Fade';
import {
  getDoc,
  setDoc,
  doc,
  addDoc,
  collection,
  deleteDoc,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRef } from "react";

function ProjectsContent() {
  const classes = useStyles();

  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);
 const formRef = useRef(null);
  useEffect(() => {
    const userRef = doc(firestore, "users", auth.currentUser.uid);
    const projectsRef = collection(userRef, "projects");

    try {
      const unsubscribe = onSnapshot(projectsRef, (snapshot) => {
        const projectsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(projectsData);
      });

      return () => {
        unsubscribe();
      };
    } catch (error) {
      console.error("Error getting projects: ", error);
      console.error("Error code: ", error.code);
      console.error("Error message: ", error.message);
      console.error("Error stack: ", error.stack);
    }
  }, []);

  const createProject = async () => {
    setShowForm(true);
    setProjectName("");
    setButtonDisabled(true);
    const form = document.querySelector("form").id= "active";
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (projectName) {
      // Check if a project with the same name already exists
      const projectsRef = collection(
        firestore,
        `users/${auth.currentUser.uid}/projects`
      );
      const querySnapshot = await getDocs(
        query(projectsRef, where("name", "==", projectName))
      );

      if (querySnapshot.size > 0) {
        alert("A project with the same name already exists.");
      } else {
        // Create a new project document in the database with a unique ID
        await addDoc(projectsRef, {
          name: projectName,
          creationDate: new Date().toISOString().slice(0, 10),
        });

        // Reset the form and hide it
        setProjectName("");
        setButtonDisabled(false);
      }
    }
  };

  const deleteProject = async (projectId) => {
    // Delete the project document from the database
    await deleteDoc(
      doc(firestore, `users/${auth.currentUser.uid}/projects`, projectId)
    );
  };

  return (
    <div className={classes.body}>
      <h1>Projects</h1>
      <button className={classes.button} onClick={createProject}>
        Create Project
      </button>
        <form className={classes.form} onSubmit={handleSubmit}>
          <label className={classes.label}>
            Project Name:
            <input
              className={classes.input}
              type="text"
              value={projectName}
              onChange={handleProjectNameChange}
            />
          </label>
          <div>
            <button type="submit">Create</button>
            <button onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      <div className={classes.projectList}>
        {projects.map((project) => (
            <Fade bottom key={project.id}>
              <div className={classes.project}>
                <div className={classes.text}>
                  <h2>{project.name}</h2>
                  <p>Created on {project.creationDate}</p>
                </div>

                <div>
                  <button className={classes.editButton}>
                    <img src={edit} style={{ fill: "#fff !important" }} />
                  </button>
                  <button
                    className={classes.deleteButton}
                    onClick={() => deleteProject(project.id)}
                  >
                    <img src={deleteicon} style={{ fill: "#fff" }} />
                  </button>
                </div>
              </div>
            </Fade>
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
    minHeight: "calc(50vh - 2rem)",
    padding: "2rem",
    "& h1": {
      color: "#161925",
      fontFamily: "Delicious Handrawn, cursive",
      fontSize: "3rem",
    },
  },
  input: {
    marginTop: "0.5rem",
    padding: "0.25rem",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "0.25rem",
    backgroundColor: "#fff",
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0.25rem rgba(0, 0, 0, 0.5)",
    },
  },
  label: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.5rem",
    color: "black",
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
    },
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
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1rem",
    position: "relative",
    opacity: 0,
    top: "-5rem !important",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "0.5rem",
    boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
    transition: "opacity 0.2s ease-in-out, top 0.2s ease-in-out",
    "& label": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "0.5rem",
      "& input": {
        marginTop: "0.5rem",
        padding: "0.25rem",
        fontSize: "1rem",
        border: "1px solid #ccc",
        borderRadius: "0.25rem",
        "&:focus": {
          outline: "none",
          boxShadow: "0 0 0.25rem rgba(0, 0, 0, 0.5)",
        },
      },
    },
    "& button": {
      padding: "0.5rem 1rem",
      marginTop: "0.5rem",
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
    "&.hidden": {
      opacity: 0,
      pointerEvents: "none",
    },
  },
  "active": {
    opacity: 1,
    top: 0,
  },
});
