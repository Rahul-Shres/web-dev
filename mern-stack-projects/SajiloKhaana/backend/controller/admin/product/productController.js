const Product = require('../../../model/productModel');

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
        productImage: "http://localhost:8000/" + filePath,
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
});
