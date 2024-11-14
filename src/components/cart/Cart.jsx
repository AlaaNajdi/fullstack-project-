import React, { useState, useContext } from 'react';

import { Box, Typography, Button, Divider, TextField } from '@mui/material';
import { CartContext } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useContext(CartContext); 

  const [address, setAddress] = useState('');
  const [addressEditing, setAddressEditing] = useState(false);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAddressUpdate = () => {
    setAddressEditing(false);
  };



  return (<Box sx={{ padding: 3, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
    <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
      Your Cart
    </Typography>

    {cart.length === 0 ? (
      <Typography variant="h6" sx={{ color: '#888' }}>
        Your cart is currently empty
      </Typography>
    ) : (
      <>
        <Button
          variant="outlined"
          color="secondary"
          onClick={clearCart}
          sx={{
            marginBottom: 3,
            borderRadius: 1,
            textTransform: 'none',
          }}
        >
          Clear Cart
        </Button>

        {cart.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              backgroundColor: '#fff',
              borderRadius: 1,
              boxShadow: 1,
              padding: 2,
              marginBottom: 2,
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{
                width: 120,
                height: 120,
                objectFit: 'cover',
                borderRadius: 8,
              }}
            />
            <Box sx={{ paddingLeft: 2, flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: '600' }}>
                {item.name}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 1 }}>
                Price: ${item.price.toFixed(2)}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                <Button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  sx={{ marginRight: 1 }}
                >
                  -
                </Button>
                <Typography variant="body2">{item.quantity}</Typography>
                <Button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  sx={{ marginLeft: 1 }}
                >
                  +
                </Button>
              </Box>

              <Button
                variant="contained"

                onClick={() => removeFromCart(item.id)}
                sx={{
                  marginTop: 2, width: '100%', minWidth: 0, backgroundColor: '#B5E2FA', 
                  '&:hover': {
                    backgroundColor: '#F9F7F3',  
                  },
                }}
              >
                <DeleteIcon />
              </Button>
            </Box>
          </Box>
        ))}

        <Box sx={{ marginTop: 3, backgroundColor: '#fff', padding: 3, borderRadius: 2, boxShadow: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Order Summary
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            Total Price: ${totalPrice.toFixed(2)}
          </Typography>
          <Button
            variant="contained"
            color="warning"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Proceed to Checkout
          </Button>

          <Box sx={{ marginTop: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              Shipping Address
            </Typography>
            {addressEditing ? (
              <Box sx={{ marginTop: 2 }}>
                <TextField
                  fullWidth
                  label="Enter your address"
                  value={address}
                  onChange={handleAddressChange}
                  variant="outlined"
                  sx={{ marginBottom: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddressUpdate}
                >
                  Update Address
                </Button>
              </Box>
            ) : (
              <Box sx={{ marginTop: 2 }}>
                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                  {address || 'No address provided yet'}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ textTransform: 'none' }}
                  onClick={() => setAddressEditing(true)}
                >
                  Edit Address
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </>
    )}
  </Box>
  )
};

export default Cart;
