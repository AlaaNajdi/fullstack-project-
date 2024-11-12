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
import AdminDashboard from '../components/dashboard/admin/AdminDashboard';
import UserDashboard from '../components/dashboard/user/UserDashboard';
import Users from '../components/dashboard/admin/Users';
import AddProduct from '../components/dashboard/admin/AddProduct';
import DeleteProduct from '../components/dashboard/admin/DeleteProduct';
import UpdateProduct from '../components/dashboard/admin/UpdateProduct';
import Cart from '../components/cart/Cart';


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
          path: '/cart',
          element: <Cart />,
        },
        {
          path: "/",
          element: <ProtectedUserRoute />,
          children: [
            {
              path: "user/dashboard",
              element: <UserDashboard/>

            },
            {
              path: "user/profile",
              element: <UserDashboard />

            },

          ],
        },
        {
          path: "/",
          element: <ProtectedAdminRout />,
          children: [
            {
              path: "admin/dashboard", 
              element: <AdminDashboard />,
              children: [
                {
                  path: "users",  
                  element: <Users /> 
                },
                {
                  path: "Addproduct", 
                  element: <AddProduct/> 
                },
                {
                  path: "Deleteproduct",
                  element: <DeleteProduct />
                },
                {
                  path: "UpdateProduct/:id",
                  element: <UpdateProduct />
                },
            
              ],
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
