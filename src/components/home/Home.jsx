import React from "react"
import { getAuth } from "firebase/auth"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import BoilerFooter from "../BoilerPlateComponents/Footer/BoilerFooter"
import Body from "../content/Body"


const Home = () => {
    
    return (
        <div className="body">
            <Header />
            <Body />
            <BoilerFooter />
        </div>
    )
}

export default Home