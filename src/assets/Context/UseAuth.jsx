import { createContext, useState } from "react";
const useAuth = createContext()
const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const [user, setUser] = useState({})
    return (
        <useAuth.Provider value={
            {
                isAuthenticated,
                setIsAuthenticated,
                user,
                setUser
            }
        }
        >
            {children}
        </useAuth.Provider>
    )
}
export {
    AuthProvider, useAuth
}