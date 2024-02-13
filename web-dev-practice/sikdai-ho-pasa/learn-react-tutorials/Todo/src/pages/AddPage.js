import React, { useRef } from 'react'
import Navbar from '../components/Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AuthCheck from '../middleware/AuthCheck';

const AddPage = () => {
  const history = useHistory();

  
  const todoText = useRef();

  AuthCheck();

  const addTodo = (e) => {
    e.preventDefault();
    // Taking the todo string from the input field
    const todoString = todoText.current.value;
  
    // Checking if there are any todos already stored in the local storage
    const initialTodo = localStorage.getItem('todo') 
      ? JSON.parse(localStorage.getItem('todo')) // If todos exist, parse them from JSON format into an array
      : []; // If no todos exist, initialize an empty array
  
    // Adding the new todo to the array of existing todos
    initialTodo.push(todoString);
  
    // Storing the updated todos in local storage, converting them back to JSON format
    localStorage.setItem('todo', JSON.stringify(initialTodo));
    
    // Redirecting the user to the specified route ("/")
    history.push("/");
  };
  
  return (
    <div>
      <Navbar />
     <div className="todo_container">
      <h1>Add Todo:</h1>

      {/* Form */}
      <form onSubmit={addTodo} >

        {/* using ref here */}
        <input ref={todoText}type="text" name="todo" placeholder="Add Todo" />
        <button>Save to-do</button>
      </form>
     </div>
    </div>
  )
}

export default AddPage

// we can grab data from useref