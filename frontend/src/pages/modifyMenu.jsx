import React, { useState } from 'react';
import axios from 'axios';

const AddMenuItem = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('food');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');  // Get token from localStorage

        if (!token) {
            alert('Please log in first');
            return;
        }

        try {
            await axios.post(
                'http://localhost:4000/menu',
                {
                    name,
                    price,
                    image,
                    category,
                    quantity,
                    description
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`  // Include token in Authorization header
                    }
                }
            );
            alert('Item added!');
            // Reset form fields
            setName('');
            setPrice('');
            setImage('');
            setQuantity('');
            setDescription('');
        } catch (err) {
            alert('Error adding item: ' + err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={e => setName(e.target.value)} 
                required 
            />
            <input 
                type="number" 
                placeholder="Price" 
                value={price} 
                onChange={e => setPrice(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Image URL" 
                value={image} 
                onChange={e => setImage(e.target.value)} 
                required 
            />
            <input 
                type="number" 
                placeholder="Quantity" 
                value={quantity} 
                onChange={e => setQuantity(e.target.value)} 
                required 
            />
            <textarea 
                placeholder="Description" 
                value={description} 
                onChange={e => setDescription(e.target.value)} 
                required 
            />
            <select value={category} onChange={e => setCategory(e.target.value)}>
                <option value="food">Food</option>
                <option value="drink">Drink</option>
            </select>
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddMenuItem;
