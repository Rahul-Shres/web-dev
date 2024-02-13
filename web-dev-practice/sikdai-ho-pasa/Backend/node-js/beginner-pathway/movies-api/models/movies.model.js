const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name  is required."],
    minlength: [3, "Minimum length is 3 characters"],
  },
  info: {
    type: String,
    required: [true, "Info  is required."],
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
    required: [true, "Rating  is required."],
    // min: [0, "Must be between 0 and 10."],
    // max: [10, "Must be between 0 and 10."],
    validate: {
      validator: function (v) {
        return v >= 0 && v <= 10;
      },
      message: "Must be between 0 and 10.",
    },
  },
  actor: {
    type: String,
  },
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
