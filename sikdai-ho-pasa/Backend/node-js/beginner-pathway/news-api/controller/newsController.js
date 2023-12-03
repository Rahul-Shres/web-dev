
exports.getAllNews = (req, res) => {
    res.render("newsfeed/newsfeed.ejs"); // Rendering the newsfeed.ejs file in the newsfeed directory
}


exports.renderCreateNews =  (req, res) => {
    res.render("createNews/createNews.ejs");
} 


exports.createNews = (req, res) => {
    console.log(req.body);
    res.redirect('/');
}