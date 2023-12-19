
// REQUIRES START HERE 
const express = require("express")
const app = express()
require("dotenv").config()
const passport = require("passport")
// REQUIRES END HERE 

// MIDDLEWARES 
app.set("view engine","ejs")
 app.use(passport.initialize())
 app.use(passport.session())

 passport.serializeUser(function(user,cb){
    cb(null,user)  // cb(error,success) --> cb(error)
 })
 passport.deserializeUser(function(obj,cb){
    cb(null,obj)
 })


// MIDDLEWARES END

// database connection 
require("./model/index")


app.get("/",(req,res)=>{
    res.render("home")
})


// google login here 
var userProfile ;
let GoogleStrategy = require("passport-google-oauth").OAuth2Strategy


// todo Initialize Google OAuth with client ID, client secret, and callback URL.
// todo GoogleStrategy constructor configures the strategy.
// todo The callback function handles the retrieved user profile data.

passport.use( new GoogleStrategy({
    clientID : process.env.GOOGLE_CLIENT_ID,
    clientSecret : process.env.GOOGLE_CLIENT_SECRET,
    callbackURL : "http://localhost:9000/auth/google/callback"
    // add the same url in Authorized redirect URIs in google developer console
 
},
function(accessToken,refreshToken,profile,done){
 console.log(profile);
 userProfile = profile  
 return done(null,userProfile)

}
))

// todo /auth/google: Initiates the Google authentication process.
// todo /auth/google/callback: Handles the callback from Google after authentication.
// todo The passport.authenticate method manages the authentication process.
app.get("/auth/google",passport.authenticate("google",{scope : ['profile','email']}) )

app.get("/auth/google/callback",passport.authenticate("google",{
    failureRedirect : "http://localhost:9000"
}),
function(req,res){
    
            const userEmail = userProfile.emails[0].value; // Accessing first email     
       
 res.send("Logged in successfully")
}
)

// google login ends here 




const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`Server has started at port ${PORT}`)
})