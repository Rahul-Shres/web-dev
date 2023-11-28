const { users } = require('../model/index');
const bcrypt = require('bcryptjs');


exports.renderRegister = (req, res) => {
    res.render('register.ejs');
  }

exports.registerNewUser = async (req, res) => {
    console.log(req.body);
    const { username, email, password } = req.body;
    try {
      if (!username || !email || !password) {
        return res.status(400).json({ message: 'Please provide username, email, and password' });
      }
      
      const createUser = await users.create({
        username: username,
        email: email,
        password: bcrypt.hashSync(password,8)
      });
      
      // Handle success (e.g., send a response)
      res.status(201).redirect('/login');
    } catch (error) {
      // Handle error (e.g., send an error response)
      res.status(500).json({ message: 'Error creating user', error: error.message });
    }
  }


  exports.Renderlogin = async(req, res) => {
    res.render('login.ejs');
  };



 exports.login = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;

  try {
    const user = await users.findOne({
      where: { email: email }
    });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const username = user.username; // Fetch the username from the user object

        // Redirect to the homepage with the username as a query parameter
        res.redirect(`/?username=${encodeURIComponent(username)}`);
      } else {
        res.status(401).json({ message: "Invalid Email and Password" });
      }
    } else {
      res.status(401).json({ message: "Invalid Email and Password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Error during login" });
  }
}

// // Render the blog creation form
// 
// app.post('/login', async (req, res) => {
//   console.log(req.body);
//   const { email, password } = req.body;
  
//   // check if email exists or not
//   const emailExist = await users.findAll({ 
//     where: { email: email } 
//   });
  
//   if (emailExist.length > 0) {
//     const isMatch = await bcrypt.compare(password, emailExist[0].password);
//     console.log(isMatch); // Now it will log the comparison result
//     if(isMatch) {
//        // Assuming "username" is a field in your User model
//        const username = user.username; // Fetch the username from the user object
      
//       // Sending both the username and a success message
//       res.json({ message: "logged in successfully", username: username });
//     }else{
//       res.send("Invalid Email and Password");
//     }
//   }
// });

