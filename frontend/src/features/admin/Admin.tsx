import React from 'react';
import { Box, Typography, Paper, TextField, Button, Grid } from '@mui/material';
import NavBar from '../../components/common/NavBar';

const Admin = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Account Settings
        </Typography>
        
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Profile Information
          </Typography>
          
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Full Name"
                placeholder="Enter your name"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                placeholder="Enter your email"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Preferred Job Title"
                placeholder="e.g., Product Manager"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Preferred Location"
                placeholder="e.g., Remote, New York"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </Paper>
        
        <Paper sx={{ p: 3, backgroundColor: '#fff8f8' }}>
          <Typography variant="h6" gutterBottom color="error">
            Danger Zone
          </Typography>
          <Typography variant="body2" paragraph>
            Permanently delete your account and all associated data.
          </Typography>
          <Button variant="outlined" color="error">
            Delete Account
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default Admin;