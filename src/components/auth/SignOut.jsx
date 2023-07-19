/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore } from "../../utils/Firestore.jsx";

// eslint-disable-next-line react/prop-types
const SignOut = ({ setCurrentUser }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, [setCurrentUser]);

  const handleSignOut = (e) => {
    signOut(auth)
      .then(() => {
        setCurrentUser("");
        console.log("User signed out successfully.");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div>
      <button className="text-red-500" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
