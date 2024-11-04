import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../layout/Layout';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProductDetails from '../pages/ProductDetails';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import SignOutPage from '../pages/SignOutPage';
import ProtectedUserRoute from './ProtectedUserRoute';
import ProtectedAdminRout from './ProtectedAdminRout';

const Router = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        { path: "/productdetails/:id", 
          element: <ProductDetails /> },
        {
          path: "/signup",
          element: <SignUpPage />
        },
        {
          path: "/signin",
          element: <SignInPage />
        },
        {
          path: "/signout",
          element: <SignOutPage />
        },
        {//if you siginin you can go to any children
          path: "/dashboard/users",
          element: <ProtectedUserRoute ><ProtectedUserRoute/></ProtectedUserRoute>,
          errorElement: <ErrorPage />,
          children: []
        },
        {//if you siginin you can go to any children
          path: "/dashboard/admins",
          element: <ProtectedAdminRout ><ProtectedAdminRout/></ProtectedAdminRout>,
          errorElement: <ErrorPage />,
          children: []
        },
      ]
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )

}

export default Router
