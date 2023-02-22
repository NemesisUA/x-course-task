import { createContext,useState } from "react";
import { LocalStorageService, LS_KEYS  } from "../services/localStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(LocalStorageService.get(LS_KEYS.USER) || '');   

    const signin = (newUser, callback) => {
        setUser(newUser);
        LocalStorageService.set(LS_KEYS.USER, newUser);
        callback();
    };

    const signout = (callback) => {
        setUser('');        
        LocalStorageService.clearAll();
        callback();
    };

    const value = {user, signin, signout};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}