import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from './pages/HomePage';
import Layout from './components/navbar/Layout';
import ProductList from './pages/ProductList';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/product",
          element: <ProductList/>,
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

export default App
