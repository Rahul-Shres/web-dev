import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { API } from '../../http/index';

const UpdateBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await API.get(`/api/blog/${id}`);
        const { title, content } = response.data;
        setTitle(title);
        setContent(content);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlogPost();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const updatedData = { title, content };
      await API.put(`/api/blog/${id}`, updatedData);
      
      // Manually navigate to view single blog page after updating
      window.location.href = `/blog/${id}`;
    } catch (error) {
      console.error('Error updating blog post:', error);
    }
  };

  return (
    <div>
      <h2>Update Blog Post</h2>
      <form onSubmit={handleUpdate}>
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
