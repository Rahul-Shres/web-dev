const AuthCheckBoolean = () => {

    // Initialize the loggedIn variable as false by default
    let loggedIn = false; 

    // Check if the 'loggedIn' item exists in the localStorage
    if(localStorage.getItem('loggedIn')){
        // If the item exists, set loggedIn to true
        loggedIn = true;
    }

    // Return the value of loggedIn indicating the user's login status
    return loggedIn;
}

export default AuthCheckBoolean;
