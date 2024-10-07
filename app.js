const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDb = require('./config/db');

const app = express();

connectDb();
const port = process.env.NODE_LOCAL_PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended :true }));

app.get('/',(req,res) => {
    res.send('hello World !');
});

app.use('/',require('./routes/user'));

app.listen(port,() => {
    console.log('server is runing on port ${port}');
});