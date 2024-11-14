import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Box, Typography, List, ListItem, ListItemText, Divider, styled } from '@mui/material';
import { FiUser} from 'react-icons/fi'; 

const colors = {
  lightBeige: '#ffffff',
  darkBeige: '#F9F7F3',
  vibrantPink: '#842B6B', 
  softWhite: '#000000',
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

const StyledLink = styled(Link)({
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
  '& svg': {
    marginRight: '10px',
  },
});

const MainContent = styled('main')({
  backgroundColor: colors.lightBeige,
  flex: 1,
  marginLeft: '250px', 
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100vh - 80px)', 
});

const UserDashboard = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Sidebar>
        <Typography variant="h5" gutterBottom>
          User Dashboard
        </Typography>
        <Divider />
        <nav>
          <List>
            <ListItem button='true' component={StyledLink} to="profile">
              <FiUser />
              <ListItemText primary="Personal Profile" />
            </ListItem>
            <Divider />
          </List>
        </nav>
      </Sidebar>

      <MainContent>
        <Outlet />
      </MainContent>
    </Box>
  );
};

export default UserDashboard;
