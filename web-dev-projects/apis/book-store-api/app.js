const express = require("express");
const app = express()
const bcrypt = require("bcrypt")
const { blogs, user } = require("./model/index")

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.post('/createBlog', async(req,res)=>{
    const {title, subtitle, description} = req.body
    const newBlog = await blogs.create({
        title,
        subtitle,
        description
    })

    res.status(200).json({
        message : "Blogs created successfully",
        data : newBlog
    })
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



// USER REGISTERWTION

app.post("/register", async(req,res)=>{
    const {email, username, password} = req.body;

    if(!email | !username | !password){
        return res.send("email, username, password not received")
    }
    const createUser = await user.create({
        email : email,
        username : username,
        password : bcrypt.hashSync(password,8)
    })

    res.status(200).json({
        message: "User Created Successfully",
        data : createUser
    })
})

app.post("/login", async(req,res)=>{
    const {email, password} = req.body;

    const emailFound = await user.findAll({
        where:{
            email: email
        }
    })

    if(emailFound.length > 0){
        // now verify password
        const isMatch = bcrypt.compareSync(password, emailFound[0].password)
        if(isMatch){
            res.status(200).json({
                message : "login successfully"
            })
        } else{
            res.status(400).json({
                message : "login failed"
            })
        }
    }


})



app.listen(3000, ()=>{
    console.log("I am live")
})