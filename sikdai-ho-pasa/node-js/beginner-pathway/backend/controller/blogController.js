// Importing the 'blogs' model from a different file or module
const { blogs } = require("../model");

// Function to render a form for creating a new blog
exports.renderCreateBlog = (req, res) => {
  res.render("createBlog"); // Displaying a form to create a new blog
}

// Function to get data of all blogs from the database
exports.getBlogData = async (req, res) => {
  const username = req.query.username || ''; // Getting the username from the URL or setting it as empty if not available
  
  // Retrieving all blogs from the database
  const allBlogs = await blogs.findAll();

  // Mapping the retrieved blogs' data to a simpler format
  const blogData = allBlogs.map(blog => ({
    id: blog.dataValues.id,
    title: blog.dataValues.title,
    subtitle: blog.dataValues.subTitle,
    content: blog.dataValues.content,
    author: blog.dataValues.author, // Assuming there's an 'author' property in the blog data
    publishedDate: blog.dataValues.createdAt // Assuming createdAt is in the desired format
  }));

  // Rendering a page to display all the blogs along with the username
  res.render('blogs', { blogs: blogData, username: username });
}

// Function to render a form for creating a new blog
exports.renderForm = (req, res) => {
  res.render('form.ejs'); // Displaying a form to create a new blog
}

// Function to create a new blog in the database
exports.createNewBlog = async (req, res) => {
  const { title, subtitle, content } = req.body; // Extracting blog details from the request
  
  try {
    // Creating a new blog using the 'blogs' model
    const newBlog = await blogs.create({
      title: title,
      subTitle: subtitle,
      content: content
    });

    // Logging the newly created blog (optional)
    console.log("New blog created:", newBlog);

    res.redirect("/"); // Redirecting to the home page after successful creation
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).send("Error creating blog");
  }
}

// Function to render a form to edit a specific blog
exports.fillSinglePageForm = async (req, res) => {
  const id = req.params.id; // Getting the ID of the blog to be edited
  
  // Retrieving the blog from the database using its ID
  const blog = await blogs.findAll({
    where: {
      id: id
    }
  });

  // Rendering a form to edit a specific blog with the retrieved blog data
  res.render("singleBlog", { blog: blog });
}

// Function to delete a specific blog from the database
exports.deleteBlog = async (req, res) => {
  const id = req.params.id; // Getting the ID of the blog to be deleted

  try {
    // Deleting the blog from the database using its ID
    await blogs.destroy({
      where: {
        id: id
      }
    });
    
    res.redirect('/'); // Redirecting to the home page after successful deletion
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ error: 'Error deleting blog' });
  }
}

// Function to render a form to edit a specific blog
exports.editBlog = async (req, res) => {
  const id = req.params.id; // Getting the ID of the blog to be edited

  // Retrieving the blog from the database using its ID
  const blog = await blogs.findAll({
    where: {
      id: id
    }
  });

  // Rendering a form to edit a specific blog with the retrieved blog data
  res.render('editBlog', { blog: blog });
}

// Function to update the details of a specific blog in the database
exports.updateBlog = async (req, res) => {
  const id = req.params.id; // Getting the ID of the blog to be updated
  const { title, subTitle, content } = req.body; // Extracting updated details from the request

  try {
    // Updating the details of the blog in the database using its ID
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

    // Redirecting to the single blog page after successful update
    res.redirect("/single/" + id);
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ error: 'Error updating blog' });
  }
}
