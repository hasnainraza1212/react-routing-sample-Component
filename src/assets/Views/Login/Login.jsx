import React, { useContext } from 'react'
import { useAuth } from '../../Context/UseAuth'
import { Navigate } from 'react-router-dom'

const Login = () => {
    const {isAuthenticated, setIsAuthenticated} = useContext(useAuth)
    console.log(isAuthenticated)
    if (isAuthenticated){
        return <Navigate to="/"/>
    }
  return (
    <div>Login</div>
  )
}

export default Login