const mongoose = require('mongoose');

const salonSchema = new mongoose.Schema({
    salon_id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 10,
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 1000,
    },
    address: {
        type: String,
        minlength: 3,
        required: true,
    },
    phone_number: {
        type: String,
        required: true,
    },
    subscription: {
        type: Boolean,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    email: {
        type: String,
        required: true,
        index: { unique: true }, 
    },
    dated: {
        type: Date,
        default: Date.now,
    },
});

// const salonValidationSchema = Joi.object({
//     name: Joi.string().trim().min(3).max(10).required(),
//     password: Joi.string().min(8).required(),
//     email: Joi.string().email().required(),
//     address: Joi.string().min(3).required(),
//     description: Joi.string().trim().min(10).max(1000),
//     phone_number: Joi.string().required(),
//     subscription:Joi.bool(),
//     dated: Joi.date(),
//     salon_id:Joi.number(),
// });

// const validateSalon = (salon) => {
//     return salonValidationSchema.validate(salon);
// };

module.exports = {
    Salon: mongoose.model('Salon', salonSchema),
    // validateSalon,
};


