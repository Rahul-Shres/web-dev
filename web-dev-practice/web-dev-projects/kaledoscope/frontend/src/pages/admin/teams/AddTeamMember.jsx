import React, { useState } from 'react';
import { Button } from "@nextui-org/react";
import { API } from '../../../http/index';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AddTeamMember = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleAddMember = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('position', position);
      if (image) {
        formData.append('image', image);
      }
      await API.post('/api/team', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Optionally, you can redirect to another page or show a success message
    } catch (error) {
      console.error('Error adding team member:', error);
    }
  };

  return (
    <div>
      <h2>Add New Team Member</h2>
      <form onSubmit={handleAddMember}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" value={position} onChange={handlePositionChange} />
        </div>
        <div>
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <Link to='/adminteams'>
        <Button type="submit" color="primary">Add Member</Button>
                  </Link>
        
      </form>
    </div>
  );
};

export default AddTeamMember;
