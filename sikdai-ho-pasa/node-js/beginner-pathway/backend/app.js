// Import necessary modules
const express = require('express');
const { blogs, users } = require('./model/index');
const app = express();
const bcrypt = require('bcryptjs');
const { renderCreateBlog, getBlogData, renderForm, createNewBlog, fillSinglePageForm, deleteBlog, editBlog, updateBlog } = require('./controller/blogController');
const { renderRegister, registerNewUser, Renderlogin, login } = require('./controller/userController');


// Database connection (already present in the require("./model/index"); line)

// Set the view engine to EJS
app.set('view engine', 'ejs');
// nodejs lai  file access garna dey vaneko hae yo code lay 
app.use(express.static("public/"))
// Middleware to handle incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Render the home page with some example blog data
app.get('/', getBlogData);

// Render the blog creation form
app.get('/form', renderForm);

// Render the create blog form
app.get("/createBlog", renderCreateBlog);

// Table ma blog kasari halne
app.post("/createBlog", createNewBlog );

//Table bata single blog kasari nikalne

// single blog page 
app.get("/single/:id", fillSinglePageForm)


  // Delete a blog
app.get('/delete/:id', deleteBlog);

// Edit a blog
app.get('/edit/:id', editBlog);

// Update a blog
app.post("/updateBlog/:id", updateBlog);

  
// Render the blog creation form
app.get('/register', renderRegister);

app.post('/register', registerNewUser);

app.get('/login', Renderlogin);

app.post('/login', login);



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


// Listen on port 8000
app.listen(8000, () => {
  console.log('Listening to port 8000');
});