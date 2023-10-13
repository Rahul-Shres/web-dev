// src/components/Home.jsx

import React from 'react';
import { Container, Typography, Button, Paper } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={8} style={{ padding: '16px', marginTop: '32px' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="body1">
          This is a simple homepage using Material-UI in React.
        </Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
          Get Started
        </Button>
      </Paper>
    </Container>
  );
};

export default Home;
