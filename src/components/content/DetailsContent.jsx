import { useState, useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../../utils/Firestore";
import { getAuth } from "firebase/auth";
import { useUserDetails } from "../getDetails/getDetails";
import "../../fonts.css";
import WorkHistoryForm from "./WorkHistoryForm";
import PersonalDetailsForm from "./PersonalDetailsForm";
import handleGeneratePDF from "./HandleGeneratePDF";
import useStyles from "./useStylesDetails";

const auth = getAuth();

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
  const [skills, setSkills] = useState([]);
  const [skill, setSkill] = useState("");
  const [jobs, setJobs] = useState([]);
  const [job, setJob] = useState("");
  const [jobname, setJobName] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [collectionType, setCollectionType] = useState("personal");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const details = useUserDetails(collectionType);
  const [currentlyEmployed, setCurrentlyEmployed] = useState(false);
  const [ageFocused, setAgeFocused] = useState(false);

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
  const CallGeneratePDF = () => {
    handleGeneratePDF({
      name,
      firstName,
      lastName,
      email,
      phone,
      age,
      hometown,
      about,
      skills,
      linkedin,
      github,
      jobs,
    });
  };

  return (
    <div className={classes.body}>
      <h2>Your Details</h2>
      <h3>
        Fill in your details here to build your profile to be loaded straight
        into your templates
      </h3>
      <div className={classes.main}>
        <PersonalDetailsForm
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          age={age}
          setAge={setAge}
          hometown={hometown}
          setHometown={setHometown}
          about={about}
          setAbout={setAbout}
          skills={skills}
          setSkills={setSkills}
          skill={skill}
          setSkill={setSkill}
          handleAddSkill={handleAddSkill}
          handleDeleteSkill={handleDeleteSkill}
          linkedin={linkedin}
          setLinkedin={setLinkedin}
          github={github}
          setGithub={setGithub}
          handlePersonalDetailsSubmit={handlePersonalDetailsSubmit}
          classes={classes}
          collectionType={collectionType}
          setCollectionType={setCollectionType}
          ageFocused={ageFocused}
          setAgeFocused={setAgeFocused}
        />

        <WorkHistoryForm
          jobs={jobs}
          setJobs={setJobs}
          job={job}
          setJob={setJob}
          jobname={jobname}
          setJobName={setJobName}
          company={company}
          setCompany={setCompany}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
          handleAddJob={handleAddJob}
          handleDeleteJob={handleDeleteJob}
          handleWorkHistorySubmit={handleWorkHistorySubmit}
          currentlyEmployed={currentlyEmployed}
          setCurrentlyEmployed={setCurrentlyEmployed}
          handleCurrentlyEmployedChange={handleCurrentlyEmployedChange}
          classes={classes}
        />
      </div>
      <br />
      {details != null ? (
        <button className={classes.submitButton} style={{
          width: "30%",
        }} onClick={CallGeneratePDF}>
          Generate PDF CV
        </button>
      ) : (
        <button
          style={{
            backgroundColor: "grey",
            color: "white",
          }}
          disabled
        >
          Generate PDF CV
        </button>
      )}
    </div>
  );
}

export default DetailsContent;
