const router = require('express').Router()
const db = require("../models")
const { Orders } = db
const { Op } = require("sequelize");

// Get all orders
router.get('/', async (req, res) => {
  try {
    const orders = await orders.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new order
router.post('/', async (req, res) => {
  try {
    const { customer_id, total } = req.body;

    if (!customer_id || !total) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const order = await Orders.create({
      customer_id,
      order_date: new Date(),
      total,
    });

    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error.message);
    console.error('Stack trace:', error.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;

// Get a single order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order == null) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update an order
router.put('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order == null) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (req.body.customerName != null) {
      order.customerName = req.body.customerName;
    }
    if (req.body.items != null) {
      order.items = req.body.items;
      order.totalAmount = req.body.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
    if (req.body.status != null) {
      order.status = req.body.status;
    }

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an order
router.delete('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order == null) {
      return res.status(404).json({ message: 'Order not found' });
    }

    await order.remove();
    res.json({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;