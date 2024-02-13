const mongoose = require("mongoose");
const editMovies = async (req, res) => {
  const MoviesModel = mongoose.model("movie");
  console.log(req.body);
  const { _id, name, info } = req.body;

  try {
    if (!_id) throw "Please provide a movie id";
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
    return;
  }
  try {
    await MoviesModel.updateOne(
      {
        _id: _id,
      },
      {
        name: name,
        info: info,
      },
      {
        runValidators: true,
      }
    );
  } catch (e) {
    res.status(400).json({
      status: "failed",
      error: e.message,
    });
  }

  res.status(200).json({
    message: "Movies edited successfully",
  });
};

module.exports = editMovies;
