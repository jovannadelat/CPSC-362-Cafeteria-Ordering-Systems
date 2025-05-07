import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//styled stuff
//may need changing to fit in with colors of the rest of the website
const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const BackButton = styled.button`
  padding: 8px 16px;
  background-color: #800080;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const OrderCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  background-color: ${props => props.delivered ? '#e6f7ee' : '#fff8e6'};
  color: ${props => props.delivered ? '#2e7d32' : '#ff8f00'};
`;

const ItemsList = styled.ul`
  margin: 12px 0;
  padding-left: 20px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #f0f0f0;
  margin: 12px 0;
`;

//mock data
//replace when implemented

function OrderHistory() {

    const navigate = useNavigate();

    const orders = [
    {
      orderNumber: 1001,
      Total: 18.97,
      "orderDetails": [
        { name: "Main", quantity: 2 },
        { name: "Side", quantity: 1 },
        { name: "Bev", quantity: 1 }
      ],
      deliveryStatus: true,
      date: "2023-11-15T14:30:00Z"
    },
    {
      orderNumber: 1002,
      total: 12.49,
      orderDetails: [
        { name: "Pizza", quantity: 1 },
        { name: "Lemonade", quantity: 2 }
      ],
      deliveryStatus: false,
      date: "2023-11-16T12:15:00Z"
    }
  ];


//not sure if this next part is necessary, might be easier to remove
const formatOrderDetails = (details: OrderItem[] | string[]) => {
    if (details.length === 0) return [];
    
    // Handle both string and object formats
    if (typeof details[0] === 'string') {
      return details as string[];
    }
    return (details as OrderItem[]).map(item => 
      `${item.quantity}x ${item.name}`
    );
  };



//this part stays
return (
    <Container>
      <BackButton onClick={() => navigate('/home')}>← Back to Home</BackButton>
      <h1>Order History</h1>
      
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        orders.map(order => (
          <OrderCard key={order.orderNumber}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3>Order #{order.orderNumber}</h3>
              <StatusBadge delivered={order.deliveryStatus}>
                {order.deliveryStatus ? 'Delivered' : 'In Progress'}
              </StatusBadge>
            </div>
            
            {order.date && (
              <p style={{ color: '#666', marginTop: 4 }}>
                {new Date(order.date).toLocaleDateString()} at {new Date(order.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            )}
            
            <Divider />
            
            <ItemsList>
              {formatOrderDetails(order.orderDetails).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ItemsList>
            
            <div style={{ textAlign: 'right', fontWeight: 'bold' }}>
              Total: ${order.total.toFixed(2)}
            </div>
          </OrderCard>
        ))
      )}
    </Container>
  );
}

export default OrderHistory;
