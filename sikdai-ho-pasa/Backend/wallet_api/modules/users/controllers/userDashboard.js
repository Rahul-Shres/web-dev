const userDashboard = (req, res) => {
  console.log(req.user);
  res.status(200).json({
    status: "this is dashboard",
  });
};

module.exports = userDashboard;
