import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography, Button } from '@mui/material';


const backgroundImage = "https://i.pinimg.com/736x/a8/a7/40/a8a740267bf4698983221489fe16db97.jpg";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain',  
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left', 
          height: '100vh',  
          width: '100%',   
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          padding: 0.25,
        }}
      >
        <Box
          sx={{
            textAlign: 'right',
            color: '#000000',
            padding: 2,
            width: '70%', 
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            Vintage Furniture Store
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Explore the most beautiful vintage pieces and start renewing your home today!
          </Typography>

          <Box sx={{ marginTop: 3 }}>
            <Link to="/ProductList" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
                View Products
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="secondary">
                About Us
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
