const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const { Customer } = db
const { Op } = require("sequelize");
const Customer = require('../models/customers')


router.post('/', async (req, res) => {
    let { password, ...rest } = req.body;
    const customer = await Customer.create({
        ...rest,
        role: 'reviewer',
        passwordDigest: await bcrypt.hash(password, 12)
    })
    res.json(customer)
})


router.get('/', async (req, res) => {
    const customers = await Customer.findAll()
    res.json(customers)
})

module.exports = router