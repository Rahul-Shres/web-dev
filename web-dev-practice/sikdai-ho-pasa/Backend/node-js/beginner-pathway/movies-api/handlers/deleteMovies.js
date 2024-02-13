const mongoose = require("mongoose");
const deleteMovies = async (req, res) => {
  const MoviesModel = mongoose.model("movie");
  const { _id } = req.query;
  try {
    if (!_id) throw "Please provide id to delete movie";
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
    return;
  }
  await MoviesModel.deleteOne({ _id: _id });
  res.status(200).json({
    message: "Movies deleted successfully",
  });
};

module.exports = deleteMovies;
