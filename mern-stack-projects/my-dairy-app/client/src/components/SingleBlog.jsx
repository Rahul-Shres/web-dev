import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Typography } from '@mui/material';

function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    async function fetchBlog() {
      const response = await axios.get(`http://localhost:6000/blogers/${id}`);
      setBlog(response.data);
    }
    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant="h4">{blog.title}</Typography>
      <Typography variant="subtitle1">{blog.subtitle}</Typography>
      <Typography variant="body1">{blog.description}</Typography>
      <Button variant="outlined" color="primary">
        Update
      </Button>
      <Button variant="outlined" color="secondary">
        Delete
      </Button>
    </Container>
  );
}

export default SingleBlog;
