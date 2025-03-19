import React from 'react';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {

    const navigate = useNavigate();

    const handleBackClick = () => { navigate('/menu');};

    return (
        <div>
            <h1>Checkout Page</h1>
            <button onClick={handleBackClick}>Back</button>
            <button>Payment Method</button>
        </div>
    );
};


export default Checkout;