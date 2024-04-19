// models/DeliveryBoy.js

const mongoose = require('mongoose');
const { Schema } = mongoose;

const deliveryBoySchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    phone: String,
    // Add any other fields you need for delivery boys
});

const DeliveryBoy = mongoose.model('DeliveryBoy', deliveryBoySchema);

module.exports = DeliveryBoy;
