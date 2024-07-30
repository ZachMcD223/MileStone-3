// Modules and Globals
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
<<<<<<< HEAD
const cookieSession = require('cookie-session');
const defineCurrentCustomer = require('./middleware/defineCurrentCustomer');
=======
const app = express();
const cookieSession = require('cookie-session');
const path = require('path');
const defineCurrentCustomer = require('./middleware/defineCurrentCustomer')
>>>>>>> d3014b49a12f3e6689192dada0813396cdd9f3c6

// Express Settings
const app = express();

app.use(cookieSession({
    name: 'session',
    keys: [process.env.SESSION_SECRET],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use(cors({
    origin: 'http://localhost:3001/',
    credentials: true
<<<<<<< HEAD
}));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(defineCurrentCustomer);
=======
}))
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(defineCurrentCustomer)
>>>>>>> d3014b49a12f3e6689192dada0813396cdd9f3c6

// Controllers & Routes
app.use('/orders', require('./controllers/orders'));
app.use('/customers', require('./controllers/customers'));
app.use('/authentication', require('./controllers/authentication'));

// Listen for Connections
<<<<<<< HEAD
app.listen(3000, () => {
    console.log(`Listening on {3000}`)
});
=======
app.listen(3001, () => {
    console.log(`Listening on {3001}`)
})
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
})
>>>>>>> d3014b49a12f3e6689192dada0813396cdd9f3c6
