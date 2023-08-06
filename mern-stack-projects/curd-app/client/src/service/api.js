// Import Axios to make HTTP requests
import axios from 'axios';

// Define the URL for the backend API
const URL = "http://localhost:8000";

// Function to add a new user by making a POST request to the backend API
export const addUser = async (data) => {
    try {
        // Send a POST request to the backend API to add a new user
        // The URL is constructed by combining the backend URL with the '/add' endpoint
        // The 'data' parameter contains the user data to be added
        // The 'await' keyword waits for the API call to complete before proceeding
        const response = await axios.post(`${URL}/add`, data);

        // If the API call is successful, the response is returned
        // The response may contain data from the backend, but in this case, it's not being used
        return response;
    } catch (error) {
        // If an error occurs during the API call, it is caught here
        // The error message is logged to the console to help with debugging
        console.log("Error while calling addUser");
    }
}
