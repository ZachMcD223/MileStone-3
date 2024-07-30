const router = require('express').Router()
const db = require("../models")
const { Op } = require("sequelize");
const bcrypt = require('bcrypt')
const { Customers } = db


router.post('/', async (req, res) => {
    let customer = await Customers.findOne({
        where: { email: req.body.email }
    })

    if (!customer || !await bcrypt.compare(req.body.password, customer.passwordDigest)) {
        res.status(404).json({
            message: 'Could not find customer with the provided customer name and password'
        })
    } else {
        req.session.customerId = customer.customerId
        console.log(req)
        res.json({ customer })
    }
})

// router.get('/sign-in', async (req, res) => {
//     let { password, ...rest } = req.body;
//     const customer = await Customers.create({
//         ...rest,
//         role: 'reviewer',
//         passwordDigest: await bcrypt.hash(password, 12)
//     })
//     res.json(customer)
// })

router.get('/profile', async (req, res) => {
    res.json(req.currentCustomer)
})

module.exports = router