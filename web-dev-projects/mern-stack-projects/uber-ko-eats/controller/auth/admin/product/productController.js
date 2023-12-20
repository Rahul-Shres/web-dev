const Product = require("../../../../model/productModel");

exports.createProduct = async (req, res) => {
  try {
    //  Handling Image
    const file = req.file;
    console.log("file from productController",file, "================================================");
    let filePath;
    if (!file) {
      filePath =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dQPM88-Vq0f-YM8xILMQdKktXgKBMN6XH9cCBleA&s";
    } else {
      filePath = req.file.filename;
    }
    //  Handling Image

    console.log(
      "From Middleware to productController:",
      "----------------------------------------------------------------------",
      req.user
    );
    const {
      productName,
      productDescription,
      productPrice,
      productStatus,
      productStockQty,
    } = req.body;
    if (
      !productName ||
      !productDescription ||
      !productPrice ||
      !productStatus ||
      !productStockQty
    ) {
      return res.status(400).json({
        message:
          "Please provide productName,productDescription,productPrice,productStatus,productStockQty",
      });
    }
    // insert into the Product collection/table
    await Product.create({
      productName,
      productDescription,
      productPrice,
      productStatus,
      productStockQty,
      productImage: "http://localhost:8000/" + filePath,
    });
    console.log(
      productName,
      productDescription,
      productPrice,
      productStatus,
      productStockQty,
      
      ": From product Controller",  "----------------------------------------------------------------------"
    );
    res.status(200).json({
      message: "Product Created Successfully",
    });
  } catch (error) {
    // Handle any errors
    console.error("Error creating product:", error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
