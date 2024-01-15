import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, 'User not found'));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
// Here's a breakdown of what the line const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET); does:
// 1. Creates a JSON Web Token (JWT):

// jwt.sign() is a function from the jsonwebtoken library used for generating JWTs.
// 2. Embeds User ID:

// { id: validUser._id }: This part creates an object containing the user's ID, which will be embedded within the token. This allows the server to identify the user from the token later.
// 3. Uses Secret Key:

// process.env.JWT_SECRET: This retrieves a secret key from the application's environment variables. This secret key is crucial for securing the token, ensuring that only the server can create and verify valid tokens.
// 4. Signs the Token:

// The jwt.sign() function combines the user ID, secret key, and other metadata (like expiration time) to create a securely signed JWT.
// 5. Assigns Token to Variable:

// The generated JWT is stored in the token variable for later use.
// Purpose:

// Authentication: The generated JWT serves as a secure way to authenticate the user in subsequent requests.
// Stateless Authentication: JWTs enable stateless authentication, meaning the server doesn't need to store user sessions in memory, improving scalability.
// In the given code, the generated token is later sent back to the client as a cookie. The client will include this cookie in subsequent requests, allowing the server to verify the user's identity and authorize access to protected resources.
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    res
      .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};


export const google = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      const { password: hashedPassword, ...rest } = user._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
      const newUser = new User({
        username:
          req.body.name.split(' ').join('').toLowerCase() +
          Math.random().toString(36).slice(-8),
        email: req.body.email,
        password: hashedPassword,
        profilePicture: req.body.photo,
      });
      await newUser.save();
      const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
      const { password: hashedPassword2, ...rest } = newUser._doc;
      const expiryDate = new Date(Date.now() + 3600000); // 1 hour
      res
        .cookie('access_token', token, {
          httpOnly: true,
          expires: expiryDate,
        })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};