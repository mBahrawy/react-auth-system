import { createContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});

    const initContext = {
        auth,
        setAuth
    }
    
    return (
        <AuthContext.Provider  value={initContext}>
            {children}
        </AuthContext.Provider>
    );
}
