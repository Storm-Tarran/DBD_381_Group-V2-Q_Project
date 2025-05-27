//This will be the categories scheme, for easy update, view and delete of products
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Categories', categorySchema);