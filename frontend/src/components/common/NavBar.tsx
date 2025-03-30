import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  
  // Function to determine if a path is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography 
          variant="h6" 
          component={RouterLink} 
          to="/"
          sx={{ 
            flexGrow: 1, 
            textDecoration: 'none', 
            color: 'inherit',
            cursor: 'pointer'
          }}
        >
          JobSearch.ai
        </Typography>
        <Box>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/job-monitor"
            sx={{ 
              fontWeight: isActive('/job-monitor') ? 'bold' : 'normal',
              textDecoration: isActive('/job-monitor') ? 'underline' : 'none'
            }}
          >
            Job Monitor
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/dashboard"
            sx={{ 
              fontWeight: isActive('/dashboard') ? 'bold' : 'normal',
              textDecoration: isActive('/dashboard') ? 'underline' : 'none'
            }}
          >
            Dashboard
          </Button>
          <Button 
            color="inherit" 
            component={RouterLink} 
            to="/admin"
            sx={{ 
              fontWeight: isActive('/admin') ? 'bold' : 'normal',
              textDecoration: isActive('/admin') ? 'underline' : 'none'
            }}
          >
            Account
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;