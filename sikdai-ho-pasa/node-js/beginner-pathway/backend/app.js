const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.get("/", (req, res) => {
//     res.render("home.ejs", {title: "Home", contact: "9810359789"});
// });

// Assuming you're using Express.js
app.get('/', (req, res) => {
    // Assuming 'blogData' is an array containing your blog objects
    const blogData = [
        { title: 'Title 1', content: 'Content 1', author: 'Author 1', publishedDate: 'Date 1' },
        { title: 'Title 2', content: 'Content 2', author: 'Author 2', publishedDate: 'Date 2' },
        // Add more blog objects as needed
    ];

    res.render('blogs', { blogs: blogData });
});

app.get('/form', (req, res) => {
    res.render('form.ejs');
})

app.post('/createBlog', (req, res) => {
    console.log(req.body);
    console.log(req.body.title); // Logging 'title' field
    console.log(req.body.subtitle); // Logging 'subtitle' field
    console.log(req.body.content); // Logging 'content' field
    res.send('Received the form data!'); // Send a response to acknowledge receiving the data
});
app.listen(8000, () => {
    console.log('Listening to port 8000');
});
