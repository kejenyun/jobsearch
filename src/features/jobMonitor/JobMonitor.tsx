import React from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import NavBar from '../../components/common/NavBar';

const JobMonitor = () => {
    return (
      <>
        <NavBar />
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Job Monitor
          </Typography>
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="body1" gutterBottom>
              Add company career sites to monitor for new job postings.
            </Typography>
            <TextField 
              fullWidth 
              label="Company Career URL" 
              placeholder="https://company.com/careers"
              sx={{ mt: 2, mb: 2 }}
            />
            <TextField 
              fullWidth 
              label="Job Title"
              placeholder="Product Manager, Software Engineer, etc."
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary">
              Add URL
            </Button>
          </Paper>
        </Box>
      </>
    );
  };

  export default JobMonitor;