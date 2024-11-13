import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Box, Typography, Container, List, ListItem, ListItemText, Divider, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { FiUsers, FiPackage, FiShoppingCart, FiSettings } from 'react-icons/fi';

// Define colors
const colors = {
  lightBeige: '#ffffff',
  darkBeige: '#F9F7F3',
  vibrantPink: '#842B6B',  // لون فوشي
  softWhite: '#ffffff',
  lightGray: '#f1f1f1',
};

const Sidebar = styled('aside')({
  backgroundColor: colors.darkBeige,
  color: colors.softWhite,
  padding: '20px',
  height: '100vh',
  width: '250px',
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  transition: 'all 0.3s ease',
});

const DashboardHeader = styled('header')({ 
  padding: '20px',
  color: 'black',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  fontSize: '1.3rem',
  fontWeight: 'bold',
});

const SidebarNav = styled('nav')({
  marginTop: '40px',
  '& ul': {
    padding: '0',
    listStyleType: 'none',
  },
  '& li': {
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    '& a': {
      color: colors.softWhite,
      textDecoration: 'none',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      '&:hover': {
        color: colors.lightBeige,
        backgroundColor: colors.vibrantPink,
        padding: '10px',
        borderRadius: '8px',
        transition: 'all 0.3s ease',
      },
    },
    '& svg': {
      marginRight: '10px',
    },
  },
});

const MainContent = styled('main')({
  backgroundColor: colors.lightBeige,
  flex: 1,
  marginLeft: '250px', // تأكيد أن المحتوى لن يغطي الشريط الجانبي
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100vh - 80px)', // تأكيد أن المحتوى سيملأ الصفحة بالكامل باستثناء الفوتر
});

const StatsCard = styled(Paper)({
  padding: '20px',
  marginBottom: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: colors.lightGray,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const AdminDashboard = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Sidebar */}
      <Sidebar>
        <DashboardHeader>
          <Typography variant="h6">Admin Dashboard</Typography>
        </DashboardHeader>
        {/* Search Bar */}
        
        {/* Navigation Links */}
        <SidebarNav>
          <List>
            <ListItem button="true" component={Link} to="users">
              <FiUsers />
              <ListItemText primary="Users" />
            </ListItem>
            <Divider />
            <ListItem button="true" component={Link} to="Addproduct">
              <FiPackage />
              <ListItemText primary="Add Product" />
            </ListItem>
            <Divider />
            <ListItem button="true" component={Link} to="Deleteproduct">
              <FiShoppingCart />
              <ListItemText primary="Delete Product" />
            </ListItem>
            <Divider />
            <ListItem button="true" component={Link} to="UpdateProduct/:id">
              <FiSettings />
              <ListItemText primary="Update Product" />
            </ListItem>
            <Divider />
            <ListItem button="true" component={Link} to="orders">
              <FiShoppingCart />
              <ListItemText primary="Orders" />
            </ListItem>
          </List>
        </SidebarNav>
      </Sidebar>

      {/* Main Content */}
      <MainContent>
        <Container>
          {/* Stats Section */}
          <Box display="flex" gap="20px">
            <StatsCard>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h4">5</Typography>
            </StatsCard>
            <StatsCard>
              <Typography variant="h6">Products</Typography>
              <Typography variant="h4">5</Typography>
            </StatsCard>
          </Box>
          <Outlet />
        </Container>
      </MainContent>
    </Box>
  );
};

export default AdminDashboard;
