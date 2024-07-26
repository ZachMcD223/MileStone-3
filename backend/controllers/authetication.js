const router = require('express').Router()
const db = require("../models")
const { Op } = require("sequelize");
const bcrypt = require('bcrypt')

const { Customer } = db

router.post('/', async (req, res) => {
    let customer = await Customer.findOne({
        where: { email: req.body.email }
    })

    if (!customer || !await bcrypt.compare(req.body.password, customer.passwordDigest)) {
        res.status(404).json({
            message: 'Could not find customer with the provided customer name and password'
        })
    } else {
        req.session.customerId = customer.customerId
        // console.log(req)
        res.json({ customer })
    }
})

router.get('/profile', async (req, res) => {
    res.json(req.currentCustomer)
})

module.exports = router