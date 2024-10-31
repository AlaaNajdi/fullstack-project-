import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../layout/Layout';
import ErrorPage from '../pages/Error';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProductDetails from '../pages/ProductDetails';

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
          path: "/productdetails",
          element: <ProductDetails />,
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
