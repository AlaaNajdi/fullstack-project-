import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../context/Usercontext';
import SignInPage from '../pages/SignInPage';

const ProtectedUserRoute = () => {
  const { userLoggedIn } = useContext(UserContext);
  return userLoggedIn ? <Outlet /> : <SignInPage />;
}

export default ProtectedUserRoute
