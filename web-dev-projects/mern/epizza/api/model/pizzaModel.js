const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pizzaSchema = new Schema({
    title: {
        type: String,
    },
    subtitle: {
        type: String,
    },
    description: {
        type: String,
    },
}, {
    timestamps: true
});

const Pizza = mongoose.model("pizza", pizzaSchema);
module.exports = Pizza;
