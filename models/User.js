
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: { type: String, required: true},
    city: { type: String, required: true},
    state: { type: String, required: true},
    zipcode: { type: String, required: true}
});

const userSchema = new mongoose.Schema({
    personalInfo: {
        username: { type: String, required: true},
        email: { type: String, required: true},
        password: { type: String, required: true},
        phonenumber: { type: Number, required: true}
    },
    deliveryAddress: addressSchema,
    billingAddress: addressSchema
});

module.exports = mongoose.model('User', userSchema);