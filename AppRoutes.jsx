import React from 'react';
import { Route, Routes, Navigate, BrowserRouter, Outlet } from 'react-router-dom';
const useAuth = () => {
  const isAuthenticated = true; 
  return isAuthenticated;
};
const Login = () => {
    const isAuthenticated = useAuth();
    if (isAuthenticated){
        return <Navigate to="/"/>
    }
    return <>Login...</>;
};
const SignUp = () => {
  return <>SignUp...</>;
};
const Home = () => {
  return <>Home...</>;
};
const Chat = () => {
  return <>Chat...</>;
};
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();

  return (
    <div>
      {isAuthenticated ? (
       <Outlet/>
      ) : (
        <Navigate to="sign-in" />
      )}
    </div>
  );
};

const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/" element={<ProtectedRoute/>}>
      <Route index element={<Home />} />
      <Route path="chat" element={<Chat />} />


      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
