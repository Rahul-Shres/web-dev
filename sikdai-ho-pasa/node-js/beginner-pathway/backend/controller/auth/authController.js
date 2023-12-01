// Importing necessary modules and the 'users' model from a different file or module
const { users } = require('../../model/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()
// Function to render the registration form
exports.renderRegister = (req, res) => {
  res.render('register.ejs'); // Displaying a form to register a new user
}

// Function to register a new user
exports.registerNewUser = async (req, res) => {
  const { username, email, password, confirmpassword } = req.body;
  console.log(username, email, password, confirmpassword);

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
  if(!email || !password) {
    return res.send("Email and password must be provided")
  }

  try {
    // Finding a user in the database based on the provided email
    const user = await users.findOne({
      where: { email: email }
    });

    if (user) {
      const userPassword = user.password    
      // Comparing the provided password with the hashed password stored in the database
      const isMatch = await bcrypt.compare(password, userPassword);

      if (isMatch) {
        const username = user.username; // Fetching the username from the user object
        const userId = user.id
              // Jwt here
        
              const token = jwt.sign({ id: userId }, process.env.SECRETKEY, {
                expiresIn: "30d"
              });
              
        
          console.log(token);
        
      
          // cookie jhola ho chau chau token ho
           // browser ma application tab vitra cokkie vanne ma basxa
           const cookieOptions = {
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
            httpOnly: true,
            // Other options like secure, sameSite, etc. can be added if needed
          };
          
          res.cookie("token", token, cookieOptions);
          
         
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
