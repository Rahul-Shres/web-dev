const fs = require("fs")
const Product = require("../../../model/productModel")


exports.createProduct = async (req, res) => {
    try {
        const file = req.file;
        const filePath = file ? req.file.filename : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dQPM88-Vq0f-YM8xILMQdKktXgKBMN6XH9cCBleA&s";
        
        const { productName, productDescription, productPrice, productStatus, productStockQty, brand, category, thumbnail } = req.body;

        if (!productName || !productDescription || !productPrice || !productStatus || !productStockQty || !brand || !category || !thumbnail) {
            return res.status(400).json({
                message: "Please provide all required fields"
            });
        }

        const productCreated = await Product.create({
            productName,
            productDescription,
            productPrice,
            productStatus,
            productStockQty,
            productImage: process.env.BACKEND_URL + filePath,
            brand,
            category,
            thumbnail
        });

        res.status(200).json({
            message: "Product Created Successfully",
            data: productCreated
        });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
