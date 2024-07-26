const router = require('express').Router()
const db = require("../models")
//const bcrypt = require('bcrypt')
const { Stage, Event } = db;
const { Op } = require("sequelize");

const { Customers } = db

router.post('/', async (req, res) => {
    let { password, ...rest } = req.body;
    console.log(Customers)
    //console.log(req.body, rest)
    const customers = await Customers.create({
        ...rest,
        // role: 'reviewer',
        // passwordDigest: await bcrypt.hash(password, 12)
    })
    res.json(customers)
})


router.get('/', async (req, res) => {
    //const users = await Customers.findAll()
    const test = 'hello world' 
    res.json(test)
})

module.exports = router