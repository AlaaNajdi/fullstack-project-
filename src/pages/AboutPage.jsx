import React from 'react';
import { Container, Box, Typography, Grid, IconButton } from '@mui/material';
import { Home, TrendingUp, Storefront } from '@mui/icons-material';

const AboutPage = () => {
  return (
    <Container sx={{ padding: 4 }}>
      <Box sx={{ backgroundColor: '#f5f5f5', padding: 4, borderRadius: 2, boxShadow: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Welcome to Our Artistic Furniture Store
        </Typography>
        <Typography variant="body1" paragraph align="center">
          We specialize in unique and high-quality vintage furniture, carefully selected and restored to bring timeless charm to your home. Our passion for vintage furniture started in 2010, and since then, we have been offering exquisite pieces that blend style and history.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <IconButton sx={{ fontSize: 40, color: '#6b8e23' }}>
                <Home />
              </IconButton>
              <Typography variant="h6" gutterBottom>
                Established Since 2010
              </Typography>
              <Typography variant="body2">
                Our store has been serving customers since 2010, offering carefully selected vintage furniture for every taste and style.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <IconButton sx={{ fontSize: 40, color: '#6b8e23' }}>
                <Storefront />
              </IconButton>
              <Typography variant="h6" gutterBottom>
                Over 500 Pieces Sold
              </Typography>
              <Typography variant="body2">
                We've sold over 500 unique vintage pieces, each carefully curated to ensure the highest quality and style.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <IconButton sx={{ fontSize: 40, color: '#6b8e23' }}>
                <TrendingUp />
              </IconButton>
              <Typography variant="h6" gutterBottom>
                Our Future Vision
              </Typography>
              <Typography variant="body2">
                We aim to expand our collection and reach more customers, with a target of doubling our sales in the next 2 years.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: 4, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Join Us on Our Journey!
          </Typography>
          <Typography variant="body1" paragraph>
            At our vintage furniture store, we’re more than just a business – we’re a community of passionate collectors and enthusiasts. We look forward to offering you unique, high-quality pieces that bring history and elegance into your home.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AboutPage;
