import React, { useState } from 'react';
import axios from 'axios';

function BlogForm({ updateBlogList }) {
  const [formData, setFormData] = useState({ title: '', subtitle: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('<http://localhost:6000/blogers/createBlog>', formData);
      if (response.status === 201) {
        updateBlogList(); // Refresh the blog list after creating a new blog
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
        <label>Subtitle:</label>
        <input
          type="text"
          value={formData.subtitle}
          onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
          required
        />
        <label>Description:</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <button type="submit">Create Blog</button>
      </form>
    </div>
  );
}

export default BlogForm;
