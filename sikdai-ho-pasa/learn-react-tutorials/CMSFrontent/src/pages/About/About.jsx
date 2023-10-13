// src/components/About.jsx

import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '16px', marginTop: '32px' }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          We are a passionate team dedicated to creating great web experiences.
        </Typography>
        <Typography variant="body1">
          Our mission is to provide innovative solutions that meet your needs.
        </Typography>
      </Paper>
    </Container>
  );
};

export default About;
