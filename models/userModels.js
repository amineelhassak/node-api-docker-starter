const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    // user_id:
    name: {
        type: String,
        required:[true,"name required"],
    },
    password: {
        type: String,
        required: [true,"password required"],
        minlength: [8,"password must be at least 8 characters"],
    },
    email: {
        type: String,
        required: [true,"email required"],
        lowercase: true,
    },
    dated: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema);