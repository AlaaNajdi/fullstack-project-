import React from 'react';
import { useNavigate } from 'react-router-dom';

import { signUpUser } from '../services/userService';
import ReusableForm from '../components/reusableform/ReusableForm';


export const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    try {
      const response = await signUpUser(formData);
      if (response.ok) {
        navigate('/signin');
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const formFields = [
    { label: 'Name', name: 'Name', required: true },
    { label: 'Email', name: 'Email', type: 'email', required: true },
    { label: 'Password', name: 'Password', type: 'password', required: true },
  ];

  return (
    <div>
      <h2>Sign Up</h2>
      <ReusableForm formFields={formFields} onSubmit={handleSignUp} submitText="Sign Up" />
    </div>
  );
};

export default SignUpPage;
