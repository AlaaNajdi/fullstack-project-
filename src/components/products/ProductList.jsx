import React, { useContext, useEffect, useState } from 'react';

import Product from './Product';
import { ProductContext } from '../../context/Productcontext';
import SearchBar from '../searchbar/SearchBar';
import Sort from '../sort/Sort';



export const ProductList = () => {
  const { products } = useContext(ProductContext)
  

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm) => {
    if (!products || products.length === 0) {
      return;
    }
    const results = products.filter(product =>
      product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results); 
  };


  useEffect(() => {
    setFilteredProducts(products); 
  }, [products]);

  return (
    <div>
      <h2>Available products :</h2>
      <SearchBar onSearch={handleSearch} />
      <br/>
      <Sort/>
      <br/>
      <ul>
        {
          Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))) : (
            <li>No products available</li> 
          )}
      </ul>
    </div>
  )
}

export default ProductList
