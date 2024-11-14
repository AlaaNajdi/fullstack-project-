import React, { useContext } from 'react';

import { ProductContext } from '../../../context/Productcontext';
import { DeleteAdminProduct } from '../../../services/adminService';
import Pagination from '@mui/material/Pagination';
import { Box, Button, Typography } from '@mui/material';

const DeleteProduct = () => {
  const { products, setProducts, currentPage, setCurrentPage, totalPages, searchTerm } = useContext(ProductContext);

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
        alert('An error occurred while deleting the product.');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('An error occurred while deleting the product.');
    }
  };

  return (
    <Box sx={{ padding: 3 }}>
      {filteredProducts.map((product) => (
        <Box
          key={product.id}
          sx={{
            padding: 2,
            border: '1px solid #ddd',
            borderRadius: '8px',
            marginBottom: 2,
            backgroundColor: '#fff',
            boxShadow: 1,
            display: 'flex', 
            alignItems: 'center',
            gap: 2,
            height: '150px', 
          }}
        >
          <img
            src={product.imageUrl}
            alt="product"
            style={{
              width: '150px', 
              height: '100%', 
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1">
              Name: {product.name}
            </Typography>
          </Box>
          <Button
            variant="outlined"
            color="error"
            sx={{
              '&:hover': {
                borderColor: '#d32f2f',
                backgroundColor: '#fce4ec',
              },
            }}
            onClick={() => handleDelete(product.id)}
          >
            Delete
          </Button>
        </Box>
      ))}

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => setCurrentPage(page)}
        color="primary"
        sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}
      />
    </Box>
  );
};

export default DeleteProduct;
