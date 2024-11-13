import React, { useContext, useEffect } from 'react'
import ReusableForm from '../components/reusableform/ReusableForm';
import { useNavigate } from 'react-router-dom';
import { signInUser } from '../services/userService';
import { UserContext } from '../context/Usercontext';

const SignInPage = () => {
  const navigate = useNavigate();
  const { userLoggedIn,setUserLoggedIn, setToken, setIsAdmin, setUserId, setUserName, setUserLoggedInData } = useContext(UserContext);

  useEffect(() => {
    if (userLoggedIn) {
      // إذا كان المستخدم قد سجل دخوله مسبقًا، يمكن توجيهه مباشرة إلى لوحة القيادة
      const storedIsAdmin = JSON.parse(localStorage.getItem('isAdmin'));
      if (storedIsAdmin) {
        navigate('/admin/dashboard');
      } else {
        navigate('/user/dashboard');
      }
    }
  }, [userLoggedIn, navigate]);

  const handleSignIn = async (formData) => {
    try {
      console.log("form data ", formData)
      const response = await signInUser(formData);

      console.log("response sign in form", response)
      setUserLoggedIn(true);
      setToken(response.token);
      setIsAdmin(response.isAdmin);
      setUserId(response.userId)
      setUserName(response.userName)
      const userLoggedIn = {
        isAdmin: response.isAdmin,
        userId: response.userId,
        userName: response.userName
      }
      setUserLoggedInData(userLoggedIn)
      localStorage.setItem("userLoggedIn", JSON.stringify(true))
      localStorage.setItem("token", response.token)
      localStorage.setItem("isAdmin", response.isAdmin)
      localStorage.setItem("userId", response.userId)
      if (userLoggedIn.isAdmin === true) {
        navigate("/admin/dashboard");
      }
      else {
        navigate("/user/dashboard");
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
