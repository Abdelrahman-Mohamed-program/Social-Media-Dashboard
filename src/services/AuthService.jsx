import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // State to hold the authentication token
    const [token, setToken_] = useState(localStorage.getItem("token"));
    const [userID, setUserID_] = useState(localStorage.getItem("userID"));

    // Function to set the authentication token
    const setToken = (newToken, userID) => {
        setToken_(newToken);
        setUserID_(userID);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token', token);
            localStorage.setItem('userID', userID);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
            localStorage.removeItem('userID')
        }
    }, [token]);

    // Memoized value of the authentication context
    const contextValue = useMemo(
        () => ({
            userID,
            token,
            setToken
        }),
        [token, userID]
    );

    // Provide the authentication context to the children components
    return (
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;