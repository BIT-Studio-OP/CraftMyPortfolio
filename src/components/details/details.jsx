import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import {
  doc,
  collection,
  addDoc,
  updateDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../../utils/Firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const useStyles = createUseStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--primary-colour)",
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
    borderRadius: "4px",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
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
});

function Details() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [collectionType, setCollectionType] = useState("private");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userRef = doc(firestore, "users", auth.currentUser.uid);

    // Determine the collection to use based on the dropdown selection
    const detailsCollection =
      collectionType === "private" ? "DetailsPersonal" : "DetailsWork";

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

  const handleCollectionTypeChange = (event) => {
    setCollectionType(event.target.value);
  };

  return (
    <div className={classes.main}>
      <h2>User Details</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={classes.input}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={classes.input}
          />
        </label>
        <br />
        <label>
          Portfolio:
          <input
            type="text"
            value={portfolio}
            onChange={(e) => setPortfolio(e.target.value)}
            required
            className={classes.input}
          />
        </label>
        <br />
        <label>
          Collection Type:
          <select
            value={collectionType}
            onChange={handleCollectionTypeChange}
            required
            className={classes.input}
          >
            <option value="private">Private</option>
            <option value="work">Work</option>
          </select>
        </label>
        <br />
        <button type="submit" className={classes.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Details;
