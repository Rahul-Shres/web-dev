import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import { API } from '../../../http/index';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom

const ViewSingleMember = () => {
  // Define state variables to hold the team member data
  const [teamMember, setTeamMember] = useState(null);
  const { memberId } = useParams(); // Access memberId from URL parameters

  // Use useEffect hook to fetch the team member data from the backend when the component mounts
  useEffect(() => {
    const fetchTeamMember = async () => {
      try {
        const response = await API.get(`/api/team/${memberId}`);
        setTeamMember(response.data);
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
  const handleUpdateMember = () => {
    // Redirect to the update page with the member ID as a URL parameter
    window.location.href = `/team/${memberId}`;
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

        <Card className="py-4 bg-gray-100">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-black">
            <p className="text-tiny uppercase font-bold">{teamMember.position}</p>
            <h4 className="font-bold text-large">{teamMember.name}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              isZoomed
              width={240}
              alt={teamMember.name}
              src={teamMember.image}
            />
            {/* Admin controls: update and delete buttons */}
            <div className="mt-4 flex justify-between">
              {/* Update button */}
              <Button color="primary" size="small" onClick={handleUpdateMember}>Update</Button>
              {/* Delete button */}
              <Button color="error" size="small" onClick={handleDeleteMember}>Delete</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default ViewSingleMember;
