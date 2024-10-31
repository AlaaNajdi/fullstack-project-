import React, { useContext } from 'react';

import Product from './Product';
import { ProductContext } from '../../context/Productcontext';


export const ProductList = () => {
  const {products} = useContext(ProductContext)
  return (
    <div>
      <h2>Available products :</h2>
      <ul>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
    </div>
  )
}

export default ProductList
