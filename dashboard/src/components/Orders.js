import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const BASE_URL = "https://zerodha-clone-backensd.onrender.com"; // Your Render backend URL

    axios
      .get(`${BASE_URL}/orders`) // Adjusted URL to point to the deployed backend
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load orders");
        setLoading(false);
      });
  }, []);

  return (
    <div className="orders">
      <h2 className="title">Your Orders</h2>

      {loading && <p>Loading orders...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && orders.length === 0 && (
        <div className="no-orders">
          <p>You haven't placed any orders yet.</p>
          <Link to="/" className="btn">
            Place an Order
          </Link>
        </div>
      )}

      {!loading && orders.length > 0 && (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.product}</td>
                  <td>{order.quantity}</td>
                  <td>${order.price.toFixed(2)}</td>
                  <td>${(order.price * order.quantity).toFixed(2)}</td>
                  <td className={order.status === "Completed" ? "success" : "pending"}>
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Link to="/new-order" className="btn place-order">
        Place New Order
      </Link>
    </div>
  );
};

export default Orders;