import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/Usercontext';

const SignOutPage = () => {
  const navigate = useNavigate();
  const { signOutUser }=useContext(UserContext);

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
