import React, { useEffect, useState } from 'react';

import { getUserByIdService } from '../../../services/userService';
import { Card, CardContent, Typography, Grid, CircularProgress, Container, Box, Divider } from '@mui/material';

export const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);
  let UId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchUserData = async () => {
      if (UId) {
        try {
          const response = await getUserByIdService(UId);
          setUserInfo(response.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [UId]);

  if (!userInfo) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Card sx={{ minWidth: 275, borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h4" component="div" color="primary" align="center" gutterBottom>
                User Profile
                </Typography>
                <Divider sx={{ marginBottom: 2 }} />
                
                <Typography variant="body1" color="#AE6D4B" paragraph>
                  <strong>User ID:</strong> {userInfo.userId}
                </Typography>
                <Divider sx={{ marginBottom: 1 }} />
                <Typography variant="body1" color="#781749" gutterBottom>
                  <strong>Name:</strong> {userInfo.name}
                </Typography>
                <Divider sx={{ marginBottom: 1 }} />
                <Typography variant="body1" color="#781749" gutterBottom>
                  <strong>Email:</strong> {userInfo.email}
                </Typography>
                <Divider sx={{ marginBottom: 1 }} />
                <Typography variant="body1" color="#781749" paragraph>
                  <strong>Account Created:</strong> {new Date(userInfo.createdAt).toLocaleDateString()}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
