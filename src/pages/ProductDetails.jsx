import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getProductById(id);
      setProduct(response.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;


  return (
    <div>
      <h2>Available products :</h2>
      <ul>
        <li key={product.id}>
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Prics: {product.price} SAR</p>
          <p>Description:{product.description}</p>
          <p>Category:{product.categoryName}</p>
        </li>
      </ul>
    </div>
  )
}

export default ProductDetails