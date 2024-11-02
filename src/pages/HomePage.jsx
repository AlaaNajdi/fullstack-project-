import React, { useContext } from 'react'

import ProductList from '../components/products/ProductList';
import { ProductContext } from '../context/Productcontext';

export const HomePage = () => {

  const { isLoading, error } = useContext(ProductContext);
  if (isLoading) {
    return <p>products are loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <>
      <ProductList />
    </>
  )
}

export default HomePage;