const mongoose = require('mongoose');
const { Schema } = mongoose;

const salonSchema = new Schema({
    name: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        // required: true,
    },
    gmail: {
        type: String,
        // required: true,
    },
    address: {
        type: String,
        // required: true,
    },
    dated: {
        type: Date,
        default: Date.now,
    }
});

// Export the Salon model
module.exports = mongoose.model('Salon', salonSchema);
