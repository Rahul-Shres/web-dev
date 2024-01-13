const express = require('express');
const app = express();
const { connectDatabase } = require("./database/database")
const passport = require("passport");
const generateToken = require('./services/generateToken');
const User  = require("./model/userModel")
const cookieParser = require("cookie-parser")
const cors = require('cors');
const cookieSession = require('cookie-session');
const { decodeToken } = require("./services/decodeToken")
// TELL NODE TO USE DOTENV
require("dotenv").config()

app.use(cookieParser())


//DATABASE CONNECTION
connectDatabase(process.env.MONGO_URI)

app.use(
  cookieSession({
    name:"session",
    keys:["onlinebookstore"],
    maxAge: 24*60*60*1000
  })
)


const corsOption = {
  rigin: "http://localhost:5173",
      methods: "GET,POST,PUT,DELETE",
  credentials: true,
  preflightContinue: false,
};
app.use(cors(corsOption));

app.use(passport.initialize())
 app.use(passport.session())
 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

passport.serializeUser(function(user,cb){
   cb(null,user)  // cb(error,success) --> cb(error)
})
passport.deserializeUser(function(obj,cb){
   cb(null,obj)
})



// google login here 
var userProfile ;
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy

passport.use( new GoogleStrategy({
    clientID : process.env.GOOGLE_CLIENT_ID,
    clientSecret : process.env.GOOGLE_CLIENT_SECRET,
    callbackURL : "http://localhost:8000/auth/google/callback",
    scope: ['profile', 'email'] // Add this line to specify the required scopes
},
function(accessToken, refreshToken, profile, done) {
  try {
      // Your existing code...

      userProfile = profile;
      return done(null, userProfile);
  } catch (error) {
      console.error("Error in Google OAuth callback:", error);
      return done(error, false);
  }
}

))

app.get("/auth/google", passport.authenticate("google", { scope: ['profile', 'email'] }));
app.use(async(req,res,next)=>{
  
  const token = req.cookies.token 
  if(token){
      const decryptedResult = await decodeToken(token,process.env.SECRET)
      if(decryptedResult && decryptedResult.id){
          console.log(decryptedResult, "decryptedResult")
      }
  }

  next()
})




app.get("/auth/google/callback", passport.authenticate("google", {
  failureRedirect: "http://localhost:5173/login-failure",
}), async function (req, res) {
  const userByEmail = await User.findOne({ userEmail: userProfile.emails[0].value });

  let token;
  if (userByEmail) {
    token = userByEmail.id;
  } else {
    const user = await User.create({
      name: userProfile.displayName,
      userEmail: userProfile.emails[0].value, // change 'email' to 'userEmail'
      password: userProfile.id,
      confirmPassword: userProfile.id,
      role: "customer", // or 'admin', depending on the user role
   });
   
   
    const userId = user.id;
    console.log("userId: " + userId);
  }
  // res.header("Access-Control-Allow-Credentials", true);

  // Successful authentication, redirect success.
  const session = req.cookies.session 

  console.log("session: " + session);
 // Successful authentication, redirect success with token
 res.redirect(`http://localhost:5173/welcome?token=${session}`);

});


app.use('/', (req, res) => {
    console.log("Welcome to my application")
})

const port = 8000
app.listen(port, () => {
    console.log('listening on port ' + port);
});



