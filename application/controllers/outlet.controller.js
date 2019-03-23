const customValidator = require('../common/customvalidator');
const customHelper = require('../common/customhelper');
const httpStatus = require('http-status');
const outletRepository = require('../repositories/outlet.repository');
const constants = require('../common/constants');

module.exports.find = async (req, res, next) => {
    try {
    let rules = {
        'address': customValidator.address,
    };
    const validatedData = await customValidator.validate(req,rules)
    const response = await outletRepository.find(validatedData);
        customHelper.sendJsonResponse(res, httpStatus.OK, response, constants.success_message.outlet_found);
    } catch (err) {
        console.log(err);
        customHelper.sendJsonError(res, err);
    }
};
