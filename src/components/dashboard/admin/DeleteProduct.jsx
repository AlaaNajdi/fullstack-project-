import React, { useContext } from 'react'
import { ProductContext } from '../../../context/Productcontext'
import { DeleteAdminProduct } from '../../../services/adminService';
import Pagination from '../../pagination/Pagination';

const DeleteProduct = () => {
  const { products, setProducts, currentPage, setCurrentPage, totalPages, searchTerm }=useContext(ProductContext)

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      const response = await DeleteAdminProduct(id);
      if (response.ok) {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
      } else {
        alert('some error when delete products');
      }
    } catch (error) {
      console.error('Error deleting products:', error);
      alert('some error when deledted products');
    }
  };
  return (
    <div>
      {filteredProducts.map((product) => (
        <li key={product.id}>
          <h3>Id: {product.id}</h3>
          <img src={product.imageUrl} alt="pro1 " />
          <h3>Name: {product.name}</h3>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
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

export default DeleteProduct
