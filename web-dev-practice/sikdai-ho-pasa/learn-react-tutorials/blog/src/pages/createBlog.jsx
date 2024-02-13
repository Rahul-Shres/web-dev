import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate to navigate
import axios from 'axios';

import Navbar from '../component/Navbar/Navbar';

const CreateBlog = () => {
    const [data, setData] = useState({
      title: '',
      subtitle: '',
      description: '',
    });
  
    const navigate = useNavigate();

    const createBlog = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:8000/createBlog', data); // Use the correct backend URL
          // Rest of your code remains the same
          if (response.status === 200) {
            alert(response.data.message);
            navigate('/'); // Use navigate function to navigate to the home page
          } else {
            alert("Something went wrong");
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Something went wrong');
        }
      };
      
  
   
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({
        ...data,
        [name]: value,
      });
    };
  

  return (
    <>
      <Navbar />
      <div>
        <h2>Create a Blog</h2>
        <form onSubmit={createBlog}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="subtitle">Subtitle</label>
            <input
              type="text"
              id="subtitle"
              name="subtitle"
              value={data.subtitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={data.description}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Create Blog</button>
        </form>
      </div>
    </>
  );
}

export default CreateBlog;
