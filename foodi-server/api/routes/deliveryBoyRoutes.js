// routes/deliveryBoyRoutes.js

const express = require('express');
const router = express.Router();
const DeliveryBoy = require('../models/DeliveryBoy');

// POST: Create a new delivery boy
router.post('/', async (req, res) => {
    try {
        const deliveryBoy = await DeliveryBoy.create(req.body);
        res.status(201).json(deliveryBoy);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET: Get all delivery boys
router.get('/', async (req, res) => {
    try {
        const deliveryBoys = await DeliveryBoy.find();
        res.status(200).json(deliveryBoys);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Implement other CRUD operations as needed
module.exports = router;