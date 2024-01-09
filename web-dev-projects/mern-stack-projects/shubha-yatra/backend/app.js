const express = require('express');
const dotenv = require('dotenv');
const { connectDatabase } = require('./database/database');
dotenv.config();
const app = express();
const { registerUser, loginUser } = require('./controller/auth/authController');
const {Server} =  require("socket.io")
const cors = require('cors');
// DATABASE CONNECTION
connectDatabase();

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine','ejs')
// telling nodejs to give access to uploads folder 
app.use(express.static("./uploads"))

// cors
app.use(cors(
    {origin : '*',}
));

// Routes here
const authRoute = require('./routes/auth/authRoute');
const productRoute = require('./routes/admin/productRoute');
const adminUsersRoute = require('./routes/admin/adminUsersRoute');
const userReviewRoute = require('./routes/user/userReviewRoute');
const profileRoute = require("./routes/user/profileRoute")
const cartRoute = require("./routes/user/cartRoute")
const orderRoute = require("./routes/user/orderRoute")
const adminOrdersRoute = require("./routes/admin/adminOrderRoute")
const paymentRoute = require("./routes/user/paymentRoute")
// const dataServiceRoute = require("./routes/admin/dataServiceRoute")

app.get("/chat",(req,res)=>{
    res.render("home.ejs")
})

app.get('/', (req, res) => {
    console.log("Welcome to my site!");
});

// register user api
app.use("/api/auth",authRoute)
app.use("/api/products",productRoute)
app.use("/api/admin",adminUsersRoute)
app.use("/api/admin",adminOrdersRoute)
// app.use("/api/admin",dataServiceRoute)
app.use("/api/reviews",userReviewRoute)
app.use("/api/profile",profileRoute)
app.use("/api/cart",cartRoute)
app.use("/api/orders",orderRoute)
app.use("/api/payment",paymentRoute)


const PORT = process.env.PORT || 8000;


//listen server 
const server = app.listen(PORT,()=>{
    console.log(`Server has started at PORT ${PORT} ` )
})
const io = new Server(server)

io.on("connection",(socket)=>{
    socket.on("hello",(data)=>{
        console.log(data)
    })

})