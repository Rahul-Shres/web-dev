import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from '../../http/index';

const UpdateBlog = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

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

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      if (image) {
        formData.append('image', image);
      }
      await API.put(`/api/blog/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Manually navigate to view single blog page after updating
      window.location.href = `/blog/${id}`;
    } catch (error) {
      console.error('Error updating blog post:', error);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
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
        <div>
          <label>Update Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
