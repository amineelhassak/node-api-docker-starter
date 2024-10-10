const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDb = require('./config/db');


const port = 3002;
var app;
var db;

// db = mongoose.connection;//
connectDb();

// Middleware for parsing request bodies
app = express();
app.use(bodyParser.json());
app.use(express.json()); // Handles JSON requests
app.use(express.urlencoded({ extended: true })); // Handles URL-encoded requests

// db.on('error', () => {
//     console.error('Error!');
// });


// db.once("open", () => {
    app.use('/', require('./routes/salon')); // Prefix routes with '/api'
    
    console.log('Open successfully!');

    app.listen(port, () => {
        console.log('Listening on port 3000');
    });
// });
