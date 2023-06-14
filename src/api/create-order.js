const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const { razorpayKeySecret } = require('../config'); // create config.js file for storing API keys

const razorpay = new Razorpay({
  key_id: 'rzp_test_z6uWG2LqOlXFCT',
  key_secret: razorpayKeySecret,
});

router.post('/create-order', async (req, res) => {
  try {
    const amount = 1000; // Amount in paise (Example: ₹10.00)
    const options = {
      amount: amount,
      currency: 'INR',
      receipt: 'order_receipt',
      payment_capture: 1,
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
} catch (error) {
    res.status(500).send(error);
}
});
