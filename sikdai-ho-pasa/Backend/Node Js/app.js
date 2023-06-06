// intro point
const express = require("express");
const app = express();
// fs module to read and write files
const fs = require("fs");

// Route to read data from a file
// We read data like this:
app.get("/", (req, res) => {
  fs.readFile("./data.txt", "utf-8", (err, data) => {
    if (err) {
      res.send("Cannot read file");
    } else {
      res.send(data);
    }
  });
});
// Writing Data

app.get("/write", (req, res) => {
  const writinData = "Mango";
  fs.writeFile("./data.txt", writinData, (err) => {
    if (err) {
      res.send("Cannot read file");
    } else {
      res.send("Write Success");
    }
  });
});

// Defining other routes
app.get("/hello", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/BMW", (req, res) => {
  res.status(200).send("BMW");
});

// Listening to requests
app.listen(8000, () => {
  console.log("Listening on port 8000");
});

// http://127.0.0.1:8000/
