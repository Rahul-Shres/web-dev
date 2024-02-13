import React, { useState, useEffect } from 'react';
import { API } from './http/index';

const ViewBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await API.get('/api/blog');
      setBlogPosts(response.data);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  return (
    <div>
      <h2>Blog Posts</h2>
      {blogPosts.map((blogPost) => (
        <div key={blogPost._id}>
          <h3>{blogPost.title}</h3>
          <p>{blogPost.content}</p>
          <img src={`http://localhost:8000/${blogPost.imageUrl}`} alt={blogPost.title} />
        </div>
      ))}
    </div>
  );
};

export default ViewBlogPosts;
