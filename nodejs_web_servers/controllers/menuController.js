const Menu = require('../model/Menu');

// Create new menu item
const addMenuItem = async (req, res) => {
    const { name, price, image, category, quantity, description } = req.body;

    if (!name || !price || !image || !category || quantity == null || !description) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const newItem = new Menu({ name, price, image, category, quantity, description });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        console.error('Error adding menu item:', err);
        res.status(500).json({ message: 'Server error' });
    }
};

// Export the controller
module.exports = { addMenuItem };
