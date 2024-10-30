import React, { useEffect, useState } from 'react';

const ProductDetails = () => {      const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://sda-3-onsite-backend-teamwork-bw5k.onrender.com/api/v1/products');
      const data = await response.json();
      console.log("data ", data.product.items)
      setProducts(data.product.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
      fetchProducts();
  }, []);
  return (
    <div>
<h2>Available products :shopping_trolley:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.ImageUrl} alt="pro1 " />
            <h3>{product.name}</h3>
            <p>Prics: {product.price} SAR</p>
            <p>{product.categoryName}</p>
          </li>
        ))}
      </ul>
  </div>
  )
}

export default ProductDetails
