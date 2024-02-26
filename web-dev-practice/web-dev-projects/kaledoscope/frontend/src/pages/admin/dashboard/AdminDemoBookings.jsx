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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Location</th>
            <th>Class Type</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{index + 1}</td> {/* Displaying sequential numbers */}
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{booking.name}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{booking.email}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{booking.phoneNumber}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{booking.location}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{booking.classType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDemoBookings;
