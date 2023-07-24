import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Home from "./components/home/Home";
import { auth } from "./utils/Firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import { useCurrentUser, AuthContext } from "./utils/context/AuthContext";
import Spinner from "./utils/Spinner";
import Body from "./components/content/Body";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Templates from "./components/templates/Templates";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Set initial state to true
  const loggedIn = useContext(AuthContext);
  const auth = getAuth();
  const user = useCurrentUser();

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setIsLoading(false);
      });

      return unsubscribe;
    } catch (err) {
      console.log("unable to connect to firebase. Error Received: " + err);
    }
  }, [auth]);

  if (isLoading) {
    // Render spinner while checking authentication
    return <Spinner />;
  }

  return (
    <Router>
      <div className="background">
        <Routes>
          {loggedIn ? (
            <>
              <Route path="/" element={<Body />} />
              <Route path="/templates" element={<Templates />} />
            </>
          ) : (
            <>
              <Route path="/" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
