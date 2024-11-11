import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../../../context/Productcontext';
import { UpdateAdminProduct } from '../../../services/adminService';
import Pagination from '../../pagination/Pagination';

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, currentPage, setCurrentPage, totalPages, searchTerm, fetchProducts } = useContext(ProductContext);
  const [product, setProduct] = useState({ name: '', price: '', imageUrl: '' });

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


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
      await fetchProducts();
      // navigate('/'); 
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  const handleUpdateClick = (productId) => {
    navigate(`/admin/dashboard/UpdateProduct/${productId}`);
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
            type="file"
            accept="image/*"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
          />
        </label>
        <button type="submit" >Update Product</button>

      </form>
      {filteredProducts.map((product) => (
        <li key={product.id}>
          <h3>Id: {product.id}</h3>
          <img src={product.imageUrl} alt="pro1 " />
          <h3>Name: {product.name}</h3>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
          <button onClick={() => handleUpdateClick(product.id)}>Update Product</button>

        </li>
      ))}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default UpdateProduct
