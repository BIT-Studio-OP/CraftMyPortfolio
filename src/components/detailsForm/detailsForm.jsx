import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { collection, addDoc, doc } from "firebase/firestore";
import { firestore } from "../../utils/Firestore";

const useStyles = createUseStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    /* specify your input field styles here */
  },
  submitButton: {
    border: "none",
    background: "none",
    cursor: "pointer",
  },
});

function DetailsForm() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = "dummyUserId";
    const userRef = doc(firestore, "users", userId);
    const detailsRef = collection(userRef, "details");

    addDoc(detailsRef, {
      name,
      email,
      portfolio,
    })
      .then((docRef) => {
        console.log("User details added with ID: ", docRef.id);
        setName("");
        setEmail("");
        setPortfolio("");
      })
      .catch((error) => {
        console.error("Error adding user details: ", error);
      });
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
      />
      Email{" "}
      <input
        type="email"
        className={classes.input}
        name="email"
        value={email}
        onChange={handleInputChange}
      />
      Portfolio Name{" "}
      <input
        type="text"
        className={classes.input}
        name="portfolio"
        value={portfolio}
        onChange={handleInputChange}
      />
      <input type="submit" className={classes.submitButton} value="Submit" />
    </form>
  );
}

export default DetailsForm;
