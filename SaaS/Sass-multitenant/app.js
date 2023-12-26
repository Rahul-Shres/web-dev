
// REQUIRES START HERE 
const express = require("express")
const app = express()
require("dotenv").config()
const passport = require("passport")
const token = require("jsonwebtoken")
const generateToken = require("./services/generateToken")
const { users } = require("./model/index")

const organizationRoute = require("./routes/organizationRoute")
const cookieParser = require("cookie-parser")
// REQUIRES END HERE 

// MIDDLEWARES 
app.use(cookieParser())
app.set("view engine","ejs")
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

app.get("/auth/google/callback", passport.authenticate("google", {
    failureRedirect: "http://localhost:9000"
}), async function(req, res) {
    try {
        const userGoogleEmail = userProfile.emails[0].value;
        const user = await users.findOne({
            where: {
                email: userGoogleEmail
            }
        });

        if (user) {
            const token = generateToken(user);
            res.cookie("token", token);
            return res.redirect('/organization');
        } else {
            const newUser = await users.create({
                email: userGoogleEmail,
                googleId: userProfile.id,
                username: userProfile.displayName
            });
            const token = generateToken(newUser);
            res.cookie("token", token);
            return res.redirect('/organization');
        }
    } catch (error) {
        // Handle database errors here
        console.error("Database error:", error);
        // Redirect or render an error page
        res.status(500).send("Internal Server Error");
    }
});


// google login ends here 

// routes middlwares 
app.use("/",organizationRoute)


const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`Server has started at port ${PORT}`)
})