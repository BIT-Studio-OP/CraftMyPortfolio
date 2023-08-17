import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../utils/Firestore";
import { getAuth } from "firebase/auth";
import Header from "../header/Header";
import { useUserDetails } from "../getDetails/getDetails";
import "../../fonts.css";
import businessCard from "../../assets/business-card.png";
import resume from "../../assets/resume.png";

const auth = getAuth();

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    color: "black",
    height: "auto",
    width: "60%",
    margin: "0 auto",
    "& h2": {
      fontFamily: "Delicious Handrawn, cursive",
      fontSize: "2rem",
      color: "black",
    },
    "& h3": {
      fontFamily: "Raleway, sans-serif",
    },
    "& p": {
      fontFamily: "Raleway, sans-serif",
    },
  },
  body: {
    color: "black",
    "& h2": {
      fontFamily: "Delicious Handrawn, cursive",
      fontSize: "2rem",
      color: "black",
    },
    "& h3": {
      fontFamily: "Raleway, sans-serif",
    },
    "& p": {
      fontFamily: "Raleway, sans-serif",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "1rem",
    "& h2": {
      fontFamily: "Delicious Handrawn, cursive",
      fontSize: "2rem",
    },
    "& label": {
      fontFamily: "Raleway, sans-serif",
    },
    "& h3": {
      fontFamily: "Raleway, sans-serif",
    },
  },
  titleimg: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "60%",
    "& img": {
      maxWidth: "70px",
      paddingLeft: "1rem",
    }
  },
  input: {
    color: "black",
    backgroundColor: "#f0f0f0",
    borderColor: "#666",
    borderRadius: "10px",
    width: "100%",
    padding: "0.5rem",
    margin: "0.5rem 0",
    border: "1px solid #ddd",
  },
  skillinput: {
    color: "black",
    backgroundColor: "#f0f0f0",
    borderColor: "#666",
    borderRadius: "10px",
    width: "60%",
    padding: "0.5rem",
    margin: "0.5rem 0",
    border: "1px solid #ddd",
  },
  submitButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    backgroundColor: "var(--primary-colour)",
    color: "white",
    borderRadius: "0.5rem",
    marginTop: "1rem",
    width: "100%",
    padding: "1rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "var(--secondary-colour)",
    },
  },
  namesdiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "& input": {
      width: "48%",
    },
  },
  closebutton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    transition: "0.5s all ease-in-out",
    "&:hover": {
      color: "red",
      transition: "0.5s all ease-in-out",
      transform: "scale(1.1)",
    }
  }
});

