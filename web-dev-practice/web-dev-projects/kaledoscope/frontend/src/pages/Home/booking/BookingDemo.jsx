import React, { useState } from 'react';
import { API } from '../../../http/index';
import AdminDemoBookings from '../../admin/dashboard/AdminDemoBookings';
import './BookingDemo.css'; // Import your custom CSS file for styling
import Appbar from '../../../components/nabvar/Navbar';
import Footer from '../footer/Footer';
import Faq from '../faq/Faq';

const BookingDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    location: '',
    classType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await API.post('/api/demo', formData);
      // Redirect to a thank you page or do something else after successful submission
    } catch (error) {
      console.error('Error booking demo:', error);
    }
  };

  return (
    <>
    <Appbar />
    <div className="booking-demo-container">
      <h2>Book a Demo Class</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="classType">Class Type:</label>
          <select id="classType" name="classType" value={formData.classType} onChange={handleChange}>
            <option value="">Select Class Type</option>
            <option value="guitar">Guitar</option>
            <option value="drum">Drum</option>
            <option value="vocal">Vocal</option>
            <option value="violin">Violin</option>
            <option value="music production">Music Production</option>
            <option value="keyboard">Keyboard</option>
          </select>
        </div>
        <button type="submit" className="btn-submit">Book Demo</button>
      </form>
    </div>
    <Faq />
    <Footer />
    </>
  );
};

export default BookingDemo;
