import React, { createContext, useEffect, useState } from 'react';
import UseAxiosPublic from '../hook/UseAxiosPublic';
import { jwtDecode } from "jwt-decode"

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const axiosPublic = UseAxiosPublic()



    const loginUser = async (email, password) => {
        setLoading(true)
        try {
            const res = await axiosPublic.post('/login', { email, password })
            if (res.data.success) {
                const token = res.data.jwtToken;
                if (token) {
                    localStorage.setItem('token', token)
                    const decodeUser = jwtDecode(token)
                    setUser(decodeUser)
                    setIsAuthenticated(true)

                }
            }
            return res.data;
        } catch (error) {
            console.error("Error in loginUser:", error);
        }finally{
            setLoading(false)
        }
    }
 const logoutUser=()=>{
    localStorage.removeItem('token')
    setUser(null)
    setIsAuthenticated(false)
 }
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const decodeUser = jwtDecode(token)
                setUser(decodeUser)
                setIsAuthenticated(true)
            } catch (error) {
                console.error("Error decoding token:", error);
                localStorage.removeItem('token');
            }
        }
        setLoading(false)
    }, [])
    const authInfo = {
        user, loading, isAuthenticated, loginUser,logoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;