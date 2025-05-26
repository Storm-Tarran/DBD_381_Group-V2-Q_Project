//Schema for the orders collection
const mongoose = require('mongoose');

const shippingAddressSchema = new mongoose.Schema({
    street: {type: String},
    city: {type: String},
    country: {type: String},
    zipCode: {type: String}
}, { _id: false });

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    orderedItems: [{
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
        }
    }],
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    shippingAddress: {
        type: shippingAddressSchema,
        required: true
    },
    dateOrdered: {
        type: Date,
        default: Date.now
    },
    paymentMethod: {
        type: String,
        enum: ['Credit Card', 'PayPal', 'Bank Transfer'],
        default: 'Credit Card'
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid', 'Failed'],
        default: 'Paid'
    }
}, { timestamps: true });

module.exports = mongoose.model('Orders', orderSchema);