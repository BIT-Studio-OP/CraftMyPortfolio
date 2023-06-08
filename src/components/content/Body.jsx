import React from "react"
import { getAuth } from "firebase/auth"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import Home from "../home/Home"


const Body = () => {
    
    return (
        <div className="body">
            <Header />
            <Home />
            <Footer />
        </div>
    )
}

export default Body