const db = require("../models");
const { Customers } = db;

async function defineCurrentCustomer(req, res, next) {
try {
    if (req.session.customer_id) {
    let user = await Customers.findOne({
        where: {
        customer_id: req.session.customer_id,
        },
    });
    req.currentCustomer = user;
    } else {
    req.currentCustomer = null;
    }
} catch (e) {
    req.currentCustomer = null;
    console.error(e);
}
next();
}
module.exports = defineCurrentCustomer;
