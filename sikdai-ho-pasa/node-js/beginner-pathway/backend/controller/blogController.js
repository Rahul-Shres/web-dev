const { blogs } = require("../model");

exports.renderCreateBlog = (req,res) => {
    res.render("createBlog")
}

exports.getBlogData =  async (req, res) => {
    const username = req.query.username || ''; // Get the username from query parameter or set as empty string if not present
   //Table bata data nikalna paryo
    const allBlogs = await blogs.findAll() // array ma data return garxa
    // blogs vanne table bata sabai data dey vaneko
    console.log(allBlogs);
    const blogData = allBlogs.map(blog => ({
      id: blog.dataValues.id,
      title: blog.dataValues.title,
      subtitle: blog.dataValues.subTitle,
      content: blog.dataValues.content,
      author: blog.dataValues.author, // Assuming there's an 'author' property in the blog data
      publishedDate: blog.dataValues.createdAt // Assuming createdAt is in the desired format, otherwise, format it accordingly
    }));
  
    res.render('blogs', { blogs: blogData, username: username });
  }


  exports.renderForm = (req, res) => {
    res.render('form.ejs');
  }

  exports.createNewBlog = async (req, res) => {
    const { title, subtitle, content } = req.body;
  
    try {
      // Create a new blog using the 'blogs' model
      const newBlog = await blogs.create({
        title: title,
        subTitle: subtitle,
        content: content
      });
  
      console.log("New blog created:", newBlog); // Optional: log the created blog
  
      res.redirect("/"); // Redirect to the home page after successful creation
    } catch (error) {
      console.error("Error creating blog:", error);
      res.status(500).send("Error creating blog");
    }
  }

  exports.fillSinglePageForm = async(req,res)=>{
    const id = req.params.id
    // second approach
    // const {id} = req.params 
    // id ko data magnu/find garnu paryo hamro table bata
    const blog =  await blogs.findAll({
        where : {
            id : id
        }
    })
    // second finding approach
    // const blog = await blogs.findByPk(id)
      console.log(blog)
        res.render("singleBlog",{blog:blog})
    }

    exports.deleteBlog = async (req, res) => {
        const id = req.params.id;
      
        try {
          await blogs.destroy({
            where: {
              id: id
            }
          });
          res.redirect('/'); // Redirect to the home page after deletion
        } catch (error) {
          console.error("Error deleting blog:", error);
          res.status(500).json({ error: 'Error deleting blog' });
        }
      }


      exports.editBlog = async (req, res) => {
        const id = req.params.id;
        const blog = await blogs.findAll({
          where: {
            id: id
          }
        });
      
        res.render('editBlog', { blog: blog });
      }



      exports.updateBlog = async (req, res) => {
        const id = req.params.id;
        const { title, subTitle, content } = req.body;
      
        try {
          await blogs.update({
            title: title,
            subTitle: subTitle,
            content: content
          },
          {
            where: {
              id: id,
            }
          });
      
          res.redirect("/single/" + id); // Redirect to the single blog page after update
        } catch (error) {
          console.error("Error updating blog:", error);
          res.status(500).json({ error: 'Error updating blog' });
        }
      }