const Movie = require("../models/movies.model");

// Rest of the code...

const mongoose = require("mongoose");
//aa

const createMovies = async (req, res) => {
  const MoviesModel = mongoose.model("movie");

  const { name, info, image, rating, actor } = req.body;
  console.log(req.body);

  let createMovies;
  try {
    await MoviesModel.create({
      name,
      info,
      image,
      rating,
      actor,
    });
  } catch (e) {
    console.log("Mongo Error : " + e);
    res.status(400).json({
      status: "failed",
      error: e.message,
    });
    return;
  }

  res.status(200).json({
    message: "Movies created successfully",
    createMovies: createMovies,
  });
};

module.exports = createMovies;
