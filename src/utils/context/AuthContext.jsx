//context to store user data

import React, { useState, useEffect, createContext, useContext } from 'react';
import { getAuth } from 'firebase/auth';

export const AuthContext = createContext();

//function to get user from auth context to pass to other functions 
export const useCurrentUser = () => {
    const user = useContext(AuthContext);
    return user;
}

const AuthProvider = ({ children }) => {
    //set default user to null
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = auth.onAuthStateChanged((user2) => {
            console.log("auth state changed", user2)
            setUser(user2);
            setLoading(false);
        });
        return unsubscribe;
    }, []);


    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;