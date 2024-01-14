// server/routes/auth.js
import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// Sign-in route
router.post('/signin', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ username, password });

    if (user) {
      // Store user information in session storage
      req.session.user = user;
      res.json({ success: true, username: user.username });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;
