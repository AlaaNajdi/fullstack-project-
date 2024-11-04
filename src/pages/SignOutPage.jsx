import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOutUser } from '../services/userService';

const SignOutPage = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser(); 
    navigate('/signin');
  };

  React.useEffect(() => {
    handleSignOut(); 
  }, []);

  return <div>Logging out...</div>;
};

export default SignOutPage;
