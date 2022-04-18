const { Validator } = require('node-input-validator');

addCustomerValidation = (req, res, next) => {
    const validate = new Validator(req.body, {
      email      : "required|string",
      firstName  : "required|string|minLength:2|maxLength:25",
      lastName   : "required|string|minLength:2|maxLength:25",
      password   : "required|string|minLength:6|maxLength:25",
      mobile     : "required|string|minLength:10|maxLength:10"
    });
  
    validate.check().then((matched) => {
      if (!matched) {
        let key = Object.keys(validate.errors)[0]
        return res.json({
            status : 400,
            error : validate.errors[key].message
        })
      } else {
        next()
      }
    }).catch((err) => {
        return res.json({
            status : 400,
            error : err
        })
    })
};

loginValidation = (req, res, next) => {
    const validate = new Validator(req.body, {
      email      : "required|string",
      password   : "required|string|minLength:6|maxLength:25"
    });
  
    validate.check().then((matched) => {
      if (!matched) {
        let key = Object.keys(validate.errors)[0]
        return res.json({
            status : 400,
            error : validate.errors[key].message
        })
      } else {
        next()
      }
    }).catch((err) => {
        return res.json({
            status : 400,
            error : err
        })
    })
};

  module.exports = {
    addCustomerValidation : addCustomerValidation,
    loginValidation       : loginValidation
  }