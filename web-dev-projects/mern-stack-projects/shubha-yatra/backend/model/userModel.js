const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userEmail : {
        type: String,
        required:[true,'userEmail must be a valid email'],
        unique: true
    },
    userName:{
        type: String,
        required:[true,'username must be a valid email']
    },
    userPhoneNumber : {
        type : Number,
        required:[true,'userPhoneNumber must be a valid']
    },
    userPassword : {
        type: String,
        required:[true,'userPassword must be a valid']
    },
    role:{
        type: String,
        enum: ["customer", "admin"],
        default : "customer",
    },
    otp:{
        type: Number,
    },
    isOtpVerified : {
        type: Boolean,
        default: false
    },
    // type: Schema.Types.ObjectId specifies that the cart array will contain ObjectIds. ObjectId is a data type in MongoDB used to represent unique identifiers for documents in a collection.
    // ref: "Product" indicates that these ObjectIds in the cart array will reference documents in the "Product" collection. In other words, each ObjectId stored in the cart array should correspond to the _id field of a document in the "Product" collection.
    
    // cart: This field represents the user's shopping cart, storing a list of products the user has added.
    cart: [{
        quantity : {
            type : Number,
            required : true,
        },
        product : {type : Schema.Types.ObjectId, ref : "Product"}
    }]
    // [{type: Schema.Types.ObjectId, ref: "Product"}]: This is an array of objects, where each object has two properties:
    //   type: Schema.Types.ObjectId: This specifies that each element in the array should be an ObjectId, which is MongoDB's unique identifier for documents.
    //   ref: "Product": This creates a reference to the "Product" collection, indicating that each ObjectId in the cart array should point to a document in that collection.
        

});

const User = mongoose.model('User', userSchema);
module.exports = User;