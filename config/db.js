const mongoose = require('mongoose');

const url = 'mongodb+srv://amine:Azer1234@amine.agj6pga.mongodb.net/dbs?retryWrites=true&w=majority&appName=amine';

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