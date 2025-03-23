const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
    mainImage: {
        type: String,
        required: true
    }
}, {timestamps: true });

// product module export
const Product = mongoose.model('Product', ProductSchema);
module.exports = { Product };