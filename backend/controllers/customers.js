const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const { Stage, Event } = db;
const { Op } = require("sequelize");

const { Customer } = db

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
    const users = await Customer.findAll()
    res.json(users)
})

module.exports = router