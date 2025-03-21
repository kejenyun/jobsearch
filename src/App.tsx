import React from 'react';
import './App.css';
import { Button, Container, Typography, Box } from '@mui/material';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MainLayout from './components/layout/MainLayout';
// Import placeholder components (you'll create these later)
import JobMonitor from './features/jobMonitor/JobMonitor';
import Dashboard from './features/dashboard/Dashboard';
import Admin from './features/admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Container maxWidth="md">
              <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
                <Typography variant="h2" component="h1" gutterBottom>
                  JobSearch.ai
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                  Get interviews for your dream job
                </Typography>
                <Typography variant="body1" paragraph sx={{ mt: 3, mb: 3 }}>
                  JobSearch.ai helps job seekers land their dream jobs by monitoring opportunities from their choice of top employers. 
                  The system runs daily in the background, and when it notices an opportunity, it sends the application directly to the company with minimal human intervention.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <Link to="/job-monitor" style={{ textDecoration: 'none' }}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="large"
                    >
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/login" style={{ textDecoration: 'none' }}>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      size="large"
                    >
                      Login
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Container>
          </div>
        } />
        
        {/* These will be added once you create those components */}
        <Route path="/job-monitor" element={<JobMonitor />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;