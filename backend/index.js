// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const cookieSession = require('cookie-session')
const defineCurrentCustomer = require('./middleware/defineCurrentCustomer')

// Express Settings
app.use(cookieSession({
    name: 'session',
    keys: [ process.env.SESSION_SECRET ],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
app.use(cors({
    origin: 'http://localhost:3001/',
    credentials: true
}))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(defineCurrentCustomer)

// Controllers & Routes

app.use(express.urlencoded({ extended: true }))

app.use('/orders', require('./controllers/orders'))
app.use('/customers', require('./controllers/customers'))
app.use('/authentication', require('./controllers/authentication'))

// Listen for Connections
app.listen(3000, () => {
    console.log(`Listening on {3000}`)
})
