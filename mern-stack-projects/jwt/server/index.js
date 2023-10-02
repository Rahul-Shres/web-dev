const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const port = 4000;

const app = express();
app.use( 
    cors({
        origin: "http://localhost:4000",
        methods: ["GET", "POST"],
        credentials: true,
    })
);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to database");
});

app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
});
