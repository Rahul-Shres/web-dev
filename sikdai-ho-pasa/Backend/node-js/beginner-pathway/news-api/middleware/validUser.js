const { news } = require("../model/index");

exports.isValidUser = async (req, res, next) => {
    try {
      const id = req.params.id;
      const oldData = await news.findByPk(id);
      if (oldData.id.toString() !== id.toString()) {
        return res.send("You cannot edit this news article");
      }
      next(); // Pass control to the next middleware or route handler
    } catch (error) {
      console.error("Error validating user:", error);
      res.status(500).send('Error validating user');
    }
  };
  