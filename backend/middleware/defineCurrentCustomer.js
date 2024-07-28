const db = require("../models")
const { Customers } = db
async function defineCurrentCustomer(req, res, next) {
    try {
        let user = await Customers.findOne({
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