const db = require("../models")
const { Customers } = db
async function defineCurrentCustomer(req, res, next) {
    try {
        if (req.session.customer_id) {}
        let user = await User.findOne({
            where: {
                userId: req.session.userId
            }
        })
        req.currentCustomer = user
        } catch (e) {
            req.currentCustomer = null
            console.error(e)
    }
    next()
}
module.exports = defineCurrentCustomer