// This is a comment. It's like a note for grown-ups to understand the code.

// Require the necessary module for your Product model or collection.
const Product = require('../../../model/productModel'); // Replace '../models/Product' with the correct path to your Product model or collection.

// This function is for creating a new product.
exports.createProduct = async (req, res) => {
    // These lines of code extract information about the product from a request (req).
    const { productName, productDescription, productPrice, productStatus, productStockQty } = req.body;

    // This part checks if any of the required information is missing.
    if (!productName || !productDescription || !productPrice || !productStatus || !productStockQty) {
        // If any information is missing, it responds with a status code 400 and a message.
        return res.status(400).json({
            message: "Please provide productName, productDescription, productPrice, productStatus, productStockQty"
        });
    }

    // Now, we insert the product information into a collection or table.
    // We imagine a place where we keep all the product details.

    // This is like telling the computer to create a new product with the provided information.
    await Product.create({
        productName,
        productDescription,
        productPrice,
        productStatus,
        productStockQty
    });

    // Add a console.log statement to indicate that the product was created successfully.
    console.log("Product created successfully");

    // Finally, if everything goes well, it tells us that the product was created successfully.
    res.status(200).json({
        message: "Product created successfully"
    });
};
