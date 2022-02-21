import { createContext, useState, useCallback } from "react";

export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {

    const [auth, setAuthState] = useState({});

    const setAuth = useCallback((incomingAuth)=>{
        setAuthState(incomingAuth)
    },[]);


    const logout = useCallback(()=>{
        setAuthState({});
    },[])

    const initContext = {
        auth,
        setAuth,
        logout
    }
    
    return (
        <AuthContext.Provider  value={initContext}>
            {children}
        </AuthContext.Provider>
    );
}
