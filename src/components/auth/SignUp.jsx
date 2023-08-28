/* eslint-disable no-unused-vars */
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

// eslint-disable-next-line react/prop-types
const SignUp = ({ toggleForm }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const Navigate = useNavigate();

  const goToSignIn = () => {
    Navigate("/");
  }

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
      <p className="mb-6 text-4xl font-bold text-center">Welcome👋</p>
      <h1 className="mb-6 text-3xl font-bold text-center">Sign Up</h1>
      <form
        onSubmit={handleSubmit}
        className="px-8 pt-6 pb-8 mb-4 rounded shadow-md flex flex-col w-96  filter-blur-2x"
      >
        <input
          type="username"
          placeholder="Username"
          required="required"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        <input
          type="email"
          placeholder="Email"
          required="required"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        <input
          type="password"
          placeholder="Password"
          required="required"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 mb-3 text-sm leading-tight text-white-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        />
        {errorMessage && (
          <p className="text-red-500 text-xs italic">{errorMessage}</p>
        )}
        <button
          data-testid="signup"
          type="submit"
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Sign Up Button
        </button>
      </form>
      {/* <button
        onClick={signInWithGoogle}
        className="w-full px-4 py-2 font-bold text-white bg-blue-400 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline w-60"
      >
        Sign In with Google
      </button> */}

      <p className="font-bold text-white w-80 m-7">
        Already have an account? 
        <a onClick={goToSignIn}> Sign In</a>
      </p>
    </div>
  );
};

export default SignUp;
