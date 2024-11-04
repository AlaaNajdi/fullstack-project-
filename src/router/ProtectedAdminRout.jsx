import React from 'react'
import { Outlet } from 'react-router-dom'
import SignInPage from '../pages/SignInPage'

export const ProtectedAdminRout = () => {
  const logininfo = JSON.parse(localStorage.getItem("signin"))

  return (
    <div>
      {logininfo !== null && logininfo.IsSignin && logininfo.userdata.isAdmin ? <Outlet /> : <SignInPage />}
    </div>
  )
}

export default ProtectedAdminRout
