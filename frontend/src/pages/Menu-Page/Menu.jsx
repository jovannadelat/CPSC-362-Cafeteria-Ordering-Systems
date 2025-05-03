import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
    height: 400px;
`;

const MenuItemsBox = styled.div`
    display: flex;
    width: 45%;
    height:400px;
    background-color: #f1f1f1;
    padding: 10px;
    overflow-y: scroll;
`;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    width 45%;
`;

const DrinkItemsBox = styled.div`
    height: 400px;
    background-color: #f1f1f1;
    padding: 10px;
    margin-bottom: 10px;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MenuButton = styled.button`
    padding: 10px;
    background-color: #800080;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: rgb(83, 0, 83);
    }
`;  





const Menu = () => {
    const navigate = useNavigate();

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
                {/* Food(category, name, price) */}
            </ItemContainer>
            <ItemContainer>
                <DrinkItemsBox>
                <h2>Drink Items</h2>
                {/* Drink(category, name, price) */}
                </DrinkItemsBox>
                <ButtonBox>
                    <MenuButton onClick={handleBackClick}>Back</MenuButton>
                    <MenuButton onClick={handleCheckoutClick}>Checkout</MenuButton>
                </ButtonBox>
            </ItemContainer>
            
        </MenuLayout>
    );
};

export default Menu;