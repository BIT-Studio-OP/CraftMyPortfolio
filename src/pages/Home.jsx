import React from "react"
import { getAuth } from "firebase/auth"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import HomeContent from "../components/content/HomeContent"


const Home = () => {
    
    return (
        <div className="body">
            <Header />
            <HomeContent />
            <Footer />
        </div>
    )
}

export default Home