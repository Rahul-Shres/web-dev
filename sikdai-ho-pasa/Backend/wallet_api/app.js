const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./modules/users/users.routes");
require("dotenv").config();

const app = express();

require("./models/users.model");

mongoose
  .connect(process.env.mongo_connect, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/users", userRouter);

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
