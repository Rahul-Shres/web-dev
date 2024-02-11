import React, { useState, useEffect } from 'react';
import { API } from '../../../http/index';

const AdminDemoBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const response = await API.get('/api/demo');
      setBookings(response.data);
    } catch (error) {
      console.error('Error fetching demo bookings:', error);
    }
  };

  useEffect(() => {
    // Fetch initial bookings
    fetchBookings();

    // Polling interval (fetch bookings every 5 seconds)
    const interval = setInterval(fetchBookings, 5000);

    // Cleanup function to clear interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Admin Demo Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Location</th>
            <th>Class Type</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.phoneNumber}</td>
              <td>{booking.location}</td>
              <td>{booking.classType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDemoBookings;
