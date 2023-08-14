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
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    height: "80vh",
    width: "90%",
    margin: "0 auto",
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
    backgroundColor: "#f9f9f9",
    borderRadius: "15px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
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
});

function DetailsContent() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [collectionType, setCollectionType] = useState("personal");
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
          portfolio: portfolio,
        },
        { merge: true }
      );

      console.log("User details added or updated");

      setName("");
      setEmail("");
      setPortfolio("");
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
      setPortfolio(details.portfolio);
    }
  }, [details]);

  const handleCollectionTypeChange = (event) => {
    setCollectionType(event.target.value);
    setName("");
    setEmail("");
    setPortfolio("");
  };

  return (
    <>
      <div className={classes.main}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.titleimg}>
            <h2>Your Details</h2>
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
              type="phone"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className={classes.input}
            />
          </div>
          <br />
          <h3>About you:</h3>
          <textarea
            type="text"
            placeholder="A little about yourself"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
            className={classes.input}
          />
          <br />
          <button type="submit" className={classes.submitButton}>
            Submit
          </button>
        </form>

        <form onSubmit={handleSubmit} className={classes.form}>
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
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
          <br />
          <button type="submit" className={classes.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default DetailsContent;
