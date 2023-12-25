const express = require('express');
const dotenv = require('dotenv');
const { connectDatabase } = require('./database/database');
dotenv.config();
const app = express();
const { registerUser, loginUser } = require('./controller/auth/authController');

// DATABASE CONNECTION
connectDatabase();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// telling nodejs to give access to uploads folder 
app.use(express.static("./uploads"))

// Routes here
const authRoute = require('./routes/auth/authRoute');
const productRoute = require('./routes/admin/productRoute');
const adminUsersRoute = require('./routes/admin/adminUsersRoute');
const userReviewRoute = require('./routes/user/userReviewRoute');
const profileRoute = require("./routes/user/profileRoute")
const cartRoute = require("./routes/user/cartRoute")
const orderRoute = require("./routes/user/orderRoute")
const adminOrdersRoute = require("./routes/admin/adminOrderRoute")



app.get('/', (req, res) => {
    console.log("Welcome to my site!");
});

// register user api
app.use("/api/auth",authRoute)
app.use("/api/products",productRoute)
app.use("/api/admin",adminUsersRoute)
app.use("/api/admin",adminOrdersRoute)
app.use("/api/reviews",userReviewRoute)
app.use("/api/profile",profileRoute)
app.use("/api/cart",cartRoute)
app.use("/api/orders",orderRoute)


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
