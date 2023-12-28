import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../Context/UseAuth'

const Layout = () => {
    const {isAuthenticated, setIsAuthenticated} = useContext(useAuth)
  return (
    isAuthenticated
    ?<Outlet/>
    :<Navigate to="sign-in"/>
  )
}

export default Layout