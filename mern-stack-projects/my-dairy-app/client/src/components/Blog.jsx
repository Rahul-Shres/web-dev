// Blog.js
import React from 'react';

const Blog = ({ blog, onDelete }) => (
  <li>
    <span>Title: {blog.title}</span>
    <span>Subtitle: {blog.subtitle}</span>
    <span>Description: {blog.description}</span>
    <button onClick={() => onDelete(blog._id)}>Delete</button>
  </li>
);

export default Blog;
