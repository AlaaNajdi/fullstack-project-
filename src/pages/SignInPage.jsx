import React from 'react'
import ReusableForm from '../components/reusableform/ReusableForm';
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../services/userService';

const SignInPage = () => {
  const navigate = useNavigate();

  const handleSignIn = async (formData) => {
    try {
      const response = await signInUser(formData);
      if (response.ok) {
        navigate('/');
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const formFields = [
    { label: 'Email', name: 'Email', type: 'email', required: true },
    { label: 'Password', name: 'Password', type: 'password', required: true },
  ];

  return (
    <div><h2>Sign In</h2>
      <ReusableForm formFields={formFields} onSubmit={handleSignIn} submitText="Sign In" />
    </div>
  )
}

export default SignInPage
