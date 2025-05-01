import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // State to hold the authentication token
    const [token, setToken_] = useState(localStorage.getItem("token"));
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"));
    const [userID, setUserID_] = useState(localStorage.getItem("userID"));
    const [username, setUsername_] = useState(localStorage.getItem("username"));

    // Function to set the authentication token
    const setToken = (newToken) => {
        setToken_(newToken);
    };

    const setUserID = (newUserID) => {
        setUserID_(newUserID);
    }

    const setUsername = (newUsername) => {
        setUsername_(newUsername);
    }

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = "Bearer " + token;
            localStorage.setItem('token', token);
            localStorage.setItem('userID', userID);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('username', username);
        } else {
            delete axios.defaults.headers.common["Authorization"];
            localStorage.removeItem('token')
            localStorage.removeItem('userID')
            localStorage.removeItem('refreshToken')
            localStorage.removeItem('username')
        }
    }, [token, userID, refreshToken, username]);

    // Memoized value of the authentication context
    const contextValue = useMemo(
        () => ({
            userID,
            setUserID,
            token,
            setToken,
            refreshToken,
            setRefreshToken,
            username,
            setUsername
        }),
        [token, userID, refreshToken, username]
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