// Business logic
// Database etc 

const Customer = require("../models/customer");
const JWT = require("jsonwebtoken");

module.exports = {
    
    addCustomer: async (body) => {
        console.log(body)
        return new Promise(async(resolve, reject) => {
            const customerObj = {
                email     : body.email,
                firstName : body.firstName,
                lastName  : body.lastName,
                password  : body.password,
                mobFlag   : body.mobFlag,
                mobile    : body.mobile
            }

            await Customer.findOne({$or : [{email : body.email.toLowerCase()}, {mobile: Number(body.mobile)}]})
                .then(async custmerD => {
                    if(custmerD){
                        return reject("Email or Mobile Already Exist")
                    }
                    return await Customer.create(customerObj)
                })
                .then(data => {
                    return resolve(data)
                })
                .catch(err => {
                    return reject(err)
                })

        })
    },

    login: async (body) => {
        return new Promise(async(resolve, reject) => {
            const customerObj = {
                email     : body.email,
                password  : body.password
            }

            await Customer.findOne({email : customerObj.email} , {password : 1, mobile : 1, activeStatus : 1})
                .then(async custmerD => {
                    if(!custmerD){
                        return reject("User Not Exist")
                    }
                    if(!custmerD.activeStatus){
                        return reject("User Not Active")
                    }
                    if(custmerD.password !== body.password){
                        return reject("Incorrect Password")
                    }

                    const token = JWT.sign({
                        _id          : custmerD._id,
                        email        : body.email,
                        mobile       : custmerD.mobile,
                        activeStatus : custmerD.activeStatus
                    }, process.env.JWT_SECRET)

                    return resolve(token)
                })

                .catch(err => {
                    return reject(err)
                })

        })
    },

    getCustomer: async (params) => {
        return new Promise(async(resolve, reject) => {
            const _id = params.id

            await Customer.findOne({_id : id})
                .then(async custmerD => {
                    if(!custmerD){
                        return reject("User Not Exist")
                    }
                    return resolve(custmerD)
                })
                .catch(err => {
                    return reject(err)
                })
        })
    },

    updateCustomer: async (params, body) => {
        return new Promise(async(resolve, reject) => {
            const _id = params.id;

            const customerObj = {
                email     : body.email,
                firstName : body.firstName,
                lastName  : body.lastName,
                password  : body.password,
                mobFlag   : body.mobFlag,
                mobile    : body.mobile
            }

            await Customer.findOne({$or : [{email : body.email.toLowerCase()}, {mobile: Number(body.mobile)}]})
                .then(async custmerD => {
                    if(custmerD){
                        if(custmerD._id !== _id){
                            return reject("Email or Mobile is Already taken")
                        }
                    }
                    return await Customer.updateOne({_id : _id} , {$set : customerObj})
                })
                .then(data => {
                    return resolve(data)
                })
                .catch(err => {
                    return reject(err)
                })

        })
    },

    deleteCustomer: async (params, body) => {
        return new Promise(async(resolve, reject) => {
            const _id = params.id;

            await Customer.findOne({_id : _id})
                .then(async custmerD => {
                    if(!custmerD){
                        return reject("User Not Exist")
                    }
                    return await Customer.updateOne({_id : _id} , {$set : {activeStatus : false}})
                })
                .then(data => {
                    return resolve(data)
                })
                .catch(err => {
                    return reject(err)
                })

        })
    },


}