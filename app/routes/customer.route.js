const express = require("express");
const customerController = require("../controllers/cutomer.controller");


const customerRoutes = express.Router()

// /customer is prefix from app/index.js 
customerRoutes.post('/add-customer', customerController.addCustomers)

customerRoutes.post('/login', customerController.login)

customerRoutes.get('/get-customer/:id', customerController.getCustomers)

customerRoutes.put('/update-customer/:id', customerController.updateCustomers)

customerRoutes.put('/delete-customer/:id', customerController.deleteCustomers)


module.exports = customerRoutes

// aZynwk4ecjXuUxBB
