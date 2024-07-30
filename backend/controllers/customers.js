const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const { Customers } = db
const { Op } = require("sequelize");
// const Customers = require('../models/customers')


// router.get('/', async (req, res) => {
//     const customers = await Customers.findAll()
//     res.json(customers)
// })


// module.exports = router

// Get all customers
router.get('/', async (req, res) => {
  try {
    const customers = await Customers.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single customer by ID
router.get('/:id', async (req, res) => {
  try {
    const customer = await Customers.findById(req.params.id);
    if (customer == null) {
      return res.status(404).json({ message: 'Customers not found' });
    }
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new customer
// router.post('/', async (req, res) => {
//   const customer = new Customers({
//     first_name: req.body.name,
//     last_name: req.body.name,
//     email: req.body.email,
//     phone: req.body.phone,
//     address: req.body.address
//   });

//   try {
//     const newCustomers = await customer.save();
//     res.status(201).json(newCustomers);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

router.post('/sign-up', async (req, res) => {
    let { password, ...rest } = req.body;
    const customer = await Customers.create({
        ...rest,
        role: 'reviewer',
        passwordDigest: await bcrypt.hash(password, 12)
    })
    res.json(customer)
})

// Update a customer
router.put('/', async (req, res) => {
  try {
    const customer = await Customers.findById(req.params.id);
    if (customer == null) {
      return res.status(404).json({ message: 'Customers not found' });
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

    const updatedCustomers = await customer.save();
    res.json(updatedCustomers);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a customer
router.delete('/', async (req, res) => {
  try {
    const customer = await Customers.findById(req.params.id);
    if (customer == null) {
      return res.status(404).json({ message: 'Customers not found' });
    }

    await customer.remove();
    res.json({ message: 'Customers deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router