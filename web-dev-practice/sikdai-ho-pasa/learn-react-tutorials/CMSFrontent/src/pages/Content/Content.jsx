// src/components/Contact.jsx

import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import Navbar from '../../component/Navbar/Navbar';

const Contact = () => {
  return (
    <>
    <Navbar />
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '16px', marginTop: '32px' }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1">
          You can reach us through the following contact information.
        </Typography>
        <ul>
          <li>Email: contact@example.com</li>
          <li>Phone: +1234567890</li>
        </ul>
      </Paper>
    </Container>
    </>
    
  );
};

export default Contact;
