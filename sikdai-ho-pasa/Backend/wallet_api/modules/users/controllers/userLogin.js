const userLogin = (req, res) => {
  res.status(200).json({
    status: "hello from login",
  });
};

module.exports = userLogin;
