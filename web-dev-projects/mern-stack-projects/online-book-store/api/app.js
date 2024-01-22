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


const isAuthenticated = require('./middleware/isAuthenticated');

//Routes
const profileRoute = require('./routes/profileRoute');
const adminAuthRoute = require('./routes/admin/adminAuthRoute');
// const productRoute = require("./routes/productRoute")

connectToDB(process.env.MONGO)
app.use(cors({
  origin : '*'
}))




app.use(express.json());
app.use(express.urlencoded({ extended: true }));


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

app.use("/profile", profileRoute);
 app.use("/admin", adminAuthRoute);

// app.get("/profile", isAuthenticated, async(req,res)=>{

//   const userId = req.user._id 
//   console.log(userId, "userId")
//   const myProfile = await User.findById(userId)
//   console.log(userId, "user id")
//   // send response
//   res.status(200).json({
//       data : myProfile,
//       message : "Profile fetched successfully"
//   })
// })


var userProfile ;
let GoogleStrategy = require("passport-google-oauth").OAuth2Strategy

passport.use( new GoogleStrategy({
    clientID : process.env.CLIENT_ID,
    clientSecret : process.env.CLIENT_SECRET,
    callbackURL : "http://localhost:8000/auth/google/callback"
},
function(accessToken,refreshToken,profile,done){
 
 userProfile = profile  
 return done(null,userProfile)

}
))

app.get("/auth/google",passport.authenticate("google",{scope : ['profile','email']}) )

app.get("/auth/google/callback",passport.authenticate("google",{
    failureRedirect : "http://localhost:8000"
}),
async function (req, res) {
  const findUserByEmail = await User.findOne({
    email: userProfile.emails[0].value,
  });
  let token;
  if (findUserByEmail) {
    token = generateToken(findUserByEmail.id);
  } else {

    const user = await User.create({

      displayName: userProfile.displayName,
      email: userProfile.emails[0].value,
      googleId : userProfile.id,
      image: userProfile.photos[0].value,
      role: "user",
    });
    token = generateToken(user.id);
  }
  // res.header("Access-Control-Allow-Credentials", true);

  // Successful authentication, redirect success.
  res.redirect("http://localhost:5173/google/" + token);
}

)






app.listen(process.env.PORT, () => {
  console.log('listening on port ' + process.env.PORT);
});




