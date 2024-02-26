import React, { useState, useEffect } from 'react';
import { API } from '../../../http/index';
import { useParams, Link  } from 'react-router-dom';

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

  const handleDelete = async () => {
    try {
      await API.delete(`/api/blog/${id}`);
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };
  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
      <img src={blog.image} alt={blog.title} />
      <Link to={`/update/${id}`}>Update Blog</Link>
      <button onClick={handleDelete}>Delete Blog</button>


    </div>
  );
};

export default ViewSingleBlog;
