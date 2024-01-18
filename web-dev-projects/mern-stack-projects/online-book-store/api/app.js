const express = require('express')
const app = express()
const passport = require('passport');
require('dotenv').config();
const session = require('express-session');
const connectToDB = require('./database/database')
const cors = require("cors");
const { decodeToken } = require("./services/decodeToken")
const generateToken = require("./services/generateToken")
connectToDB(process.env.MONGO)
const User = require('./model/userModel');


app.use(cors({
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));
// Express session middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// setup session
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    saveUninitialized:true
}))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// google login here 
const OAuth2Strategy = require("passport-google-oauth2").Strategy;


passport.use(
    new OAuth2Strategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        try {
            let user = await User.findOne({googleId:profile.id});

            if(!user){
                user = new User({
                    googleId:profile.id,
                    displayName:profile.displayName,
                    email:profile.emails[0].value,
                    image:profile.photos[0].value
                });
                const expiryDate = new Date(Date.now() + 3600000); // 1 hour
                const token = generateToken(user)
                console.log(token);
                res.cookie('access_token', token, {
                  httpOnly: true,
                  expires: expiryDate,
                })
                .status(200)
                .json(user);
                await user.save();
            }

            return done(null,user)
        } catch (error) {
            return done(error,null)
        }
    }
    )
)


  
passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
});

// initial google ouath login
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:5173/dashboard",
    failureRedirect:"http://localhost:5173/login"
}))

app.get("/login/sucess",async(req,res)=>{

    if(req.user){
        res.status(200).json({message:"user Login",user:req.user})
    }else{
        res.status(400).json({message:"Not Authorized"})
    }
})

app.get("/logout",(req,res,next)=>{
    req.logout(function(err){
        if(err){return next(err)}
        res.redirect("http://localhost:5173");
    })
})


app.listen(process.env.PORT, ()=>{
    console.log('listening on port '+process.env.PORT)
})