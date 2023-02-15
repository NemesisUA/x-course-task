import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('user') || '');   

    const signin = (newUser, callback) => {
        setUser(newUser);
        localStorage.setItem('user', newUser);
        callback();
    };

    const signout = (callback) => {
        setUser('');        
        localStorage.clear();
        callback();
    };

    const value = {user, signin, signout};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}