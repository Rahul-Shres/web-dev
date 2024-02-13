import React, { useState } from 'react';
import { API } from '../../http/index';

const UpdateBlog = ({ blog }) => {
  const [title, setTitle] = useState(blog.title);
  const [content, setContent] = useState(blog.content);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.put(`/api/blog/${blog._id}`, { title, content });
      // Show a success message or redirect
      console.log('Blog post updated successfully');
    } catch (error) {
      console.error('Error updating blog post:', error);
      // Display an error message to the user
    }
  };

  return (
    <div>
      <h2>Update Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
