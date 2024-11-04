import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export const ProtectedUserRoute = () => {
  const token = localStorage.getItem('token');

  return token ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedUserRoute
