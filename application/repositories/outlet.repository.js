const constants = require('../common/constants');
const httpStatus = require('http-status');
const _ = require('lodash');
const kml = require('../services/kml.service');
const openStreet = require('../services/openstreet.service');

module.exports.find = async (data) => {
    try {

    const addresses = await openStreet.getAddress(data.query.address);
    const address = _.first(addresses.data);
    let errorObj;
    if (!address) {
        errorObj = {
            statusCode: httpStatus.BAD_REQUEST,
            message: constants.error_message.invalid_address,
            code: constants.error_code.invalid_address
        };
        return Promise.reject(errorObj);
    }
    const outlet = await kml.findNearestOutlet(address.lon, address.lat);
    console.log(outlet);
    if (!outlet) {
        errorObj = {
            statusCode: httpStatus.BAD_REQUEST,
            message: constants.error_message.outlet_not_fount,
            code: constants.error_code.outlet_not_fount
        };
        return Promise.reject(errorObj);
    }
    return {name: outlet.properties.name };
    } catch (e) {
        let errorObj = {
            statusCode: httpStatus.BAD_REQUEST,
            message: constants.error_message.general_error,
            code: constants.error_code.general_error
        };
        return Promise.reject(errorObj);
    }

};
