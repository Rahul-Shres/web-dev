const express = require('express');
const app = express();
const { connectDatabase } = require("./database/database")
const passport = require("passport");
const generateToken = require('./services/generateToken');
const users = require('./model/userModel');
const cookieParser = require("cookie-parser")
const cors = require('cors');
const cookieSession = require('cookie-session');

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

app.use(
  cors({
      origin: "http://localhost:5173",
      methods: "GET,POST,PUT,DELETE",
      credentials: true,
      optionsSuccessStatus: 204, // Add this line
  })
);

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
let GoogleStrategy = require("passport-google-oauth").OAuth2Strategy

passport.use( new GoogleStrategy({
    clientID : process.env.GOOGLE_CLIENT_ID,
    clientSecret : process.env.GOOGLE_CLIENT_SECRET,
    callbackURL : "http://localhost:5173/auth/google/callback"

},
function(accessToken,refreshToken,profile,done){
 
 userProfile = profile  
 return done(null,userProfile)

}
))

// app.use(async(req,res,next)=>{
  
//   const token = req.cookies.token 
//   if(token){
//       const decryptedResult = await decodeToken(token,process.env.SECRET)
//       if(decryptedResult && decryptedResult.id){
//           res.locals.currentUserRole = decryptedResult.role
//       }
//   }

//   next()
// })


app.get("/auth/google",passport.authenticate("google",{scope : ['profile','email']}) )

app.get("/auth/google/callback",passport.authenticate("google",{
    failureRedirect : "http://localhost:5173/login-failure",
}),
async function(req,res){
  const userGoogleEmail=  userProfile.emails[0].value
    // check if google lay deko email already table ma exists xa ki nae vanerw  
  const user = await users.findOne({
    where : {
        email : userGoogleEmail
    }
  })
  if(user){
    // token generate garney 
 const token = generateToken(user)
 res.cookie('token',token)
 res.redirect("/")

  }else{
    // register the user 
   const user =  await users.create({
        email : userGoogleEmail,
        googleId  : userProfile.id,
        username : userProfile.displayName
    })
    

    const token = generateToken(user)
    res.cookie('token',token)
    res.redirect("/")
  }

}
)

// google login ends here 



app.use('/', (req, res) => {
    console.log("Welcome to my application")
})

const port = 8000
app.listen(port, () => {
    console.log('listening on port ' + port);
});