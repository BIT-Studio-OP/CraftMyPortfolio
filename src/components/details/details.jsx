import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { collection, getDoc, doc, addDoc } from "firebase/firestore";
import { firestore } from "../../utils/Firestore";
import { getAuth } from "firebase/auth";

const auth = getAuth();

const useStyles = createUseStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  input: {
    color: "white",
  },
  submitButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
    backgroundColor: "var(--primary-colour)",
    color: "white",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    marginTop: "1rem",
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "portfolio":
        setPortfolio(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userRef = doc(firestore, "users", auth.currentUser.uid);

    try {
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const userDetailsRef = collection(userRef, "userDetails");
        await addDoc(userDetailsRef, {
          name: name,
          email: email,
          portfolio: portfolio,
        });
        console.log("User details added");
      } else {
        console.error("User document does not exist");
      }

      setName("");
      setEmail("");
      setPortfolio("");
    } catch (error) {
      console.error("Error adding user details: ", error);
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      Name{" "}
      <input
        type="text"
        className={classes.input}
        name="name"
        value={name}
        onChange={handleInputChange}
        required
      />
      Email{" "}
      <input
        type="email"
        className={classes.input}
        name="email"
        value={email}
        onChange={handleInputChange}
        required
      />
      Portfolio Name{" "}
      <input
        type="text"
        className={classes.input}
        name="portfolio"
        value={portfolio}
        onChange={handleInputChange}
        required
      />
      <input type="submit" className={classes.submitButton} value="Submit" />
    </form>
  );
}

export default Details;
