// Importing the useHistory hook from the 'react-router-dom' module
import { useHistory } from 'react-router-dom';

// Creating a functional component called AuthCheck
const AuthCheck = () => {
    // Accessing the history object from the useHistory hook
    const history = useHistory();

    // Checking if the 'loggedIn' key is not present in the localStorage
    // If the key is not present, it means the user is not logged in
    // In that case, redirecting the user to the login page using history.replace()
    // The replace() function replaces the current page with the specified path ("/login" in this case)
    !localStorage.getItem('loggedIn') && history.replace("/login");
};

export default AuthCheck;
