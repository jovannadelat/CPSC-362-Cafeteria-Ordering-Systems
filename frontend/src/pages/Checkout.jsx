import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

// Container,Box to hold cart items on display
const CartItemsBox = styled.div`
  width: 60%;
  height: 400px;
  background-color: #f1f1f1;
  padding: 10px;
  overflow-y: scroll;
`;

// Right half of screen is a column itself
// this will hold TotalBox and ButtonBox,Buttons
const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
`;

// Container,Box for the total amount of money
const TotalBox = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  margin-bottom: 10px;
  height: 150px;
`;

/*Container,Box holding the two buttons*/
const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/*Checkout Button CSS*/
const CheckoutButton = styled.button`
  padding: 10px;
  background-color: #800080;
  color: white;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color:rgb(83, 0, 83);
  }
`;

const Checkout = () => {
const navigate = useNavigate();

  return (
    <CheckoutContainer>
      <CartItemsBox>
        <h2>Your Cart</h2>
        {/* Items in cart will be displayed here */}
      </CartItemsBox>
      
      <RightSide>
        <TotalBox>
          <h3>Total</h3>
          {/* Total will be displayed here */}
        </TotalBox>
        
        <ButtonBox>
          <CheckoutButton>Checkout</CheckoutButton>
          <CheckoutButton onClick={() => navigate(-1)}>Cancel</CheckoutButton>
        </ButtonBox>
      </RightSide>
    </CheckoutContainer>
  );
};

export default Checkout;
