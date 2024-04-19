// DeliveryBoyManagementPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeliveryBoy = () => {
  const [deliveryBoys, setDeliveryBoys] = useState([]);
  const [newDeliveryBoy, setNewDeliveryBoy] = useState({});

  useEffect(() => {
    fetchDeliveryBoys();
  }, []);

  const fetchDeliveryBoys = async () => {
    try {
      const response = await axios.get('/api/delivery-boys');
      setDeliveryBoys(response.data);
    } catch (error) {
      console.error('Error fetching delivery boys:', error);
    }
  };

  const handleAddDeliveryBoy = async () => {
    try {
      await axios.post('/api/delivery-boys', newDeliveryBoy);
      fetchDeliveryBoys();
      setNewDeliveryBoy({});
    } catch (error) {
      console.error('Error adding delivery boy:', error);
    }
  };

  const handleDeleteDeliveryBoy = async (id) => {
    try {
      await axios.delete(`/api/delivery-boys/${id}`);
      fetchDeliveryBoys();
    } catch (error) {
      console.error('Error deleting delivery boy:', error);
    }
  };

  return (
    <div>
      <h1>Delivery Boy Management</h1>
      <div>
        <h2>Add New Delivery Boy</h2>
        <input
          type="text"
          placeholder="Name"
          value={newDeliveryBoy.name || ''}
          onChange={(e) => setNewDeliveryBoy({ ...newDeliveryBoy, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newDeliveryBoy.email || ''}
          onChange={(e) => setNewDeliveryBoy({ ...newDeliveryBoy, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone"
          value={newDeliveryBoy.phone || ''}
          onChange={(e) => setNewDeliveryBoy({ ...newDeliveryBoy, phone: e.target.value })}
        />
        <button onClick={handleAddDeliveryBoy}>Add Delivery Boy</button>
      </div>
      <div>
        <h2>Delivery Boys</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {deliveryBoys.map(deliveryBoy => (
              <tr key={deliveryBoy._id}>
                <td>{deliveryBoy.name}</td>
                <td>{deliveryBoy.email}</td>
                <td>{deliveryBoy.phone}</td>
                <td>
                  <button onClick={() => handleDeleteDeliveryBoy(deliveryBoy._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeliveryBoy;
