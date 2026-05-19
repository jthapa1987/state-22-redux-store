import React from 'react';
import { useSelector } from 'react-redux';

const OrderHistory = () => {
  const { orderHistory } = useSelector((state) => state.user);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Order History</h2>
      {orderHistory.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orderHistory.map((order) => (
          <div key={order.id} style={{ border: '1px solid #ddd', padding: '15px', marginBottom: '15px' }}>
            <p>Order ID: {order.id}</p>
            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            <p>Total: ${order.total?.toFixed(2)}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;