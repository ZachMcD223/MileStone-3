const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
// const { Customer } = db
const { Op } = require("sequelize");
const Customer = require('../models/customers')


// router.get('/', async (req, res) => {
//     const customers = await Customer.findAll()
//     res.json(customers)
// })


// module.exports = router

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single customer by ID
router.get('/:id', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (customer == null) {
      return res.status(404).json({ message: 'Customer not found' });
    }
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new customer
// router.post('/', async (req, res) => {
//   const customer = new Customer({
//     first_name: req.body.name,
//     last_name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//     address: req.body.address
//   });

//   try {
//     const newCustomer = await customer.save();
//     res.status(201).json(newCustomer);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

router.post('/', async (req, res) => {
    let { password, ...rest } = req.body;
    const customer = await Customer.create({
        ...rest,
        role: 'reviewer',
        passwordDigest: await bcrypt.hash(password, 12)
    })
    res.json(customer)
})

// Update a customer
router.put('/', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (customer == null) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    if (req.body.name != null) {
      customer.name = req.body.name;
    }
    if (req.body.email != null) {
      customer.email = req.body.email;
    }
    if (req.body.phone != null) {
      customer.phone = req.body.phone;
    }
    if (req.body.address != null) {
      customer.address = req.body.address;
    }

    const updatedCustomer = await customer.save();
    res.json(updatedCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a customer
router.delete('/', async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (customer == null) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    await customer.remove();
    res.json({ message: 'Customer deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router