import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
    const navigate = useNavigate();

    const handleCheckoutClick = () => {
        navigate('/checkout');
    };

    const handleBackClick = () => {
        navigate('/home');
    };

    return (
        <div>
            <h1>Menu Page</h1>
            <button onClick={handleBackClick}>Back</button>
            <button onClick={handleCheckoutClick}>Checkout</button>
        </div>
    );
};

export default Menu;