const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defining the schema for reviews
const reviewSchema = new Schema({
    // Reference to the User model, ensuring a review belongs to a user
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
        required: [true, "A review must belong to a user"]
    },
    // Reference to the Product model, ensuring a review belongs to a product
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product", // Reference to the Product model
        required: [true, "A review must belong to a product"]
    },
    // Rating provided by the user, defaults to 3 if not specified
    rating: {
        type: Number,
        default: 3,
    },
    // Message or review content, required for each review
    message: {
        type: String,
        required: true,
    }
});

// Creating the Review model using the reviewSchema
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review; // Exporting the Review model
