// google login here
const passport = require("passport");
const generateToken = require('./services/generateToken');
const users = require('./model/userModel');
const passportSetup = require('./passport');

app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function (user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
  });


var userProfile;
let GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8000/auth/google/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    try {
        userProfile = profile;
        return done(null, userProfile);
    } catch (error) {
        console.error(error);
        return done(error, null);
    }
}
));

app.get("/auth/google", passport.authenticate("google", { scope: ['profile', 'email'] }));

app.get("/auth/google/callback", passport.authenticate("google", {
    failureRedirect: "http://localhost:5173/login-failure",
  }),
  async function (req, res) {
    const userGoogleEmail = userProfile.emails[0].value;

    // check if the google email already exists in the table
    const user = await users.findOne({
      where: {
        email: userGoogleEmail
      }
    });

    if (user) {
      // token generate garney
      const token = generateToken(user);
      res.cookie('token', token);
      res.redirect("/");
    } else {
      // register the user
      const newUser = await users.create({
        email: userGoogleEmail,
        googleId: userProfile.id,
        username: userProfile.displayName
      });

      const token = generateToken(newUser);
      res.cookie('token', token);
      res.redirect("/");
    }
  }
);

// google login ends here