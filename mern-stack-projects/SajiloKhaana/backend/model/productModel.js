const mongoose = require("mongoose");
const { reviewSchema } = require("./nextReviewModel"); // Importing the reviewSchema from nextReviewModel
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName: {
        type: String,
        required: [true, "Product name must be provided"]
    },
    productDescription: {
        type: String,
        required: [true, "Product description must be provided"]
    },
    productStockQty: {
        type: Number,
        required: [true, "Product quantity must be provided"]
    },
    productPrice: {
        type: Number,
        required: [true, "Product price must be provided"]
    },
    productStatus: {
        type: String,
        enum: ["available", "unavailable"]
    },
    productImage: String,
    reviews: [reviewSchema] // Associating the reviews with the imported reviewSchema
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
