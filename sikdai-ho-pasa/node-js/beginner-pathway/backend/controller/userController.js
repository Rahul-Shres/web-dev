// Importing necessary modules and the 'users' model from a different file or module
const { users } = require('../model/index');
const bcrypt = require('bcryptjs');

// Function to render the registration form
exports.renderRegister = (req, res) => {
  res.render('register.ejs'); // Displaying a form to register a new user
}

// Function to register a new user
exports.registerNewUser = async (req, res) => {
  console.log(req.body); // Logging the request body

  const { username, email, password } = req.body; // Extracting user details from the request body
  try {
    // Checking if username, email, and password are provided
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Please provide username, email, and password' });
    }
    
    // Creating a new user in the database
    const createUser = await users.create({
      username: username,
      email: email,
      password: bcrypt.hashSync(password, 8) // Hashing the password before storing it
    });
    
    // Redirecting to the login page after successful registration
    res.status(201).redirect('/login');
  } catch (error) {
    // Handling errors during user creation
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
}

// Function to render the login form
exports.Renderlogin = async (req, res) => {
  res.render('login.ejs'); // Displaying a form for user login
};

// Function to handle user login
exports.login = async (req, res) => {
  console.log(req.body); // Logging the request body
  
  const { email, password } = req.body; // Extracting email and password from the request
  
  try {
    // Finding a user in the database based on the provided email
    const user = await users.findOne({
      where: { email: email }
    });

    if (user) {
      // Comparing the provided password with the hashed password stored in the database
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const username = user.username; // Fetching the username from the user object

        // Redirecting to the homepage with the username as a query parameter after successful login
        res.redirect(`/?username=${encodeURIComponent(username)}`);
      } else {
        // Handling incorrect email or password
        res.status(401).json({ message: "Invalid Email and Password" });
      }
    } else {
      // Handling incorrect email or password
      res.status(401).json({ message: "Invalid Email and Password" });
    }
  } catch (error) {
    // Handling errors during the login process
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error during login" });
  }
}
