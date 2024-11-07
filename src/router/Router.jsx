import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../layout/Layout';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import SignOutPage from '../pages/SignOutPage';
import ProtectedAdminRout from './ProtectedAdminRout';
import ProtectedUserRoute from './ProtectedUserRoute';
import ProductDetails from '../pages/ProductDetails';
import UserDashboard from '../components/dashboard/UserDashboard';


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
        {
          path: "/productdetails/:id",
          element: <ProductDetails />
        },
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
        {
          path: "/user",
          element: <ProtectedUserRoute />,
          children: [
            {
                 path: "dashboard", 
                  element: <UserDashboard/> 
            
            },
            {
              path: "profile",
              element: <UserDashboard />

            },

          ],
        },
        {
          path: "/admin",
          element: <ProtectedUserRoute />,
          children: [
            {
              path: "dashboard",
              element: <UserDashboard />

            },

          ],
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
