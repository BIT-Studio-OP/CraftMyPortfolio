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
import { useCurrentUser, AuthContext } from "../../utils/context/AuthContext.jsx";

// eslint-disable-next-line react/prop-types
const SignIn = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const loggedIn = useContext(AuthContext);

  const auth = getAuth();
  const Navigate = useNavigate();

  const goToSignUp = () => {
    Navigate("/signup");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })

      console.log("successlogin");
    } catch (error) {
      console.log("failedlogin");
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

  // const signInWithGoogle = async () => {
  //   const provider = new GoogleAuthProvider();
  //   try {
  //     await signInWithPopup(auth, provider);
  //   } catch (error) {
  //     console.error(error);
  //     setErrorMessage("An error occurred while signing in with Google.");
  //   }
  // };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <p className="mb-6 text-4xl font-bold text-center">Welcome Back 👋</p>

      <h1 className="mb-6 text-3xl font-bold text-center">Sign In</h1>
      <form
        onSubmit={handleSubmit}
        className="px-8 pt-6 pb-8 mb-4 rounded shadow-md flex flex-col w-96  filter-blur-2x"
      >
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {errorMessage && (
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        )}
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Sign In
        </button>
      </form>
      {/* <button
        onClick={signInWithGoogle}
        className="w-full px-4 py-2 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline w-60"
      >
        Sign In with Google
      </button> */}
      <p className="font-bold text-white w-60 m-7">
        Don't have an account?
        <a onClick={goToSignUp}> Sign Up</a>
      </p>
    </div>
  );
};

export default SignIn;
