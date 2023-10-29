import React, { useState, useEffect } from 'react'; // Fixed import statements
import { useHistory } from 'react-router-dom'; // Import useHistory to navigate
import axios from 'axios'; // Import axios

import Navbar from '../../component/NavBar/Navbar'; // Fixed import path

const CreateBlog = () => {
  const [data, setData] = useState({
    title: '',
    subtitle: '',
    description: '',
  });

  const history = useHistory(); // Use useHistory for navigation

  const createBlog = async (e) => { // Fixed function declaration
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:2000/blogs", data);

      if (response.status === 200) { // Check response status, not statusCode
        alert(response.data.message);
        history.push('/'); // Use history.push to navigate to the home page
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
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
