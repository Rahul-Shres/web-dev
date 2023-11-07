const mongoose = require("mongoose");
const Schema = mongoose.Schema

const productSchema = new Schema({
    productName: {
        type: String,
        required: [true, "product name is required"]
    },
    productDescription: {
        type: String,
        required: [true, "product  Description is required"]
    },
    productStockQty: {
        type: Number,
        required: [true, "product Stock Qty is required"]
    },
    productPrice: {
        type: Number,
        required: [true, "product price is required"]
    },
    productStatus: {
        type: String,
        enum: ["available", "unavailable"],
    },
},{
    timeseries: true,
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;