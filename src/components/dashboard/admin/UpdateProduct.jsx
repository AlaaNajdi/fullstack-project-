import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../../context/Productcontext';
import { UpdateAdminProduct } from '../../../services/adminService';

const UpdateProduct = () => {
  const { id } = useParams();  
  const navigate = useNavigate();
  const { products } =useContext(ProductContext); 
  const [product, setProduct] = useState({ name: '', price: '', imageUrl: '' });

  useEffect(() => {
    const selectedProduct = products.find(product => product.id === id);
    if (selectedProduct) {
      setProduct(selectedProduct);  
    }
  }, [id, products]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UpdateAdminProduct(id, product);  
      navigate('/'); 
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </label>
        {/* <label>
          Description:
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </label> */}
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Update Product</button>
      </form>
    </div>
  )
}

export default UpdateProduct
