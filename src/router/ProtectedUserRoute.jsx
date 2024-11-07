import React, { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { UserContext } from '../context/Usercontext';

const ProtectedUserRoute = () => {
  const { userLoggedIn } = useContext(UserContext);
  return userLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedUserRoute
