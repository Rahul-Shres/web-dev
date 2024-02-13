import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Blog from '../components/Blog'; // Import the Blog component
import BlogForm from '../components/BlogForm'; // Import the BlogForm component

const BlogUI = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:8000/blogers');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const createBlog = async (newBlog) => {
    try {
      const response = await axios.post('http://localhost:8000/blogers/createBlog', newBlog);
      setBlogs([...blogs, response.data]);
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/blogers/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const updateBlog = async (updatedBlog) => {
    try {
      const response = await axios.patch(`http://localhost:8000/blogers/${updatedBlog._id}`, updatedBlog);
      setBlogs(blogs.map(blog => (blog._id === updatedBlog._id ? updatedBlog : blog)));
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };
  
  

  return (
    <div>
      <h1>Blog App</h1>
      <BlogForm onSubmit={createBlog} />
      <ul>
        {blogs.map((blog) => (
          <Blog
            key={blog._id}
            blog={blog}
            onDelete={deleteBlog}
            onUpdate={updateBlog}
          />
        ))}
      </ul>
    </div>
  );
};

export default BlogUI;
