const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const mongoURI = process.env.DB_URI || 'mongodb://mongo:27017/docker-node-mongo';
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;