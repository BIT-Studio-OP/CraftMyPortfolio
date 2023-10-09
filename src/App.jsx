import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import { AuthContext } from "./utils/context/AuthContext";
import Spinner from "./utils/Spinner";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Templates from "./components/templates/Templates";
import Details from "./pages/Details";
import Account from "./components/account/Account";
import Projects from "./pages/Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Set initial state to true
  const loggedIn = useContext(AuthContext);
  const auth = getAuth();

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, () => {
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
              <Route path="/" element={<Home />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/details" element={<Details />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/account" element={<Account />} />
              <Route path="/projects" element={<Projects />} />
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
