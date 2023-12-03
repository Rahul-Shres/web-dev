const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public/")); // giving excess to public folder for ejs

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/', (req, res) => {
    res.render("newsfeed/newsfeed.ejs"); // Rendering the newsfeed.ejs file in the newsfeed directory
});

app.get('/createNews', (req, res) => {
    res.render("createNews/createNews.ejs");
});


app.post('/createNews', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
});
