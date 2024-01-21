const mongoose = require("mongoose")
// const { reviewSchema } = require("./nextReviewModel")
const Schema = mongoose.Schema 


const productSchema = new Schema({
    productName : {
        type : String,
        required : [true,"productName must be provided"]
    },
    productDescription : {
        type : String,
        required : [true,"productDescription must be provided"]
    },
    productStockQty : {
        type : Number,
        required : [true,"productQty must be provided"]
    },
    productPrice : {
        type : Number,
        required : [true,"productPrice must be provided"]
    },
    discountPercentage: { 
        type: Number, min:[1, 'wrong min discount'], max:[99, 'wrong max discount']
    },
    rating: { 
        type: Number, min:[0, 'wrong min rating'], max:[5, 'wrong max price'], default:0
    },
    productStatus : {
        type : String,
        enum : ["available","unavailable"]
    },
    productImage : String,

    brand: { 
        type : String, required: true
    },
    category: {
         type : String, required: true
    },
    thumbnail: { 
            type : String, required: true
    },
    
    // reviews : [reviewSchema]
},{
    timestamps : true
})

const Product = mongoose.model("Product",productSchema)

module.exports = Product