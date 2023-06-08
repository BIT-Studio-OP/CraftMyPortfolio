import React from "react"
import { getAuth } from "firebase/auth"

const Body = () => {
    const auth = getAuth()
    const signOutUser = () => {
        auth.signOut()
    }
    return (
        <div className="body">
            <h1>Body</h1>
            <button onClick={signOutUser} className="text-red-500">Sign Out</button>
        </div>
    )
}

export default Body