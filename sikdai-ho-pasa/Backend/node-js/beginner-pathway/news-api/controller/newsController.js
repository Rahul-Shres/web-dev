const { news, sequelize, users } = require('../model/index') // indec bata import garna parxa model ani kaam garxa
const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs'); // fs-filesystem

exports.getAllNews = async(req, res) => {
  //Database bata nikalna find
const allNews = await news.findAll({
  include: {
    model: users
  }
})
console.log(allNews)
// Rendering the newsfeed.ejs file in the newsfeed directory
// Ejs file lai news vanne namm ma allNews ko data pathako
    res.render("newsfeed/newsfeed.ejs", {news: allNews}); 
}


exports.renderCreateNews =  (req, res) => {
    res.render("createNews/createNews.ejs");
} 


exports.createNews = async (req, res) => {


    console.log(req.user[0].id, "From Create News <<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

    console.log(req.file.filename, "From Create News <<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    const fileName = req.file.filename
    const { title, subtitle, content } = req.body;


    console.log(title, subtitle, content);
    console.log("req.id from createNews", req.id);
    const userId = req.user[0].id;
    // Create a new News instance using the create method
    await news.create({
      // id,
      title,
      subtitle,
      content,
      userId: userId,
      image: process.env.WEBSITE +fileName
    });

  
      res.redirect('/');
   
}

exports.getSingleNews = async (req, res) => {
  // Assuming you're retrieving the news ID from the request parameters
  const { id } = req.params;
  // id ko data magnu/find garnu paryo hamro table bata
  const singleNews = await news.findAll({
    where: {
      id:id,
    },
    include: {
      model: users
    }
  })

  console.log("singleNews", singleNews);
  // Here, construct the correct path for the view based on your file structure
  res.render('singleBlog/singleBlog.ejs', {  singleNews}); // Assuming you're passing the ID to the view
};


exports.deleteNews = async (req, res) => {
  const { id } = req.params;

  try {
    // 'news' is your Sequelize model for news
    await news.destroy({
      where: { id: id },
    });
    res.redirect("/");
  } catch (error) {
    console.error("Error deleting news:", error);
    // Handle the error appropriately (send an error response, redirect, etc.)
    res.status(500).send("Error deleting news");
  }
};


exports.getEditNews = async (req,res) =>{

  const id = req.params.id;
  console.log(id);
  // find news of the id
  const prefill = await news.findAll({
    where: { id: id}
  })
  res.render("editNews/editNews.ejs", {prefill});
}

exports.editedNews = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, subtitle, content } = req.body;

    const oldData = await news.findByPk(id);
    let oldImage = oldData.image;
    let newImage;

    if (req.file) {
      newImage = process.env.WEBSITE + req.file.filename;
      console.log("New File URL: " + newImage);
    }

    await news.update({
      title,
      subtitle,
      content,
      image: newImage || oldImage // Use newImage if available, otherwise keep the oldImage
    }, {
      where: { id }
    });

    if (oldImage.startsWith("http://localhost:8000/")) {
      const lengthOfUnwanted = "http://localhost:8000/".length;
      const fileNameInUploadsFolder = oldImage.slice(lengthOfUnwanted);

      fs.unlink("uploads/" + fileNameInUploadsFolder, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Deleted old image");
        }
      });
    }

    console.log("Edited News Details:", req.body);
    res.redirect("/");
  } catch (error) {
    console.error("Error editing news:", error);
    res.status(500).send('Error editing news');
  }
};


exports.getMyNews = async (req, res) => {
  try {
    // get this user blogs
    const userId = req.userId;
    console.log(userId, "From myblog...");

    // find blogs of this user
    const myNews = await news.findAll({
      where: {
        userId: userId
      },
      include: [{
        model: users, // Assuming 'users' is your user model
        attributes: ['username', 'email'] // Fetch only necessary attributes
      }]
    });

    res.render('myNews/myNews.ejs', { myNews: myNews });
  } catch (error) {
    console.error("Error retrieving user blogs:", error);
    res.status(500).send('Error retrieving user blogs');
  }
};