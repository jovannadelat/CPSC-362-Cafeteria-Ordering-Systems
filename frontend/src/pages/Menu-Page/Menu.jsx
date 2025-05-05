import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCart } from './CartContext';

const MenuLayout = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
`;

const ItemContainer = styled.div`
    flex: 1;
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 12px;
    height: 600px;
    overflow-y: auto;
`;

const ItemCard = styled.div`
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 15px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const ItemImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
`;

const MenuButton = styled.button`
    padding: 10px;
    background-color: #800080;
    color: white;
    border: none;
    cursor: pointer;
    margin-top: 5px;

    &:hover {
        background-color: rgb(83, 0, 83);
    }
`;

const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
`;

const foodItems = [
    { id: 1, name: "Burger", price: 5.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Pizza", price: 7.49, image: "https://plus.unsplash.com/premium_photo-1664391921404-591084d5d2be?q=80&w=2867&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Salad", price: 4.25, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Pasta", price: 6.80, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, name: "Tacos", price: 5.00, image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

const drinkItems = [
    { id: 6, name: "Coke", price: 1.99, image: "https://images.unsplash.com/photo-1605548230624-8d2d0419c517?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNva2V8ZW58MHx8MHx8fDA%3D" },
    { id: 7, name: "Lemonade", price: 2.49, image: "https://images.unsplash.com/photo-1728777187102-1ed5cd6346d5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxlbW9uZGUlMjBkcmlua3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 8, name: "Iced Tea", price: 2.20, image: "https://plus.unsplash.com/premium_photo-1664392087859-815b337c3324?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGVtb25kZSUyMGRyaW5rfGVufDB8fDB8fHww" },
    { id: 9, name: "Coffee", price: 3.00, image: "https://images.unsplash.com/photo-1738216796366-314d0687d4bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29mZmVlJTIwaWNlZHxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 10, name: "Smoothie", price: 3.50, image: "https://images.unsplash.com/photo-1575159249868-df58bf5e09ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21vb3RoaWV8ZW58MHx8MHx8fDA%3D" },
];

const Menu = () => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const handleCheckoutClick = () => {
        navigate('/checkout');
    };

    const handleBackClick = () => {
        navigate('/home');
    };

    return (
        <MenuLayout>
            <ItemContainer>
                <h2>Food Items</h2>
                {foodItems.map(item => (
                    <ItemCard key={item.id}>
                        <ItemImage src={item.image} alt={item.name} />
                        <h4>{item.name}</h4>
                        <p>${item.price.toFixed(2)}</p>
                        <MenuButton onClick={() => addToCart(item)}>Add to Cart</MenuButton>
                    </ItemCard>
                ))}
            </ItemContainer>

            <ItemContainer>
                <h2>Drink Items</h2>
                {drinkItems.map(item => (
                    <ItemCard key={item.id}>
                        <ItemImage src={item.image} alt={item.name} />
                        <h4>{item.name}</h4>
                        <p>${item.price.toFixed(2)}</p>
                        <MenuButton onClick={() => addToCart(item)}>Add to Cart</MenuButton>
                    </ItemCard>
                ))}
                <ButtonBox>
                    <MenuButton onClick={handleBackClick}>Back</MenuButton>
                    <MenuButton onClick={handleCheckoutClick}>Checkout</MenuButton>
                </ButtonBox>
            </ItemContainer>
        </MenuLayout>
    );
};

export default Menu;
