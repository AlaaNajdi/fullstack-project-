import React, { useContext } from 'react';
import { UserContext } from '../../../context/Usercontext';
import Pagination from '@mui/material/Pagination';
import { DeleteAdminUser } from '../../../services/adminService';
import { Container, Box, Typography, Button, Avatar, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserSearchBar from '../../searchbar/UserSearchBar';

const Users = () => {
  const { users, currentPage, setCurrentPage, totalPages, searchTerm, setUsers } = useContext(UserContext);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (userId) => {
    try {
      const response = await DeleteAdminUser(userId);
      if (response.ok) {
        const updatedUsers = users.filter(user => user.userId !== userId);
        setUsers(updatedUsers);
      } else {
        alert('some error when updated user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('some error when deleted user');
    }
  };

  return (
    <Container maxWidth="md">
      <UserSearchBar />
      <Box sx={{ marginTop: 4 }}>
        <Grid container spacing={2}>
          {filteredUsers.map((user) => (
            <Grid item xs={12} md={6} key={user.userId}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 2,
                  border: '1px solid #ddd',
                  borderRadius: '8px',
                  backgroundColor: '#fff',
                  boxShadow: 2,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar sx={{ bgcolor: '#1976d2', marginRight: 2 }}>
                    <AccountCircleIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="h6">{user.name}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {user.email}
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(user.userId)}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#ffebee',
                    },
                  }}
                >
                  Delete
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Pagination */}
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

export default Users;
