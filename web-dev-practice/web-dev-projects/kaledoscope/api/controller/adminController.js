const Admin = require("../models/adminModel");
const bcrypt = require('bcrypt');


// Admin Registration
exports.createAdmin = ('/', async (req, res) => {
    try {
      const { email, username, password } = req.body;
      console.log(email, username, password)
      const hashedPassword = await bcrypt.hash(password, 10);
      const admin = new Admin({ 
        email, 
        username, 
        password: hashedPassword });
      await admin.save();
      res.status(201).send("Admin created successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Failed to register admin");
    }
  });

  
  // Admin Login
exports.loginAdmin = ('/', async (req, res) => {
    try {
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(404).send("Admin not found");
      }
      const validPassword = await bcrypt.compare(password, admin.password);
      if (!validPassword) {
        return res.status(401).send("Invalid password");
      }
      res.status(200).send("Login successful");
    } catch (error) {
      console.error(error);
      res.status(500).send("Failed to login");
    }
  });


  // Admin Registration
// app.post('/admin/register', async (req, res) => {
//     try {
//       const { email, username, password } = req.body;
//       console.log(email, username, password)
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const admin = new Admin.create({ 
//         email, 
//         username, 
//         password: hashedPassword });
//       await admin.save();
//       res.status(201).send("Admin created successfully");
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Failed to register admin");
//     }
//   });



  // Admin Login
//   app.post('/admin/login', async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       const admin = await Admin.findOne({ email });
//       if (!admin) {
//         return res.status(404).send("Admin not found");
//       }
//       const validPassword = await bcrypt.compare(password, admin.password);
//       if (!validPassword) {
//         return res.status(401).send("Invalid password");
//       }
//       res.status(200).send("Login successful");
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Failed to login");
//     }
//   });
  
  