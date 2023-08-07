// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

// use npm start for both
const App = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // Add state for tracking the currently edited task
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const backendURL = 'http://localhost:5000'; // Change this URL to your backend's URL

// ...

const fetchTasks = async () => {
  try {
    const response = await axios.get(`${backendURL}/tasks`);
    setTasks(response.data);
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const newTask = { title, description };
    const response = await axios.post(`${backendURL}/tasks`, newTask);
    setTasks([...tasks, response.data]);
    setTitle('');
    setDescription('');
  } catch (error) {
    console.error('Error creating task:', error);
  }
};

const handleDelete = async (id) => {
  try {
    await axios.delete(`${backendURL}/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};

const handleEdit = (task) => {
  setEditTask(task);
  setTitle(task.title);
  setDescription(task.description);
};

const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    const updatedTask = { title, description, completed: editTask.completed };
    const response = await axios.patch(`http://localhost:5000/tasks/${editTask._id}`, updatedTask);
    setTasks(tasks.map((task) => (task._id === editTask._id ? response.data : task)));
    setEditTask(null);
    setTitle('');
    setDescription('');
  } catch (error) {
    console.error('Error updating task:', error);
  }
};

// ... (existing JSX and return statement)
  return (
    <div>
      <h1>Task Management App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <div>
      {/* ... (existing JSX) */}
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span>{task.title}</span>
            <span>{task.description}</span>
            <span>{task.completed ? 'Completed' : 'Not Completed'}</span>
            <button onClick={() => handleDelete(task._id)}>Delete</button>

            {/* Add an Edit button for each task */}
            <button onClick={() => handleEdit(task)}>Edit</button>
          </li>
        ))}
      </ul>

      {/* Add a form for editing a task */}
      {editTask && (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">Update Task</button>
          <button onClick={() => setEditTask(null)}>Cancel</button>
        </form>
      )}
    </div>

      {/* <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span>{task.title}</span>
            <span>{task.description}</span>
            <span>{task.completed ? 'Completed' : 'Not Completed'}</span>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
