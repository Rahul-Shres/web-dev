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
    <div className="h-screen max-w-md mx-auto p-4">
    <h2 className="text-2xl font-semibold mb-4">Add New Team Member</h2>
    <form onSubmit={handleAddMember} className="space-y-4">
      <div>
        <label className="block mb-1">Name:</label>
        <input type="text" value={name} onChange={handleNameChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label className="block mb-1">Position:</label>
        <input type="text" value={position} onChange={handlePositionChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div>
        <label className="block mb-1">Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-4">
      
          <Button type="submit" color="primary" className="w-full md:w-auto mt-2 text-sm"><Link to='/adminteams'>Add Member </Link></Button>
         
          <Link to='/dashboard'>
            <Button color="secondary" className="w-full md:w-auto mt-2 text-sm"> Go Back To Dashboard</Button>
          </Link>
        </div>
    </form>
    <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>
    <div className='mt-8'>
    <Button color="primary" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"><Link to='/adminteams'>View and Update Team Members </Link></Button>

    </div>
  </div>
    // <div>
    //   <h2>Add New Team Member</h2>
    //   <form onSubmit={handleAddMember}>
    //     <div>
    //       <label>Name:</label>
    //       <input type="text" value={name} onChange={handleNameChange} />
    //     </div>
    //     <div>
    //       <label>Position:</label>
    //       <input type="text" value={position} onChange={handlePositionChange} />
    //     </div>
    //     <div>
    //       <label>Image:</label>
    //       <input type="file" accept="image/*" onChange={handleImageChange} />
    //     </div>
    //     <Link to='/adminteams'>
    //     <Button type="submit" color="primary">Add Member</Button>
    //               </Link>
        
    //   </form>
    // </div>
  );
};

export default AddTeamMember;
