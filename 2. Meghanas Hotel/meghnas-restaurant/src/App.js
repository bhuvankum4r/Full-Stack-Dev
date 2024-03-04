import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [order, setOrder] = useState({ item: '', quantity: 0, specialInstructions: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setOrder(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/order', order);
      console.log(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Meghnas Restaurant</h1>
      <form onSubmit={handleSubmit} style={{ margin: '10px' }}>
        <label htmlFor="item">Item:</label>
        <input type="text" id="item" name="item" value={order.item} onChange={handleChange} />

        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={order.quantity} onChange={handleChange} />

        <label htmlFor="specialInstructions">Special Instructions:</label>
        <textarea id="specialInstructions" name="specialInstructions" value={order.specialInstructions} onChange={handleChange} />

        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
}

export default App;
