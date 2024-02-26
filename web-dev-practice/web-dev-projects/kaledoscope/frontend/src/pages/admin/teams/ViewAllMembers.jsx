import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { API } from '../../../http/index'; // Import your API module
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ViewAllMembers = () => {
  // Define state variables to hold the team members data
  const [teamMembers, setTeamMembers] = useState([]);

  // Use useEffect hook to fetch the team members data from the backend when the component mounts
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await API.get('/api/team'); // Make a GET request using your API module
        setTeamMembers(response.data); // Set the fetched team members data to the state variable
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers(); // Call the fetchTeamMembers function
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  // Function to handle deletion of a team member
  const handleDeleteMember = async (id) => {
    try {
      await API.delete(`/api/team/${id}`); // Make a DELETE request using your API module
      // After successful deletion, fetch updated team members data
      const response = await API.get('/api/team');
      setTeamMembers(response.data);
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  };

  return (
    <div className='bg-gray-50 gap-16'>
      <div className='text-center dark py-4'>
        <div className='pb-10'>
          <div className="mt-14 text-center">
            <h1 className="mt-14 text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
              Meet the brains
            </h1>
            <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-gray-200">
              <span className="text-blue-500">OUR TEAM</span>
            </h1>
          </div>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-8'>
          {/* Map through the team members data and render a Card for each member */}
          {teamMembers.map((member) => (
            <Card key={member._id} className="py-4 bg-gray-100">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-black">
                <p className="text-tiny uppercase font-bold">{member.position}</p>
                <h4 className="font-bold text-large">{member.name}</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  isZoomed
                  width={240}
                  alt={member.name}
                  src={member.image}
                />
                {/* Admin controls: update and delete buttons */}
                <div className="mt-4 flex justify-between">
                  {/* Update button wrapped with Link */}
                  <Link to={`/team/${member._id}`}> {/* Corrected the Link */}
                    <Button color="primary" size="small">Update</Button>
                  </Link>
                  {/* Delete button */}
                  <Button color="error" size="small" onClick={() => handleDeleteMember(member._id)}>Delete</Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewAllMembers;
