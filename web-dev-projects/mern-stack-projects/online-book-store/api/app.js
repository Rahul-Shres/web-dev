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

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(passport.initialize());
app.use(passport.session());
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
      async ( accessToken, refreshToken, profile, done) => {
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
              username: profile.displayName.split(' ').join('').toLowerCase() +
              Math.random().toString(36).slice(-8),
            });
  
            
            // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
          const token = generateToken({ id: user._id });
          console.log(token);
          const expiryDate = new Date(Date.now() + 3600000); // 1 hour
           // Use res.cookie to set the cookie directly
          //  res.cookie('access_token', token, {
          //   httpOnly: true,
          //   expires: expiryDate,
          // }).status(200);
          await user.save();
          // Send the token as a response to the client
          return done(null, { user, token });
        }
         // Set the token in a cookie named 'access_token'
        // res.cookie('token', token, { expires: expiryDate });


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

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:5173/login',
  }),
  (req, res) => {
    // Access the user and token from the request object
    const { user, token } = req.user;

    // Set the token in a cookie named 'token'
    res.cookie('token', token, { expires: new Date(Date.now() + 3600000), httpOnly: true });

    // Redirect to the success URL
    res.redirect('http://localhost:5173');
  }
);


app.get("/login/sucess",async(req,res)=>{

    if(req.user){
        res.status(200).json({message:"user Login",user:req.user})
    }else{
        res.status(400).json({message:"Not Authorized"})
    }
})

// app.get('/login/success', (req, res) => {
//   if (req.user) {
//     const expiryDate = new Date(Date.now() + 3600000); // 1 hour
//     const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET);

//     res
//       .cookie('access_token', token, {
//         httpOnly: true,
//         expires: expiryDate,
//       })
//       .status(200)
//       .json({ message: 'user Login', user: req.user });
//   } else {
//     res.status(400).json({ message: 'Not Authorized' });
//   }
// });

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




