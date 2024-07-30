const router = require('express').Router();
const db = require("../models");
const bcrypt = require('bcrypt');
const { Customers } = db;

router.post('/sign-in', async (req, res) => {
    const customer = await Customers.findOne({
        where: { email: req.body.email }
    });

    if (!customer || !await bcrypt.compare(req.body.password, customer.passwordDigest)) {
        return res.status(404).json({ message: 'Invalid credentials' });
    }

    req.session.customerId = customer.customer_id;
    res.json({ customer });
});


router.get('/profile', async (req, res) => {
    if (!req.session.customerId) {
        return res.status(401).json({ message: 'Not authenticated' });
    }

    const customer = await Customers.findByPk(req.session.customerId);
    if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
    }

    res.json({
        email: customer.email,
        first_name: customer.first_name,
        last_name: customer.last_name,
        phone: customer.phone,
        address: customer.address
    });
});

module.exports = router;
