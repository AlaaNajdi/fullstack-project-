import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/Usercontext';
import { CartContext } from '../../context/CartContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { userLoggedIn } = useContext(UserContext);

  const handleDetailsClick = () => {
    navigate(`/productdetails/${product.id}`);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card sx={{ margin: 1, mb: 2 }}>
      <CardMedia
        component="img"
        alt={product.name}
        height="500"
        image={product.imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="h6" color="text.primary">
          Price: {product.price} SAR
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleDetailsClick}>
          Show Details
        </Button>
        {userLoggedIn && (
          <Button size="small" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Product;
