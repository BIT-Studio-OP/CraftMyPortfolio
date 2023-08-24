import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, firestore } from "../../utils/Firestore.jsx";
import { setDoc, doc } from "firebase/firestore";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "2rem",
    background: "linear-gradient(to bottom right, #95B8D1, #B0CBE3, #C6DDEE, #DCECF8, #F2F2F2)",
    "& p": {
      color: "#161925"
    }
  },
  title: {
    marginBottom: "2rem",
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#161925",
  },
  title2: {
    marginBottom: "2rem",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#161925",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    marginBottom: "2rem",
    borderRadius: "0.5rem",
    boxShadow: "0 0 1rem rgba(0, 0, 0, 0.5)",
    background: "rgba(255, 255, 255, 0.1)",
    
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "1rem",
    fontSize: "1rem",
    color: "#161925",
    border: "none",
    borderRadius: "0.25rem",
    boxShadow: "0 0 0.25rem rgba(0, 0, 0, 0.5)",
    background: "rgba(255, 255, 255, 1) !important",
    backdropFilter: "blur(2px)",
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
    },
  },
  button: {
    width: "100%",
    padding: "0.5rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#fff",
    background: "#3b82f6",
    borderRadius: "0.25rem",
    boxShadow: "0 0 0.25rem rgba(0, 0, 0, 0.5)",
    transition: "background 0.2s ease-in-out",
    "&:hover": {
      background: "#2563eb",
    },
    "&:focus": {
      outline: "none",
      boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
    },
  },
  error: {
    marginTop: "1rem",
    fontSize: "0.75rem",
    color: "#f44336",
  },

  link: {
    marginTop: "2rem",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#161925",
    textDecoration: "none",
    transition: "color 0.2s ease-in-out",
    "&:hover": {
      color: "#3b82f6",
    },
  },
});

const SignUp = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const Navigate = useNavigate();
  const classes = useStyles();

  const goToSignIn = () => {
    Navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: username });
      await setDoc(doc(firestore, "users", userCredential.user.uid), {
        email: userCredential.user.email,
        username,
      });
      Navigate("/");
    } catch (error) {
      console.error(error);
      switch (error.code) {
        case "auth/email-already-in-use":
          setErrorMessage(
            "The email address is already in use by another account."
          );
          break;
        case "auth/invalid-email":
          setErrorMessage("The email address is not valid.");
          break;
        case "auth/operation-not-allowed":
          setErrorMessage(
            "Email/password accounts are not enabled. Enable email/password in the Firebase Console, under the Auth tab."
          );
          break;
        case "auth/weak-password":
          setErrorMessage("The password is not strong enough.");
          break;
        default:
          setErrorMessage("An unknown error occurred.");
      }
    } finally {
      setEmail("");
      setPassword("");
      setUsername("");
    }
  };

  return (
    <div className={classes.container}>
      <p className={classes.title}>Welcome👋</p>
      <h1 className={classes.title}>Sign Up</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <input
          type="username"
          placeholder="Username"
          required="required"
          onChange={(e) => setUsername(e.target.value)}
          className={classes.input}
        />
        <input
          type="email"
          placeholder="Email"
          required="required"
          onChange={(e) => setEmail(e.target.value)}
          className={classes.input}
        />
        <input
          type="password"
          placeholder="Password"
          required="required"
          onChange={(e) => setPassword(e.target.value)}
          className={classes.input}
        />
        {errorMessage && <p className={classes.error}>{errorMessage}</p>}
        <button type="submit" className={classes.button}>
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <a onClick={goToSignIn} className={classes.link}>
          Sign In
        </a>
      </p>
    </div>
  );
};

export default SignUp;