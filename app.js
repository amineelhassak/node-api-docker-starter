const express = require('express');
const connectDb = require('./config/db');
const mongoose = require('mongoose');
const port = 3002;
const app = express();
const bodyParser = require('body-parser');
const db = mongoose.connection;

connectDb(); // Connect to your database

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(express.json()); // Handles JSON requests
app.use(express.urlencoded({ extended: true })); // Handles URL-encoded requests

db.on('error', () => {
    console.error('Error!');
});

db.once("open", () => {
    app.use('/', require('./routes/salon')); // Prefix routes with '/api'
    console.log('Open successfully!');
    app.listen(port, () => {
        console.log('Listening on port 3000');
    });
});
