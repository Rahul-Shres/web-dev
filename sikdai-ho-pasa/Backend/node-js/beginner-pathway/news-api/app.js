const express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
dotenv.config();
const app = express();
//Form bata ako data lai bhuj hai vaneko
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// cookies haru khana lai
app.use(cookieParser())
// Connect to the database
require('./model/index') // index hunxa parxa yar not model

// telling the nodejs to set view-engine to ejs
app.set('view engine', 'ejs');
// nodejs lai  file access garna dey vaneko hae yo code lay 
app.use(express.static("public/")); // giving excess to public folder for ejs
// form bata data aairaxa parse gara or handle gar vaneko ho
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes here

const newsRouter = require('./routes/newsRoute.js');
const authRouter = require('./routes/authRoute.js');
app.use('', newsRouter);
app.use('', authRouter);


app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT);
});
