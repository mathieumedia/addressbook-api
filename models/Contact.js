// Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    organization: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    address: {
        street: { type: String },
        aptNum: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        postal: { type: String },
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Contact', contactSchema);