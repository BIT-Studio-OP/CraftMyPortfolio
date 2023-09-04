/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utils/Firestore.jsx";
import {
  useCurrentUser,
  AuthContext,
} from "../../utils/context/AuthContext.jsx";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "2rem",
    background: "linear-gradient(to bottom right, #FE938C, #FE9D8E, #FFA48E, #FFAE8E, #FFB88E)",
  },
  title: {
    marginBottom: "2rem",
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  title2: {
    marginBottom: "2rem",
    fontSize: "2rem",
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
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
    background: "rgba(255, 255, 255, 0.7)",
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
    color: "#fff",
    textDecoration: "none",
    transition: "color 0.2s ease-in-out",
    "&:hover": {
      color: "#3b82f6",
    },
  },
});

const SignIn = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [user, setUser] = useState(null);
  const [ageFocused, setAgeFocused] = useState(false);

  const auth = getAuth();
  const Navigate = useNavigate();
  const classes = useStyles();

  const goToSignUp = () => {
    Navigate("/signup");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          setUser(user);
        }
      );
    } catch (error) {
      console.error(error);
      switch (error.code) {
        case "auth/invalid-email":
          setErrorMessage("Invalid email format.");
          break;
        case "auth/user-disabled":
          setErrorMessage("This user has been disabled.");
          break;
        case "auth/user-not-found":
          setErrorMessage("User not found.");
          break;
        case "auth/wrong-password":
          setErrorMessage("Wrong password.");
          break;
        default:
          setErrorMessage("An error occurred while signing in.");
      }
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Welcome Back 👋</h1>

      <h2 className={classes.title2}>Sign In</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={classes.input}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className={classes.input}
        />
        {errorMessage && <p className={classes.error}>{errorMessage}</p>}
        <button data-testid="signin" type="submit" className={classes.button}>
          Sign In
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <a onClick={goToSignUp} className={classes.link}>
          Sign Up
        </a>
      </p>
    </div>
  );
};

export default SignIn;