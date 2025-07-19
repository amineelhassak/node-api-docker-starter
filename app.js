const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:".env"});
const port = process.env.PORT || 3002;
const logger = require('morgan');
const ApiError = require("./utils/ApiError");
const app = express();
const GlobalError = require('./middlewares/errorMidlleware');
app.use(logger('dev'));

const bodyParser = require('body-parser');
const connectDB = require('./config/database');
connectDB();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Server is running',
        timestamp: new Date().toISOString()
    });
});

app.use('/', require('./routes/salon'));
app.use('/', require('./routes/userRoutes'));

// 404 handler
app.all("*", (req, res, next) => {
    next(new ApiError(`Can't find this route ${req.originalUrl}`, 404));
});
app.use(GlobalError);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
