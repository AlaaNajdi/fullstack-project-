import React, { useContext, useEffect, useState } from 'react';
import Product from './Product';
import { ProductContext } from '../../context/Productcontext';
import SearchBar from '../searchbar/SearchBar';
import Pagination from '../pagination/Pagination';
import Sort from '../sort/Sort';
import { UserContext } from '../../context/Usercontext';
import { Grid, Typography } from '@mui/material';

export const ProductList = () => {
  const { products, setSortBy, setSortOrder, currentPage, setCurrentPage, totalPages, isLoading, error } = useContext(ProductContext);
  const { isAdmin } = useContext(UserContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSearch = (searchTerm) => {
    if (!products || products.length === 0) {
      return;
    }
    const results = products.filter(product =>
      product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  if (isLoading) {
    return <Typography variant="h6">Products are loading...</Typography>;
  }

  if (error) {
    return <Typography variant="h6" color="error">{error.message}</Typography>;
  }

  return (
    <div style={{ padding: '10px' }}>
      <Typography variant="h4" gutterBottom align="center">Available Products</Typography>

      <SearchBar onSearch={handleSearch} />

      {/* Sorting Controls */}
      <Grid container spacing={2} style={{ marginTop: '20px' }} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Sort
            onSortByChange={handleSortByChange}
            onSortOrderChange={handleSortOrderChange}
          />
        </Grid>
      </Grid>

      {/* Product List */}
      <Grid container spacing={4} style={{ marginTop: '20px' }} justifyContent="center">
        {Array.isArray(filteredProducts) && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id} style={{ display: 'flex', justifyContent: 'center' }}>
              <Product product={product} isAdmin={isAdmin} />
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="text.secondary" style={{ width: '100%' }} align="center">
            No products available
          </Typography>
        )}
      </Grid>

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;
