import React from "react";
import "../styles/OrderHistoryPage.css";

const OrderHistoryPage = ({ orderHistory }) => {
  return (
    <div className="order-history-page">
      <h1 className="order-history-title">Order History</h1>
      {orderHistory.length === 0 ? (
        <p className="order-history-empty">No orders yet. Your orders will appear here!</p>
      ) : (
        <div className="order-history-list">
          {orderHistory.map((order, index) => (
            <div className="order-item" key={index}>
              <h3 className="order-item-title">Order {index + 1}</h3>
              <ul>
                {order.map((item, i) => (
                  <li key={i}>
                    {item.name} - ${item.price.toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistoryPage;
