// Importing necessary modules and the 'users' model from a different file or module
const { users } = require('../../model/index');
const bcrypt = require('bcryptjs');

// Function to render the registration form
exports.renderRegister = (req, res) => {
  res.render('register.ejs'); // Displaying a form to register a new user
}

// Function to register a new user
exports.registerNewUser = async (req, res) => {
  const { username, email, password, confirmpassword } = req.body;

  try {
    // Check if username, email, password, and confirmpassword are provided
    if (!username || !email || !password || !confirmpassword) {
      return res.status(400).json({ message: 'Please provide username, email, password, and confirm password' });
    }

    // Check if password and confirm password match
    if (password !== confirmpassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    await users.create({
      username: username,
      email: email,
      password: hashedPassword,
      confirmpassword: confirmpassword // Include confirmpassword in database creation
    });

    res.status(201).redirect("/login");
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};





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
