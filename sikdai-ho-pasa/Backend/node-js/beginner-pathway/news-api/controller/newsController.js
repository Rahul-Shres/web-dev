const { news, sequelize } = require('../model/index') // indec bata import garna parxa model ani kaam garxa


exports.getAllNews = (req, res) => {
    res.render("newsfeed/newsfeed.ejs"); // Rendering the newsfeed.ejs file in the newsfeed directory
}


exports.renderCreateNews =  (req, res) => {
    res.render("createNews/createNews.ejs");
} 


exports.createNews = async (req, res) => {
    const { title, subtitle, content } = req.body;
    console.log(title, subtitle, content);

    // Create a new News instance using the create method
    await news.create({
      title,
      subtitle,
      content,
    });

  
      res.redirect('/');
   
}

