import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { UserContext } from '../context/Usercontext';


export const ProtectedAdminRoute = () => {

  const { userLoggedIn, isAdmin } = useContext(UserContext);

  return userLoggedIn && isAdmin ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedAdminRoute


