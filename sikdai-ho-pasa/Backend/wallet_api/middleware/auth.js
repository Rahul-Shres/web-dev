const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  console.log(req.headers);

  const authorization = req.headers.authorization;

  if (!authorization) {
    res.status(400).json({
      status: "failed",
      message: "Authorization failed! You must be logged in",
    });
    return;
  }

  const token = authorization.split("Bearer ")[1];

  try {
    const checkToken = jwt.verify(token, process.env.jwt_salt);
    next();
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Authorization failed! Invalid Token",
    });
  }
};

module.exports = auth;
