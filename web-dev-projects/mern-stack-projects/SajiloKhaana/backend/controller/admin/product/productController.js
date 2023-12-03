const Product = require("../../../model/productModel");
const fs = require("fs");

// Function to validate required fields
const validateFields = (fields) => {
    for (const field of fields) {
        if (!field) {
            return false;
        }
    }
    return true;
};

exports.createProduct = async (req, res) => {
    try {
        const file = req.file;
        let filePath = file ? req.file.filename : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dQPM88-Vq0f-YM8xILMQdKktXgKBMN6XH9cCBleA&s";
        const { productName, productDescription, productPrice, productStatus, productStockQty } = req.body;

        const requiredFields = [productName, productDescription, productPrice, productStatus, productStockQty];
        if (!validateFields(requiredFields)) {
            return res.status(400).json({
                message: "Please provide productName, productDescription, productPrice, productStatus, productStockQty"
            });
        }

        await Product.create({
            productName,
            productDescription,
            productPrice,
            productStatus,
            productStockQty,
            productImage: process.env.BACKEND_URL + filePath
        });

        res.status(200).json({
            message: "Product Created Successfully"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                message: "Please provide id"
            });
        }

        const oldData = await Product.findById(id);
        if (!oldData) {
            return res.status(404).json({
                message: "No data found with that id"
            });
        }

        const oldProductImage = oldData.productImage;
        const lengthToCut = process.env.BACKEND_URL.length;
        const finalFilePathAfterCut = oldProductImage.slice(lengthToCut);

        fs.unlink("./uploads/" + finalFilePathAfterCut, (err) => {
            if (err) {
                console.log("error deleting file", err);
            } else {
                console.log("file deleted successfully");
            }
        });

        await Product.findByIdAndDelete(id);
        res.status(200).json({
            message: "Product deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { productName, productDescription, productPrice, productStatus, productStockQty } = req.body;

        const requiredFields = [productName, productDescription, productPrice, productStatus, productStockQty, id];
        if (!validateFields(requiredFields)) {
            return res.status(400).json({
                message: "Please provide productName, productDescription, productPrice, productStatus, productStockQty, id"
            });
        }

        const oldData = await Product.findById(id);
        if (!oldData) {
            return res.status(404).json({
                message: "No data found with that id"
            });
        }

        const oldProductImage = oldData.productImage;
        const lengthToCut = process.env.BACKEND_URL.length;
        const finalFilePathAfterCut = oldProductImage.slice(lengthToCut);

        if (req.file && req.file.filename) {
            fs.unlink("./uploads/" + finalFilePathAfterCut, (err) => {
                if (err) {
                    console.log("error deleting file", err);
                } else {
                    console.log("file deleted successfully");
                }
            });
        }

        const updatedData = await Product.findByIdAndUpdate(id, {
            productName,
            productDescription,
            productPrice,
            productStatus,
            productStockQty,
            productImage: req.file && req.file.filename ? process.env.BACKEND_URL + req.file.filename : oldProductImage
        }, {
            new: true,
        });

        res.status(200).json({
            message: "Product updated successfully",
            data: updatedData
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json({
            message: "All products retrieved successfully",
            data: allProducts
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
