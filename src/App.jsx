import React, { useState, useEffect } from "react";
import "./App.css";
import { auth } from "./utils/Firestore";
import { getAuth } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import { useCurrentUser } from "./utils/context/AuthContext";

function App() {
  const [showSignIn, setShowSignIn] = useState(true);

  const auth = getAuth;

  const user = useCurrentUser();
  console.log(user);

  const SignOut = () => {
    auth.signOut();
  };

  const toggleForm = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <Router>
      {user ? <div>Welcome, {user.displayName}</div> : null}
      <div className="background">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {user ? (
                  <>
                    <div>Hello I am Home Page </div>
                    <div>
                      <button className="text-red-500" onClick={SignOut}>
                        Sign Out
                      </button>
                    </div>
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
