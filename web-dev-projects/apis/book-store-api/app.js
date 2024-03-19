const express = require("express");
const app = express()
const { blogs } = require("./model/index")

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.post('/createBlog', async(req,res)=>{
    const {title, subtitle, description} = req.body
    const newBlog = await blogs.create({
        title,
        subtitle,
        description
    })

    res.send("form submitted successfully")
})

app.get('/blog', async(req,res)=>{
    const allBlogs = await blogs.findAll()
    console.log(allBlogs)
    res.status(200).json({
        message : "Blogs fetched successfully",
        data : allBlogs
    })
})
app.get('/single/:id', async(req,res)=>{
    const {id} = req.params;

    const singleBlog = await blogs.findAll({
        where :{
            id: id
        }    
    })
    console.log(singleBlog)
    res.status(200).json({
        message : "Single Blog Fetched Successfully",
        data : singleBlog
    })
})


app.get("/delete/:id", async(req,res)=>{
    const {id} = req.params
    await blogs.destroy({
        where: {
            id: id
        }
    })
    res.status(200).json({
        message: "Blog Deleted Successfully",
        
    })
})


app.get("/edit/:id", async (req,res)=>{
    const {id} = req.params;
    const {title,subtitle, description} = req.body;

    const updatedBlog = await blogs.update({
        title,
        subtitle,
        description
    },{
        where : {
            id : id
        }
    })

    res.status(200).json({
        message: "blog updated successfully",
        data : updatedBlog
    })

})

app.listen(3000, ()=>{
    console.log("I am live")
})