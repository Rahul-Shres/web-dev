const router = require("express").Router();
const passport = require("passport");
const User = require("../model/userModel");
const generateToken = require("../services/generateToken");
const mongoose = require('mongoose')
const CLIENT_URL = "http://localhost:5173/";


var userProfile ;

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  }),
  async function(req,res) {
    const userGoogleEmail = userProfile.emails[0].value;
    // checking if user already exists in the database
    const userExists = await User.findOne({
      where: {
          email: userGoogleEmail
      }
  });
  if (userExists) {
    const token = generateToken(userExists); // token generate gara
    res.cookie("token", token); // cookie ma tyo token pathau

} else {
// if tyo user xaina vane naya user vanau,
    const newUser = await User.create({
        email: userGoogleEmail, // email ggoogle bata leeu
        googleId: userProfile.id, // id google ko deyou
        username: userProfile.displayName // username ni google id bata leeu
    });
    const token = generateToken(newUser); // naya manxe lai token deyou
    res.cookie("token", token); // token khali haat ma na deyou, cookie vanne thal ma denu
}
  }
);

// router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

// router.get(
//   "/github/callback",
//   passport.authenticate("github", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

// router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

// router.get(
//   "/facebook/callback",
//   passport.authenticate("facebook", {
//     successRedirect: CLIENT_URL,
//     failureRedirect: "/login/failed",
//   })
// );

module.exports = router