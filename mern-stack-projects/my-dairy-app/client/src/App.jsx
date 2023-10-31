
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [blogs, setBlogs] = useState([]); // Corrected the state variable name
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState(''); // Added subtitle state
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchBlogs(); // Changed the function name to match the one defined below
  }, []);

  const fetchBlogs = async () => { // Corrected the function name
    try {
      const response = await axios.get('http://localhost:6000/blogers'); // Corrected the URL
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newBlog = { title, subtitle, description }; // Added subtitle to the newBlog object
      const response = await axios.post('http://localhost:6000/blogers/createBlog', newBlog); // Corrected the URL
      setBlogs([...blogs, response.data]);
      setTitle('');
      setSubtitle(''); // Reset subtitle state
      setDescription('');
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:6000/blogers/${id}`); // Corrected the URL
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div>
      <h1>Blog App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Blog</button>
      </form>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <span>{blog.title}</span>
            <span>{blog.subtitle}</span>
            <span>{blog.description}</span>
            <button onClick={() => handleDelete(blog._id)}>Delete</button> {/* Corrected the variable name */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

// // frontend/src/App.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [blogs, setBlog] = useState([]);
//   const [title, setTitle] = useState('');
//   const [subtitle, setSubtitle] = useState('');
//   const [description, setDescription] = useState('');

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get('<http://localhost:6000/blogers>');
//       setTasks(response.data);
//     } catch (error) {
//       console.error('Error fetching tasks:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const newTask = { title, description };
//       const response = await axios.post('<http://localhost:6000/blogers>', newTask);
//       setTasks([...blogs, response.data]);
//       setTitle('');
//       setDescription('');
//     } catch (error) {
//       console.error('Error creating task:', error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:6000/blogers/${id}`);
//       setTasks(blogs.filter((blog) => blog._id !== id));
//     } catch (error) {
//       console.error('Error deleting task:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Blog  App</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />
//         <button type="submit">Add Blog</button>
//       </form>
//       <ul>
//         {blogs.map((blog) => (
//           <li key={blog._id}>
//             <span>{blog.title}</span>
//             <span>{blog.subtitle}</span>
//             <span>{blog.description}</span>
//             <button onClick={() => handleDelete(task._id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
