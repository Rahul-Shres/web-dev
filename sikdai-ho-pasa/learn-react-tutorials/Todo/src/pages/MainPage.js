import React from 'react';
import Navbar from '../components/Navbar';
import { FaRegEye } from "react-icons/fa";
import { Link, useHistory } from 'react-router-dom';

// The MainPage component represents the main page of the application
const MainPage = () => {
  // Retrieve the 'todo' item from localStorage and parse it as JSON
  const getTodo = localStorage.getItem('todo')
    ? JSON.parse(localStorage.getItem('todo'))
    : [];

  // Access the history object from the useHistory hook
  const history = useHistory();

  // Handle the event when the user clicks on the "Add todo" button
  const handleAddTodo = () => {
    // Navigate to the '/add' page using history.push()
    history.push('/add');
  };

  return (
    <div>
      <Navbar />
      <div className='todo-container'>
        <h3>Your Todo</h3>
        {getTodo && getTodo.length > 0 ? (
          // Render each todo item as a div element with a link to view details
          getTodo.map((el, index) => (
            <div key={index} className='single_todo'>
              {el}
              <Link to={`/view/${index}`}>
                <FaRegEye />
              </Link>
            </div>
            // Render each todo item as a div element with a link to view details
// The 'key' attribute is set to 'index' for efficient rendering and identification
// 'el' represents the content of the todo item, which is displayed inside the div element
// The Link component is used to create a link with the path '/view/${index}' for viewing the details of the todo item
// The FaRegEye component displays an eye icon inside the Link component
          ))
        ) : (
          // If there are no todos, display a centered message and a button to add a new todo
          <center>
            Nothing in your todo, please{' '}
            <button onClick={handleAddTodo}>Add todo</button>
          </center>
        )}
      </div>
    </div>
  );
};

export default MainPage;
