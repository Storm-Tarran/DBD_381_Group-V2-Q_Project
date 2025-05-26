//Schema for the orders collection
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Products',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    dateOrdered: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true });

module.exports = mongoose.model('Orders', orderSchema);