import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { UserContext } from '../context/Usercontext';
import CartIcon from '../components/cart/CartIcon';

const NavBar = () => {
  const { userLoggedIn, isAdmin, signOutUser } = useContext(UserContext);

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <AppBar position="sticky" sx={{
      background: 'linear-gradient(45deg, #ffcc5c,#96387C, #ffcc5c)', 
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
    }}>
      <Toolbar>
        <Typography variant="h6" sx={{
          flexGrow: 1,
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 'bold',
          color: '#fff',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          cursor: 'pointer',
        }}>
          E-commerce
        </Typography>
        <Button sx={{
          color: '#fff',
          '&:hover': {
            backgroundColor: '#8B5DFF', 
          },
        }} component={Link} to="/">Home</Button>
        <Button sx={{
          color: '#fff',
          '&:hover': {
            backgroundColor: '#8B5DFF',
          },
        }} component={Link} to="/about">About</Button>
        <Button sx={{
          color: '#fff',
          '&:hover': {
            backgroundColor: '#8B5DFF',
          },
        }} component={Link} to="/ProductList">Product List</Button>
        {!userLoggedIn ? (
          <>
            <Button sx={{
              color: '#fff',
              '&:hover': {
                backgroundColor: '#8B5DFF',
              },
            }} 
            component={Link} to="/signup">Signup</Button>
            <Button sx={{
              color: '#fff',
              '&:hover': {
                backgroundColor: '#8B5DFF',
              },
            }} component={Link} to="/signin">Signin</Button>
          </>
        ) : (
          <>
            {isAdmin ? (
              <Button sx={{
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#8B5DFF',
                },
              }} component={Link} to="/admin/dashboard">Admin Dashboard</Button>
            ) : (
              <Button sx={{
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#8B5DFF',
                },
              }} component={Link} to="/user/dashboard">User Dashboard</Button>
            )}
            <Button sx={{
              color: '#fff',
              '&:hover': {
                backgroundColor: '#8B5DFF',
              },
            }} component={Link} to="/signout" onClick={handleSignOut}>Signout</Button>
            <IconButton sx={{
              color: '#fff',
              fontSize: '24px',
            }} 
            component={Link} to="/cart">
              <CartIcon />
            </IconButton>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
