const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
// const { Customer } = db
const { Op } = require("sequelize");
const Customers = require('../models/customers')


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
    console.log(Customers)
    //console.log(req.body, rest)
    //const customers = await Customers.create({
        //...rest,
        // role: 'reviewer',
        // passwordDigest: await bcrypt.hash(password, 12)
    })
    res.json(customers)
})


router.get('/', async (req, res) => {
    const customers = await Customer.findAll()
    res.json(customers)
})

module.exports = router