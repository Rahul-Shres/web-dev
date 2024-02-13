


const Product = require("../../model/productModel");
const Review = require("../../model/reviewModel");

// Create a review for a specific product
exports.createReview = async (req, res) => {
    const userId = req.user.id;
    const { rating, message } = req.body;
    const productId = req.params.id;

    // Check if required fields are present in the request
    if (!rating || !message || !productId) {
        return res.status(400).json({
            message: "Please provide rating, message, and product ID"
        });
    }

    try {
        // Check if the specified product exists
        const productExist = await Product.findById(productId);
        if (!productExist) {
            return res.status(404).json({
                message: "Product with that ID does not exist"
            });
        }

        // Create a new review and associate it with the user and product
        await Review.create({
            userId,
            productId,
            rating,
            message
        });

        res.status(201).json({
            message: "Review added successfully"
        });
    } catch (error) {
        console.error("Error creating review:", error);
        res.status(500).json({
            message: "Error creating review"
        });
    }
};

// Get reviews for a specific product
exports.getProductReview = async (req, res) => {
    const productId = req.params.id;

    // Check if the product ID is provided
    if (!productId) {
        return res.status(404).json({
            message: "Product ID not provided"
        });
    }

    try {
        // Check if the specified product exists
        const productExist = await Product.findById(productId);
        if (!productExist) {
            return res.status(404).json({
                message: "Product not found with that ID"
            });
        }

        // Fetch reviews associated with the specified product and populate user details
        const reviews = await Review.find({ productId }).populate("userId");

        res.status(200).json({
            message: "Reviews fetched successfully",
            data: reviews
        });
    } catch (error) {
        console.error("Error fetching reviews:", error);
        res.status(500).json({
            message: "Error fetching reviews"
        });
    }
};



// Delete a review
exports.deleteReview = async (req, res) => {
    const reviewId = req.params.id;

    // Check if review ID is provided
    if (!reviewId) {
        return res.status(404).json({
            message: "Review ID not provided"
        });
    }

    try {
        // Check if the review exists and delete it
        const deletedReview = await Review.findByIdAndDelete(reviewId);

        if (!deletedReview) {
            return res.status(404).json({
                message: "Review not found"
            });
        }

        res.status(200).json({
            message: "Review deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting review:", error);
        res.status(500).json({
            message: "Error deleting review"
        });
    }
};
