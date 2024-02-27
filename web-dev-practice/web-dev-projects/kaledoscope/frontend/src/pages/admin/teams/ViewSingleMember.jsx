import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { API } from '../../../http/index';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom

const ViewSingleMember = () => {
  // Define state variables to hold the team member data
  const [teamMember, setTeamMember] = useState(null);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const { memberId } = useParams(); // Access memberId from URL parameters

  // Use useEffect hook to fetch the team member data from the backend when the component mounts
  useEffect(() => {
    const fetchTeamMember = async () => {
      try {
        const response = await API.get(`/api/team/${memberId}`);
        setTeamMember(response.data);
        setName(response.data.name);
        setPosition(response.data.position);
      } catch (error) {
        console.error('Error fetching team member:', error);
      }
    };

    fetchTeamMember();
  }, [memberId]);

  // Function to handle deletion of the team member
  const handleDeleteMember = async () => {
    try {
      await API.delete(`/api/team/${memberId}`);
      // Redirect to the view all members page after deletion
      window.location.href = '/adminteams';
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  };

  // Function to handle updating the team member
  const handleUpdateMember = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('position', position);

      // If you need to update the image as well, add the image to the form data
      // formData.append('image', image);

      await API.put(`/api/team/${memberId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Reload the page to see the updated data
      window.location.reload();
    } catch (error) {
      console.error('Error updating team member:', error);
    }
  };

  if (!teamMember) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-gray-50 gap-16'>
      <div className='text-center dark py-4'>
        <div className='pb-10'>
          <div className="mt-14 text-center">
            <h1 className="mt-14 text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
              Team Member Details
            </h1>
          </div>
        </div>
      
        <div className="py-8 bg-gray-100 mx-48 flex flex-col items-center justify-center">
          <div className="pb-0 pt-2 px-4 flex-col items-start text-black">
            <p className="text-tiny uppercase font-bold text text-center">{teamMember.position}</p>
            <h4 className="font-bold text-large">{teamMember.name}</h4>
          </div>
          <div className="overflow-visible py-2 flex flex-col items-center justify-center">
            <Image
              isZoomed
              width={240}
              alt={teamMember.name}
              src={teamMember.image}
            />
            
             {/* Admin controls: update and delete buttons */}
             <div className="mt-4 flex flex-col items-center">
              <form onSubmit={handleUpdateMember} className='block'>
                <input
                  type="text"
                  value={name}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  value={position}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white-700 dark:border-white-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setPosition(e.target.value)}
                />
              </form>
              <div className='flex justify-center space-x-5'>
              <Button color="primary" size="small" type="submit" className="mt-2">Update</Button>
              <Button color="primary" size="small" type="submit" onClick={handleDeleteMember} className="mt-2">Delete</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewSingleMember;
