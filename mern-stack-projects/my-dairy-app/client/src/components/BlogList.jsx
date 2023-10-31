import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    try {
      const response = await axios.get('<http://localhost:6000/blogers>');
      setBlogs(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>List of Blogs</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h3>{blog.title}</h3>
            <p>{blog.subtitle}</p>
            <p>{blog.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;





// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { Button, Card, CardContent, Container, Typography } from '@mui/material';

// function BlogList() {
//   const [blogs, setBlogs] = useState([]);



//   useEffect(() => {
//     async function fetchBlogs() {
//       const response = await axios.get('http://localhost:6000/blogers');
//       setBlogs(response.data);
//     }
//     fetchBlogs();
//   }, []);

//   return (
//     <Container>
//       {blogs.map((blog) => (
//         <Card key={blog._id} style={{ marginBottom: '20px' }}>
//           <CardContent>
//             <Typography variant="h5">{blog.title}</Typography>
//             <Typography variant="subtitle1">{blog.subtitle}</Typography>
//             <Button
//               component={Link}
//               to={`/blog/${blog._id}`}
//               variant="outlined"
//               color="primary"
//             >
//               View
//             </Button>
//           </CardContent>
//         </Card>
//       ))}
//     </Container>
//   );
// }

// export default BlogList;
