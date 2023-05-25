import React, { useState, useEffect } from "react";
import "./App.css";
import { auth } from "./utils/Firestore";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import SignOut from "./components/auth/SignOut";

function App() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const toggleForm = () => {
    setShowSignIn(!showSignIn);
  };

    return (
      <Router>
        {currentUser ? <div>Welcome, {currentUser.displayName}</div> : null}
        <div className="background">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {currentUser ? (
                    <>
                    <div>Hello I am Home Page </div>
                      <SignOut setCurrentUser={setCurrentUser} />
                    </>
                  ) : showSignIn ? (
                    <SignIn toggleForm={toggleForm} />
                  ) : (
                    <SignUp toggleForm={toggleForm} />
                  )}
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    );
}

export default App;