function DetailsContent() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [age, setAge] = useState("");
  const [hometown , setHometown] = useState("");
  const [skills, setSkills] = useState([]); // Array of strings
  const [skill, setSkill] = useState(""); // String
  const [jobs, setJobs] = useState([]); // Array of strings
  const [job, setJob] = useState(""); // String
  const [jobname, setJobName] = useState(""); // String
  const [collectionType, setCollectionType] = useState("personal");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const details = useUserDetails(collectionType); // Fetch details based on collection type

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userRef = doc(firestore, "users", auth.currentUser.uid);

    // Determine the collection to use based on the dropdown selection
    const detailsCollection =
      collectionType === "personal" ? "DetailsPersonal" : "DetailsWork";

    const userDetailsDocRef = doc(
      userRef,
      detailsCollection,
      auth.currentUser.uid
    );

    try {
      await setDoc(
        userDetailsDocRef,
        {
          name: name,
          email: email.toString(),
        },
        { merge: true }
      );

      console.log("User details added or updated");

      setName("");
      setEmail("");
    } catch (error) {
      console.error("Error adding or updating user details: ", error);
      console.error("Error code: ", error.code);
      console.error("Error message: ", error.message);
      console.error("Error stack: ", error.stack);
    }
  };

  useEffect(() => {
    if (details) {
      setName(details.name);
      setEmail(details.email);
    }
  }, [details]);

  const handleCollectionTypeChange = (event) => {
    setCollectionType(event.target.value);
    setName("");
    setEmail("");
  };

  const handleAddSkill = (event) => {
    event.preventDefault();
    if (skill.trim() !== "") {
      setSkills((prevSkills) => [...prevSkills, skill.trim()]);
      setSkill("");
    }
  };

  const handleDeleteSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const handleAddJob = (job) => {
    if (job.trim() !== "") {
      setJobs((prevJobs) => [...prevJobs, job.trim()]);
      setJob("");
    }
  };

  const handleDeleteJob = (job) => {
    setJobs(jobs.filter((s) => s !== job));
  };

  const addJob = (event) => {
    //send title to handleAddJob for list
    console.log(event)
    handleAddJob(event);

    //create job object in backend
  }
  return (
    <div className={classes.body}>
    <h2>Your Details</h2>
    <h3>Fill in your details here to build your profile to be loaded straight into your templates</h3>
      <div className={classes.main}>
        
        
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.titleimg}>
            <h2>Personal Details </h2>
            <img src={businessCard} alt="business card" />
          </div>
          <label>Name:</label>
          <div className={classes.namesdiv}>
            <input
              className={`${classes.names} ${classes.input}`}
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className={`${classes.names} ${classes.input}`}
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <br />
          <label>Contact Details:</label>
          <div className={classes.namesdiv}>
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className={classes.input}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className={classes.input}
            />
          </div>
          <br />
          <h3>About you:</h3>
          <input type="date" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required className={classes.input} />
          <input type="text" placeholder="Hometown" value={hometown} onChange={(e) => setHometown(e.target.value)} required className={classes.input} />
          <textarea
            type="text"
            placeholder="A little about yourself"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
            className={classes.input}
          />
          <br />
          <div>
            <h3>Skills:</h3>
              <input
                type="text"
                placeholder="Type a skill"
                value={skill}
                onChange={(event) => setSkill(event.target.value)}
                className={classes.skillinput}
              />
              <button type="submit" onClick={handleAddSkill}>
                Add
              </button>
            </div>
          <div className={classes.skills}>
            {skills.map((skill) => (
              <span key={skill}>
                {skill}
                <button className={classes.closebutton} onClick={() => handleDeleteSkill(skill)}>x</button>
              </span>
            ))}
          </div>
          <br />
          <h3>Links:</h3>
            <input
              type="url"
              placeholder="LinkedIn"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              className={classes.input}
            />
            <input
              type="url"
              placeholder="Github"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
              className={classes.input}
            />
          <button type="submit" className={classes.submitButton}>
            Update
          </button>
        </form>

        <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.titleimg}>
            <h2>Work History</h2>
            <img src={resume} alt="resume" />
          </div>
          <label>Job Details:</label>
          {/* <div className={classes.namesdiv}> */}
            <input
              className={`${classes.names} ${classes.input}`}
              type="text"
              placeholder="Job Title"
              value={jobname}
              onChange={(e) => setJobName(e.target.value)}
              required
            />
            {/* <input
              className={`${classes.names} ${classes.input}`}
              type="text"
              placeholder="Company Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <br />
          <label>Start and End Date:</label>
          <div className={classes.namesdiv}>
            <input
              type="date"
              value={email}
              placeholder="Start Date"
              onChange={(e) => setEmail(e.target.value)}
              required
              className={classes.input}
            />
            <input
              type="date"
              placeholder="End Date"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className={classes.input}
            />
          </div>
          <br />
          <h3>About The Job:</h3>
          <textarea
            type="text"
            placeholder="A little about the Job, your responsibilities, and what skills you learned"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
            className={classes.input}
          />
          <br /> */}
          <button type="submit" onClick={(e) => addJob(jobname)} className={classes.submitButton}>
            Submit
          </button>
          <div className={classes.jobs}>
            {jobs.map((job) => (
              <span key={job}>
                {job}
                <button className={classes.closebutton} onClick={() => handleDeleteJob(job)}>x</button>
              </span>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default DetailsContent;
