const Product = require("../../model/productModel");
const Review = require("../../model/reviewModel");

exports.createReview = async (req, res) => {
    // Extracting necessary data from request body and parameters
    const userId = req.user.id;
    const { rating, message } = req.body;
    const productId = req.params.id;

    // Checking if required fields are present in the request
    if (!rating || !message || !productId) {
        return res.status(400).json({
            message: "Please provide rating, message, and product ID"
        });
    }

    // Checking if the specified product exists
    const productExist = await Product.findById(productId);
    if (!productExist) {
        return res.status(404).json({
            message: "Product with that ID does not exist"
        });
    }

    // Creating a new review and associating it with the user and product
    await Review.create({
        userId,
        productId,
        rating,
        message
    });

    res.status(200).json({
        message: "Review added successfully"
    });
};

exports.getProductReview = async (req, res) => {
    const productId = req.params.id;

    // Checking if the product ID is provided
    if (!productId) {
        return res.status(404).json({
            message: "Product ID not provided"
        });
    }

    // Checking if the specified product exists
    const productExist = await Product.findById(productId);
    if (!productExist) {
        return res.status(404).json({
            message: "Product not found with that ID"
        });
    }

    // Fetching reviews associated with the specified product
    const reviews = await Review.find({ productId }).populate("userId").product("productId");

    res.status(200).json({
        message: "Reviews fetched successfully",
        data: reviews
    });

    exports.checkParamsId = (res, checkParam, id) => {
        res.status(200).json({
            message: "Please provide id"
        })
    }
};

exports.deleteReview = async(req,res) =>{
    const reviewId = req.params.id;
    this.checkParamsId(res,"ReviewId");
    if(!reviewId){
        return res.status(404).json({ 
            message: "Review not found"})
    }
    await Review.findByIdAndDelete(reviewId)
    res.status(200).json({
        message: "Review deleted successfully"
    });
}