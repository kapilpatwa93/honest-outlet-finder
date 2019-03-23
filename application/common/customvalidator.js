const expressValidator = require('express-validator');
const constants = require("./constants");
const httpStatus = require('http-status');
const customValidator = {};

customValidator.address = {
    notEmpty: {
        errorMessage: 'Please provide the address'
    },
};
customValidator.validate = (req, rules) => {
    return new Promise((resolve,reject)=>{
        req.check(rules);
        req.getValidationResult().then(result => {
            if (!result.isEmpty()) {
                let errorObj = {
                    statusCode : httpStatus.BAD_REQUEST,
                    message :   result.mapped(),
                    code : constants.error_code.validation_error,
                };
                reject(errorObj);
                return;
            } else {
                resolve(req);
                return;
            }
        });
    })
};

customValidator.middlewareObj = {
    customValidators: {
        isArray : ((values)=>{
            return Array.isArray(values) && values.length > 0;
        }),
    },
    errorFormatter: function (param, msg, value, location) {
        return {
            msg: msg,
            value: value
        };
    },
    customSanitizers : {
        toSlug : (value =>{
            return value.toLowerCase().trim();
        }),
        toSlugArray : (valArr=>{
            return valArr.map((val)=>{
                return val.toLowerCase().trim();
            })
        }),
        toPrice : (value=>{
            return parseFloat(value).toFixed(2);
        })
    }
};
module.exports = customValidator;

