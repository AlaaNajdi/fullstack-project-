import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';
import { Card, CardMedia, CardContent, Typography, Container } from '@mui/material';

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

  if (!product) return <Typography variant="h6" align="center">Loading...</Typography>;

  return (
    <Container maxWidth="md" style={{ paddingTop: '20px' }}>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          alt={product.name}
          height="400"
          image={product.imageUrl}
          sx={{ width: '40%' }}
        />
        <CardContent sx={{ flex: 1, padding: '16px' }}>
          <Typography gutterBottom variant="h6" component="div" align="left" sx={{ fontSize: '1.2rem' }}>
            {product.name}
          </Typography>
          <Typography variant="body1" color="text.primary" align="left" sx={{ fontSize: '1rem', marginBottom: '8px' }}>
            {product.price} SAR
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph align="left" sx={{ fontSize: '0.9rem' }}>
            {product.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="left" sx={{ fontSize: '0.9rem' }}>
            Category: {product.categoryName}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;