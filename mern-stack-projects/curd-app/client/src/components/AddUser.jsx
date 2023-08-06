// Import required modules from React, MUI (Material-UI), and the API service
import React, { useState } from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material';
import { addUser } from '../service/api';

// Apply CSS styling to the container using MUI styled component
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

// Define the AddUser component
const AddUser = () => {
  // Define a state variable 'formData' to store user input (name, username, email, phone)
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
  });

  // Function to handle changes in the input fields and update the 'formData' state
  function onValueChanged(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Function to handle the 'Add User' button click and make an API call to add the user
  async function addUserDetails() {
    try {
      // Make an API call to the backend to add the user using 'formData' as input
      await addUser(formData); // Pass formData as an argument to addUser

      // Log the 'formData' to the console after the user is successfully added
      console.log('Form Data:', formData);
    } catch (error) {
      // If an error occurs during the API call, log the error to the console
      console.log('Error while adding user:', error);
    }
  }
  
  // Render the AddUser component
  return (
    <Container>
      {/* Display a heading */}
      <Typography variant='h4'>Add User</Typography>

      {/* InputBox for 'Name' */}
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={onValueChanged} name='name' />
      </FormControl>

      {/* InputBox for 'Username' */}
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={onValueChanged} name='username' />
      </FormControl>

      {/* InputBox for 'Email' */}
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={onValueChanged} name='email' />
      </FormControl>

      {/* InputBox for 'Phone' */}
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={onValueChanged} name='phone' />
      </FormControl>

      {/* 'Add User' button */}
      <FormControl>
        <Button variant='contained' onClick={addUserDetails}>
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

// Export the AddUser component to use it elsewhere
export default AddUser;
