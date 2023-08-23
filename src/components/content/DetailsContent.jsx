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
    },
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
    },
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    fontFamily: "Raleway, sans-serif",
    fontSize: "1rem",
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
    marginLeft: "1rem",
    color: "black",

    "& input": {
      marginRight: "0.5rem",
    },
  },
  disableEndDate: {
    backgroundColor: "f0f0f0",
    color: "black",
    width: "50%",
    padding: "0.5rem",
    margin: "0.5rem 0",
    border: "1px solid #ddd",
    borderRadius: "10px",
  },
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
  const [hometown, setHometown] = useState("");
  const [skills, setSkills] = useState([]); // Array of strings
  const [skill, setSkill] = useState(""); // String
  const [jobs, setJobs] = useState([]); // Array of strings
  const [job, setJob] = useState(""); // String
  const [jobname, setJobName] = useState(""); // String
  const [company, setCompany] = useState(""); // String
  const [startDate, setStartDate] = useState(""); // String
  const [endDate, setEndDate] = useState(""); // String
  const [jobDescription, setJobDescription] = useState(""); // String
  const [collectionType, setCollectionType] = useState("personal");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [ageFocused, setAgeFocused] = useState(false);
  const details = useUserDetails(collectionType); // Fetch details based on collection type
  const [currentlyEmployed, setCurrentlyEmployed] = useState(false);

  const handlePersonalDetailsSubmit = async (event) => {
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
      const details = {
        name: {
          first: firstName,
          last: lastName,
        },
        email: email,
        phone: phone,
        age: age,
        hometown: hometown,
        about: about,
        skills: skills,
        linkedin: linkedin,
        github: github,
        jobs: jobs,
      };

      await setDoc(userDetailsDocRef, details, { merge: true });

      console.log("User details added or updated");

      // Clear form fields after submission
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setAge("");
      setHometown("");
      setAbout("");
      setSkills([]);
      setLinkedin("");
      setGithub("");
      window.location.reload();
    } catch (error) {
      console.error("Error adding or updating user details: ", error);
      console.error("Error code: ", error.code);
      console.error("Error message: ", error.message);
      console.error("Error stack: ", error.stack);
    }
  };

  const handleWorkHistorySubmit = (event) => {
    event.preventDefault();

    if (jobname.trim() !== "" && company.trim() !== "") {
      const newJob = {
        job: jobname,
        company: company,
        startDate: startDate,
        endDate: endDate,
        jobDescription: jobDescription,
      };

      // Check if the job already exists before adding
      if (
        !jobs.some(
          (job) => job.job === newJob.job && job.company === newJob.company
        )
      ) {
        setJobs((prevJobs) => [...prevJobs, newJob]);
      }

      // Clear job-related fields after adding a job
      setJobName("");
      setCompany("");
      setStartDate("");
      setEndDate("");
      setJobDescription("");
    }
  };

  useEffect(() => {
    if (details) {
      setName(details.name.first);
      setFirstName(details.name.first);
      setLastName(details.name.last);
      setEmail(details.email);
      setPhone(details.phone);
      setAge(details.age);
      setHometown(details.hometown);
      setAbout(details.about);
      setSkills(details.skills);
      setLinkedin(details.linkedin);
      setGithub(details.github);
      setJobs(details.jobs);
    }
  }, [details]);

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

  const handleAddJob = () => {
    if (jobname.trim() !== "" && company.trim() !== "") {
      const newJob = {
        job: jobname,
        company: company,
        startDate: startDate,
        endDate: endDate,
        jobDescription: jobDescription,
      };
      setJobs((prevJobs) => [...(prevJobs ?? []), newJob]);
    }
  };

  const handleDeleteJob = (index) => {
    setJobs((prevJobs) => prevJobs.filter((_, i) => i !== index));
  };

  const handleCurrentlyEmployedChange = (event) => {
    setCurrentlyEmployed(event.target.checked);
    if (event.target.checked) {
      setEndDate("current");
    } else {
      setEndDate(endDate);
    }
  };

  return (
    <div className={classes.body}>
      <h2>Your Details</h2>
      <h3>
        Fill in your details here to build your profile to be loaded straight
        into your templates
      </h3>
      <div className={classes.main}>
        <form onSubmit={handlePersonalDetailsSubmit} className={classes.form}>
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
          <input
            type={ageFocused ? "date" : "text"}
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            onFocus={() => setAgeFocused(true)}
            onBlur={() => setAgeFocused(false)}
            required
            className={classes.input}
          />
          <input
            type="text"
            placeholder="Hometown"
            value={hometown}
            onChange={(e) => setHometown(e.target.value)}
            required
            className={classes.input}
          />
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
                <button
                  className={classes.closebutton}
                  onClick={() => handleDeleteSkill(skill)}
                >
                  x
                </button>
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

        <form onSubmit={handleWorkHistorySubmit} className={classes.form}>
          <div className={classes.titleimg}>
            <h2>Work History</h2>
            <img src={resume} alt="resume" />
          </div>
          <label>Job Details:</label>
          <div className={classes.namesdiv}>
            <input
              className={`${classes.names} ${classes.input}`}
              type="text"
              placeholder="Job Title"
              value={jobname}
              onChange={(e) => setJobName(e.target.value)}
              required
            />
            <input
              className={`${classes.names} ${classes.input}`}
              type="text"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
          </div>
          <br />
          <label>Start and End Date:</label>
          <div className={classes.namesdiv}>
            <input
              type="date"
              value={startDate}
              placeholder="Start Date"
              onChange={(e) => setStartDate(e.target.value)}
              required
              className={classes.input}
            />
            <div className={classes.namesdiv}>
              <label className={classes.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={currentlyEmployed}
                  onChange={handleCurrentlyEmployedChange}
                  className={classes.checkboxInput}
                />
                Current
              </label>

              {!currentlyEmployed ? (
                <input
                  type="date"
                  placeholder="End Date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                  className={classes.input}
                />
              ) : (
                <input
                  type="date"
                  placeholder="End Date"
                  className={classes.disableEndDate}
                  disabled
                />
              )}
            </div>
          </div>
          <br />
          <h3>About The Job:</h3>
          <textarea
            type="text"
            placeholder="A little about the Job, your responsibilities, and what skills you learned"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
            className={classes.input}
          />
          <br />
          <button
            type="button"
            onClick={handleAddJob}
            className={classes.submitButton}
          >
            Add Job
          </button>
          <div className={classes.jobs}>
            {jobs === undefined ? (
              <p>No jobs yet.</p>
            ) : (
              jobs.map((job, index) => (
                <div key={index}>
                  <span>
                    {job.job} at {job.company} <br />
                    from
                    <br />
                    {job.startDate}---{job.endDate}
                    <button
                      className={classes.closebutton}
                      onClick={() => handleDeleteJob(index)}
                    >
                      x
                    </button>
                  </span>
                </div>
              ))
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default DetailsContent;
