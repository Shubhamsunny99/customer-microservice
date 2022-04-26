const express = require("express");
const customerController = require("../controllers/cutomer.controller");
const validator = require('../config/validator');

const customerRoutes = express.Router();

// /customer is prefix from app/index.js 
customerRoutes.post('/add-customer', validator.addCustomerValidation, customerController.addCustomers)

customerRoutes.post('/login', validator.loginValidation, customerController.login)

customerRoutes.get('/get-customer/:id', customerController.getCustomers)

customerRoutes.put('/update-customer/:id', validator.addCustomerValidation, customerController.updateCustomers)

customerRoutes.put('/deactivate-customer/:id', customerController.deleteCustomers)


module.exports = customerRoutes

// aZynwk4ecjXuUxBB
