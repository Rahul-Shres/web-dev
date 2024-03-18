const mongoose = require("mongoose");

function connectDb () => {
    const mongoose.connect(process.env.MONGO);

}