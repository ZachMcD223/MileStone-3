//Dependencies
const { Sequelize } = require('sequelize');
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

// CONFIGURATION / MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// LISTEN
app.listen(4005, () => {
    console.log('Server is running on port 4005');
})

// SEQUELIZE CONNECTION
// const sequelize = new Sequelize(process.env.PG_URI)

// try {
//     sequelize.authenticate() 
//     console.log(`Connected with Sequelize at ${process.env.PG_URI}`) 
// } catch(err) {
//     console.log(`Unable to connect to PG: ${err}`) 
// }
