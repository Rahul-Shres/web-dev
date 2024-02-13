import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios for making API requests
import Navbar from '../../component/NavBar/Navbar'; // Fix the path to Navbar
import CreateBlog from '../CreateBlog/CreateBlog';

const Home = () => {
  const [blogs, setBlogs] = useState([]); // Fix the variable name

  // Define an async function to fetch blogs
  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:200/blogs');
      setBlogs(response.data); // Fix the variable name and update state
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <>
      <Navbar />
      <CreateBlog />
      <div className="card" style={{ width: '18rem' }}>
        {blogs.map((blog) => (
          <div key={blog._id}>
            <h2>{blog.title}</h2> {/* Display the title */}
            <h3>{blog.subtitle}</h3> {/* Display the subtitle */}
            <p>{blog.description}</p> {/* Display the description */}
            <a href='#' className=''>Go somewhere</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
