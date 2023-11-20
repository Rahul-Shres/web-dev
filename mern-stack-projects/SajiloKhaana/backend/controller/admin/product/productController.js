const Product = require('../../../model/productModel');
const fs = require("fs");
const handleAsync = require('../../../services/catchAsync'); // Replace with the correct path to your higher-order function.

exports.createProduct = handleAsync(async (req, res) => {
    const file = req.file;
    let filePath = "";

    if (file) {
        filePath = req.file.filename;
    }

    const { productName, productDescription, productPrice, productStatus, productStockQty } = req.body;

    if (!productName || !productDescription || !productPrice || !productStatus || !productStockQty) {
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
        productImage: "BACKEND_URL" + filePath,
    });

    console.log("Product created successfully");

    res.status(200).json({
        message: "Product created successfully"
    });
});

exports.getProducts = handleAsync(async (req, res) => {
    const products = await Product.find();
    if (products.length === 0) {
        return res.status(404).json({
            message: "Products not found",
            products: [],
        });
    } else {
        res.status(200).json({
            message: "Products fetched successfully",
            products: products,
        });
    }
});

exports.getProduct = handleAsync(async (req, res) => {
    try{
        const { id } = req.params;
    if (!id) {
        return res.status(404).json({
            message: "Id not found, please provide product id",
        });
    }

    const product = await Product.find({ _id: id });
    if (product.length === 0) {
        return res.status(404).json({
            message: "Product not found",
            product: [],
        });
    } else {
        res.status(200).json({
            message: "Product fetched successfully",
            product: product,
        });
    }
    } catch(err){
        res.status(500).json({
            message: err.message,
        });
    }
});


exports.deleteProduct = async(req,res) => {
    const {id} = req.params
    if(!id){
        return res.status(404).json({ 
            message: "Id not found, please provide product id",
        })
    }

    await Product.findByIdAndDelete(id)
    res.status(200).json({
        message: "Product deleted successfully",
    })
}


exports.editProduct = async (req, res) => {
    const { id } = req.params;
    const { productName, productDescription, productPrice, productStatus, productStockQty } = req.body;

    if (!productName || !productDescription || !productPrice || !productStatus || !productStockQty) {
        return res.status(400).json({
            message: "Please provide productName, productDescription, productPrice, productStatus, productStockQty"
        });
    }

    try {
        const oldData = await Product.findById(id);

        if (!oldData) {
            return res.status(404).json({
                message: "No data found with that id"
            });
        }

        let filePath = "";

        if (req.file && req.file.filename) {
            const oldProductImage = oldData.productImage;
            const lengthToCut = process.env.BACKEND_URL.length;
            const finalFilePathAfterCut = oldProductImage.slice(lengthToCut);

            // Remove file from upload folder
            fs.unlink(finalFilePathAfterCut, (err) => {
                if (err) {
                    console.log("Error deleting file", err);
                } else {
                    console.log("File deleted successfully");
                }
            });

            filePath = req.file.filename;
        }

        const updatedData = await Product.findByIdAndUpdate(
            id,
            {
                productName,
                productDescription,
                productPrice,
                productStatus,
                productStockQty,
                productImage: "BACKEND_URL" + filePath,
            },
            {
                new: true,
                runValidators: true
            }
        );

        res.status(200).json({
            message: "Product updated successfully",
            data: updatedData
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
}
