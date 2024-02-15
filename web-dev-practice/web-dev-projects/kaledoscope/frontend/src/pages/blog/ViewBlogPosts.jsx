import React, { useState, useEffect } from 'react';
import { API } from '../../http/index';
import { Link } from 'react-router-dom';

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
          <img src={blogPost.image} alt={blogPost.title} />
          <Link to={`/blog/${blogPost._id}`}>View Single Blog</Link>
        </div>
      ))}
    </div>
  );
};

export default ViewBlogPosts;
