import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { ProductContext } from '../../../context/Productcontext';
import { UpdateAdminProduct } from '../../../services/adminService';
import { TextField, Button, Typography, Container, Grid, Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, currentPage, setCurrentPage, totalPages, searchTerm, fetchProducts } = useContext(ProductContext);
  const [product, setProduct] = useState({ name: '', price: '', imageUrl: '', Description: '' });

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
    <Container maxWidth="sm">
      <Box sx={{ padding: 3, backgroundColor: '#fff', borderRadius: '8px', boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom>
          Update Product
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={product.name}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Price"
                name="price"
                value={product.price}
                onChange={handleChange}
                variant="outlined"
                type="number"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name="Description"
                value={product.Description}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name="imageUrl"
                value={product.imageUrl}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
                sx={{ padding: '10px', fontSize: '16px' }}
              >
                Update Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>

      <Box sx={{ marginTop: 4 }}>
        {filteredProducts.map((product) => (
          <Box
            key={product.id}
            sx={{ padding: 2, border: '1px solid #ddd', borderRadius: '8px', marginBottom: 2 }}
          >
            <img src={product.imageUrl} alt="product" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '8px' }} />
            <Typography variant="body1" mt={2}>Name: {product.name}</Typography>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handleUpdateClick(product.id)}
              sx={{ marginTop: 1 }}
            >
              Update Product
            </Button>
          </Box>
        ))}
      </Box>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => setCurrentPage(page)}
        color="primary"
        sx={{ marginTop: 4, display: 'flex', justifyContent: 'center' }}
      />
    </Container>
  );
};


export default UpdateProduct
