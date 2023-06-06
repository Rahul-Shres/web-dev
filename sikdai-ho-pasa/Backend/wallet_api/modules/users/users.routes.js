const express = require("express");
const userRouter = express.Router();
const userRegister = require("./controllers/userRegister");
const userLogin = require("./controllers/userLogin");

userRouter.get("/register", userRegister);
userRouter.get("/login", userLogin);

module.exports = userRouter;
