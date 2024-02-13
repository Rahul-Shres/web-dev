import React, { useState, useEffect } from 'react';
import { API } from '../../http/index';
import { useParams } from 'react-router-dom';

const ViewSingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await API.get(`/api/blog/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <img src={`http://localhost:8000/${blog.image}`} alt={blog.title} />
    </div>
  );
};

export default ViewSingleBlog;
