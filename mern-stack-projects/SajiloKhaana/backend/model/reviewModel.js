const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "A review must belong to a user"]
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: [true, "A review must be for a product"]
    },
    rating: {
        type: Number,
        default: 3 // Default rating set to 3 if not specified
    },
    message: {
        type: String,
        required: [true, "Message cannot be empty"]
    }
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
