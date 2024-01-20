const express = require('express');
const app = express();
const passport = require('passport');
require('dotenv').config();
const session = require('express-session');
const connectToDB = require('./database/database');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs'); // Add this line
const { decodeToken } = require('./services/decodeToken');
const generateToken = require('./services/generateToken');
const User = require('./model/userModel');


connectToDB(process.env.MONGO)

const profileRoute = require("./routes/profileRoute")
app.use("/api/profile", profileRoute);

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
    exposedHeaders: ['Authorization'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  console.log('serializeUser:', user);
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('deserializeUser:', user);
  done(null, user);
});


app.use(cookieParser());

const OAuth2Strategy = require('passport-google-oauth2').Strategy;

passport.use(
  new OAuth2Strategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      scope: ['profile', 'email'],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        
        if (!profile || !profile.id) {
          throw new Error('Invalid profile data');
        }

        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // generate random password
          const generatedPassword =
            Math.random().toString(36).slice(-8) +
            Math.random().toString(36).slice(-8);
          const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);

          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            image: profile.photos[0].value,
            password: hashedPassword,
            username:
              profile.displayName.split(' ').join('').toLowerCase() +
              Math.random().toString(36).slice(-8),
          });

          const token = generateToken({ _id: user._id });
          console.log(token);
          await user.save();

        console.log('User saved to database:', user);
          // Send the token as a response to the client
          return done(null, { user, token });
        }

        else {
          // If the user already exists, set the token property in the user object
          user.token = generateToken({ _id: user._id });
        }

        // If the user already exists, send the user data without generating a new token
        return done(null, { user });

      } catch (error) {
        return done(error, null);
      }
    }
  )
);

  

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// app.get(
//   '/auth/google/callback',
//   passport.authenticate('google', {
//     successRedirect: 'http://localhost:5173',
//     failureRedirect: 'http://localhost:5173/login',
//   })
// );



// app.get(
//   '/auth/google/callback',
//   passport.authenticate('google', {
//     failureRedirect: 'http://localhost:5173/login',
//   }),
//   async (req, res) => {
//     const expiryDate = new Date(Date.now() + 3600000); // 1 hour

//     // Access the user and token from the request object
//     const { user, token } = req.user;
//      // Save the token in the user document in the database
//   await User.findByIdAndUpdate(user._id, { $set: { token } });

//   console.log('Token updated in the database');
//     // Set the token in a cookie named 'token'
//     res.cookie('token', token, { expires: expiryDate, httpOnly: true });

//     // Redirect to the success URL
//     res.redirect('http://localhost:5173');
//   }
// );

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
      failureRedirect: 'http://localhost:5173/login',
  }),
  async (req, res) => {
      const { user } = req;

      if (!user) {
          return res.status(400).json({ message: 'User not authenticated' });
      }

      const expiryDate = new Date(Date.now() + 3600000); // 1 hour

      try {
          // Use findOneAndUpdate to update or create a user document
          const updatedUser = await User.findOneAndUpdate(
              { _id: user._id },
              { $setOnInsert: { token: generateToken(user) } }, // setOnInsert ensures token is set only if creating a new document
              { upsert: true, new: true }
          );

          console.log('User Token saved to the database:', updatedUser.token);

          // Set the token in a cookie named 'token'
          res.cookie('token', updatedUser.token, { expires: expiryDate, httpOnly: true });

          // Redirect to the success URL
          res.redirect('http://localhost:5173');
      } catch (error) {
          console.error('Error saving user token to the database:', error);
          res.status(500).json({ message: 'Internal Server Error' });
      }
  }
);




// app.get("/login/sucess",async(req,res)=>{

//     if(req.user){
//         console.log(req.user)
//         res.status(200).json({message:"user Login", user:req.user})
//     }else{
//         res.status(400).json({message:"Not Authorized"})
//     }
// })
app.get("/login/success", async (req, res) => {
  console.log('Session Data:', req.session);
  console.log('User Data:', req.user);
  if (req.user && req.user.user) {
    const { displayName, image, _id } = req.user.user;  // Add _id here
    console.log('User Data:', req.user);

    // Sending the user's name, image, and _id to the frontend
    res.status(200).json({ message: "user Login", displayName, image, _id });
  } else {
    res.status(400).json({ message: "Not Authorized" });
  }
});
 





app.get('/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('http://localhost:5173');
    
  });
});



app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT);
});




