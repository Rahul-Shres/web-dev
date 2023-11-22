const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for NextWayReview
const reviewSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "A review must belong to a user"]
    },
    rating: {
        type: Number,
        default: 3 // Default rating set to 3 if not specified
    },
    message: {
        type: String,
        required: true // Message is a required field
    }
});

// Create NextWayReview model based on the defined schema
const NextWayReview = mongoose.model("NextWayReview", reviewSchema);

module.exports = {
    NextWayReview,
    reviewSchema // Exporting the schema separately might be helpful for potential future usages or referencing
};
