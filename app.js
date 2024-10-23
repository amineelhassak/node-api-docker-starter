const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:".env"});
const port = process.env.PORT || 3000;
const logger = require('morgan');
const ApiError = require("./utils/ApiError");
const app = express();
const GlobalError = require('./middlewares/errorMidlleware');
app.use(logger('dev'));

const bodyParser = require('body-parser');
const connectDb = require('./config/database');
connectDb();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/salon'));
app.use('/', require('./routes/userRoutes'));
app.all("*",(req,res,next)=>{
    next(new ApiError(`can't find this route ${req.originalUrl}`, 400));
});
app.use(GlobalError);
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
