const express = require('express');
const dotenv = require('dotenv');
const { getAllNews, renderCreateNews, createNews } = require('./controller/newsController');

dotenv.config();

const app = express();
// Connect to the database
require('./model/index') // index hunxa parxa yar not model

// telling the nodejs to set view-engine to ejs
app.set('view engine', 'ejs');
// nodejs lai  file access garna dey vaneko hae yo code lay 
app.use(express.static("public/")); // giving excess to public folder for ejs
// form bata data aairaxa parse gara or handle gar vaneko ho
app.use(express.json());
app.use(express.urlencoded({extended: true}));




app.get('/', getAllNews );
app.get('/createNews', renderCreateNews );
app.post('/createNews', createNews);
  

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
});
