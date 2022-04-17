const customerService = require("../services/customer.service")


module.exports = {
    addCustomers : async (req, res) => {
        customerService.addCustomer(req.body)
            .then((data) => {
                return res.json({
                    status : 200,
                    data  : data
                })
            })
            .catch((err) => {
                return res.json({
                    status : 400,
                    error  : err
                })
            })
    },

    login : async (req, res) => {
        customerService.login(req.body)
            .then((data) => {
                return res.json({
                    status : 200,
                    data  : data
                })
            })
            .catch((err) => {
                return res.json({
                    status : 400,
                    error  : err
                })
            })
    },

    getCustomers : async (req, res) => {
        customerService.getCustomer(req.params)
            .then((data) => {
                return res.json({
                    status : 200,
                    data  : data
                })
            })
            .catch((err) => {
                return res.json({
                    status : 400,
                    error  : err
                })
            })
    },

    updateCustomers : async (req, res) => {
        customerService.updateCustomer(req.params, req.body)
            .then((data) => {
                return res.json({
                    status : 200,
                    data  : data
                })
            })
            .catch((err) => {
                return res.json({
                    status : 400,
                    error  : err
                })
            })
    },

    deleteCustomers : async (req, res) => {
        customerService.deleteCustomer(req.params)
            .then((data) => {
                return res.json({
                    status : 200,
                    data  : data
                })
            })
            .catch((err) => {
                return res.json({
                    status : 400,
                    error  : err
                })
            })
    }


}

// aZynwk4ecjXuUxBB
