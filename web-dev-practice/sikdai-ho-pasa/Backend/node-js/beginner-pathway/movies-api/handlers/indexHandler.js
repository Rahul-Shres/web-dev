const indexHandler = (req, res) => {
  // Handling the GET request for the root URL ("/")

  // Sending a JSON response with a message
  res.status(200).json({
    message: "Mongo Fucking DB",
  });
};
module.exports = indexHandler;
