import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../context/Usercontext';


export const ProtectedAdminRoute = () => {

  const { userLoggedIn, isAdmin } = useContext(UserContext);

  return userLoggedIn && isAdmin ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedAdminRoute


// when user logged in successfully, backend returns back jwt token =>done
// jwt-decode (npm install) to decode the token =>done
// return object of a user, inside this object, there will be role 
// remember to store decoded user object in localStorage=>done
// and store user loggedin in the userContext  : const [userLoggedIn, setUserLoggedIn] = useState(null)