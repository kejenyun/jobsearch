import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import NavBar from '../../components/common/NavBar';

const Dashboard = () => {
  return (
    <>
        <NavBar />
        <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
            Dashboard
        </Typography>
        
        <Grid container spacing={3} sx={{ mb: 4 }}>
            <Grid item xs={12} sm={6} md={3}>
            <Card>
                <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Total Scans
                </Typography>
                <Typography variant="h4">
                    0
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
            <Card>
                <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Successful Scans
                </Typography>
                <Typography variant="h4">
                    0
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
            <Card>
                <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    New Jobs Detected
                </Typography>
                <Typography variant="h4">
                    0
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
            <Card>
                <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Alert Emails Sent
                </Typography>
                <Typography variant="h4">
                    0
                </Typography>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
        
        <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
            Recent Activity
            </Typography>
            <Typography variant="body2" color="textSecondary">
            No recent activity to display.
            </Typography>
        </Paper>
        </Box>
    </>
  );
};

export default Dashboard;