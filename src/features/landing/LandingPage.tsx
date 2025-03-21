import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export {};

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          JobSearch.ai
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Get interviews for your dream job
        </Typography>
        <Typography variant="body1" paragraph>
          JobSearch.ai helps job seekers land their dream jobs by monitoring opportunities from their choice of top employers. 
          The system runs daily in the background, and when it notices an opportunity, it sends the application directly to the company with minimal human intervention.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          onClick={() => navigate('/login')}
          sx={{ mt: 2 }}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default LandingPage;