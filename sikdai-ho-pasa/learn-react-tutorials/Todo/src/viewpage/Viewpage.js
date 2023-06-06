import React from 'react';
import Navbar from '../components/Navbar';
import { Link, useHistory, useParams } from 'react-router-dom';
import AuthCheckBoolean from '../middleware/AuthCheckBoolean';

const ViewPage = () => {
  const history = useHistory();

  // Extracting parameters from the URL
  const getParams = useParams();

  const getID = getParams.id;

  // Retrieving data from local storage based on the ID
  const getStorage = localStorage.getItem('todo')
    ? JSON.parse(localStorage.getItem('todo'))
    : [];
  // Accessing specific data from the retrieved storage
  const getData = getStorage[getID];

  const goBack = () => {
    history.push('/');
  };

  // Deleting a todo item
const deleteTodo = () => {
  // Remove the specific todo from the storage array
  getStorage.splice(getID, 1);
  
  // Update the local storage with the modified array
  localStorage.setItem('todo', JSON.stringify(getStorage));
  
  // Redirect to the main page
  history.replace('/');
}


  return (
    <div>
      <Navbar />
      <button onClick={goBack}>Go Back</button>
      <div style={
        {
          background: '#a7a7a7',
          padding: "20px",
          fontSize: "20px",
          margin: "20px"
        }
      }>
      {/* Rendering the specific data retrieved from local storage */}
      {getData}
    </div>
    <div>

      {
        AuthCheckBoolean() ? <>
        <button style={{background: 'red'}} onClick={deleteTodo}>
      Delete Todo
      </button>
        </> : <>
        <p> Login to see more options <Link to="/login">Log in now</Link></p>
        </>

      }
      
    </div>
    </div>
  );
};

export default ViewPage;
