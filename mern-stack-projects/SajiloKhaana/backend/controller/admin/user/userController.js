const User = require('../../../model/userModel');

// Get all users except the currently logged-in user
exports.getUsers = async (req, res) => {
    const userId = req.user.id; // Assuming user ID is retrieved from the request

    try {
        const users = await User.find({ _id: { $ne: userId } });

        if (users.length > 0) {
            return res.status(200).json({
                message: "Users fetched successfully",
                data: users
            });
        } else {
            return res.status(404).json({
                message: "Users not found",
                data: []
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error fetching users",
            error: error.message
        });
    }
};

// Delete the currently logged-in user
exports.deleteUser = async (req, res) => {
    const userId = req.user.id; // Assuming user ID is retrieved from the request

    try {
        if (!userId) {
            return res.status(404).json({
                message: "Please provide ID",
            });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        } else {
            await User.findByIdAndDelete(userId);
            return res.status(200).json({
                message: "User deleted",
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: "Error deleting user",
            error: error.message
        });
    }
};

// Add a review for a specific product by the logged-in user
exports.addProductReview = async (req, res) => {
    const productId = req.params.id;
    const { rating, message } = req.body;
    const userId = req.user.id;

    const review = {
        userId,
        rating,
        message,
    };

    try {
        // Assuming Product model is imported and defined somewhere
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        product.reviews.push(review);
        await product.save();

        return res.json({
            message: "Review added successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Error adding review",
            error: error.message
        });
    }
};
