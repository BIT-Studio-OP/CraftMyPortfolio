import { signOut } from "@firebase/auth"
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
            <button onClick={signOutUser}>Click Me</button>
        </div>
    )
}

export default Body