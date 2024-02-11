import React, { useState } from 'react';
import { API } from '../../../http/index';
import AdminDemoBookings from '../../admin/dashboard/AdminDemoBookings';

const BookingDemo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [classType, setClassType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      name,
      email,
      phoneNumber,
      location,
      classType
    };

    try {
      await API.post('/api/demo', formData);
      // Redirect to a thank you page or do something else after successful submission
    } catch (error) {
      console.error('Error booking demo:', error);
    }
  };

  return (
    <div>
      <h2>Book a Demo Class</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div>
          <label>Class Type:</label>
          <select value={classType} onChange={(e) => setClassType(e.target.value)}>
            <option value="">Select Class Type</option>
            <option value="guitar">Guitar</option>
            <option value="drum">Drum</option>
            <option value="vocal">Vocal</option>
            <option value="violin">Violin</option>
            <option value="music production">Music Production</option>
            <option value="keyboard">Keyboard</option>
          </select>
        </div>
        <button type="submit">Book Demo</button>
      </form>

      <AdminDemoBookings />
    </div>
  );
};

export default BookingDemo;
