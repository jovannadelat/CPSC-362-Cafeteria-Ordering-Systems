import React from 'react';
import { useNavigate } from 'react-router-dom'

function OrderHistory() {

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/home');
    };

    return(
        <div>
            <h1>Order History</h1>
            <button onClick={handleBackClick}>Back</button>
        </div>
    );
}

export default OrderHistory;