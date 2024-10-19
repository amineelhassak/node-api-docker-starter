const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:".env"});
const port = process.env.PORT || 3000;
const logger = require('morgan');
const app = express();
app.use(logger('dev'));

const bodyParser = require('body-parser');
const connectDb = require('./config/database');
connectDb();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/salon'));
app.use('/', require('./routes/userRoutes'));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

