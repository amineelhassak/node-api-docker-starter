const mongoose = require('mongoose');
const { Schema } = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new Schema({
    _id: Number,

    name: {
        type: String,
        required: [true, "name required"],
    },
    password: {
        type: String,
        required: [true, "password required"],
        minlength: [8, "password must be at least 8 characters"],
    },
    email: {
        type: String,
        required: [true, "email required"],
        lowercase: true,
    },
    dated: {
        type: Date,
        default: Date.now,
    },    
});

userSchema.plugin(AutoIncrement, { inc_field: '_id' });
module.exports = mongoose.model('User', userSchema);
