const mongoose = require('mongoose');

const url = 'mongodb://mongo:27017/docker-node-mongo';

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        setTimeout(connectDB, 5000);
    }
};

module.exports = connectDB;