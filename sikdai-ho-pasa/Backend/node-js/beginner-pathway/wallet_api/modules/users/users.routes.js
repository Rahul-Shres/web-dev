const express = require("express");
const userRouter = express.Router();
const userRegister = require("./controllers/userRegister");
const userLogin = require("./controllers/userLogin");
const userDashboard = require("./controllers/userDashboard");
const auth = require("../../middleware/auth");
//post
userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);
userRouter.use(auth);
//protected route
userRouter.get("/dashboard", userDashboard);

module.exports = userRouter;
