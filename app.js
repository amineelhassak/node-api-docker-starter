const express = require('express');
const bodyParser = require('body-parser');
const connectDb = require('./config/db');
require('dotenv').config();

const port = process.env.PORT || 3000;;
connectDb();

const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/salon'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

