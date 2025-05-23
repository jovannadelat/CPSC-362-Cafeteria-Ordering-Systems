const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    description: { type: String, required: true }
});


const MenuItem = mongoose.model('menu', menuItemSchema);
module.exports = MenuItem;
