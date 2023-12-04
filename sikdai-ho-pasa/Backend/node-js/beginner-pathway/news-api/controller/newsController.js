const { news, sequelize } = require('../model/index') // indec bata import garna parxa model ani kaam garxa


exports.getAllNews = async(req, res) => {
  //Database bata nikalna find
const allNews = await news.findAll()
console.log(allNews)
// Rendering the newsfeed.ejs file in the newsfeed directory
// Ejs file lai news vanne namm ma allNews ko data pathako
    res.render("newsfeed/newsfeed.ejs", {news: allNews}); 
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

