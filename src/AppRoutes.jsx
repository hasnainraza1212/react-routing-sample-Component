import React from 'react';
import { Route, Routes, Navigate, BrowserRouter, Outlet } from 'react-router-dom';
import Chat from './assets/Views/Chat/Chat';
import AllChats from './assets/Views/AllChats/AllChats';
import SignUp from './assets/Views/SignUp/SignUp';
import Layout from './assets/Views/Layout/Layout';
import Login from './assets/Views/Login/Login';
const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/sign-in" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/" element={<Layout/>}>
      <Route index element={<AllChats />} />
      <Route path="chat" element={<Chat />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
