const express = require("express");
const app = express();
const cors = require("cors")
const Blog = require("./model/blogModel");
const { connectDatabase } = require("./db/db");

// Telling node to use .env files
require("dotenv").config();

// cors
app.use(cors({
    origin: "http://localhost:3000"
}))
//  node js lai form bata aako data parse gar vaneko ho
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Connect to database
connectDatabase(process.env.MONGO_URI);


app.post('/createBlog', async(req,res) => {

    console.log("Reached /createblog route handler");
    const {title, subtitle, description} = req.body;
    console.log(title, subtitle, description)

    await Blog.create({
        title:title,
        subtitle:subtitle,
        description:description
    })

    res.json({
        status: 200,
        message: "blog created successfully"
    })
})

// Get All Blogs
app.get('/blog', async(req,res)=>{
    const blog = await Blog.find();
    if(blog.length == 0){
        res.json({
            status: 200,
            message : "Empty Blogs",
        })
    }else{
        res.json({
            status: 200,
            message: "Blogs fetched successfully",
            data : blog,
        })
    }
})


// Get Single Blog
app.get('/blog/:id', async(req,res)=>{
    const {id} = req.params;
    const blog = await Blog.find({_id:id});
    if(blog.length ==0){
        res.json({
            status: 400,
            message: "Blog not found"
        })
    }else{
        res.status(200).json({
            message: "Single Blog fetched successfully",
            data:blog
        })
    }
})

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`listening on port number ${PORT}`)
})

// continue from day 8 mern