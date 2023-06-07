const express = require("express");
const userRouter = express.Router();
const userRegister = require("./controllers/userRegister");
const userLogin = require("./controllers/userLogin");

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);

module.exports = userRouter;
