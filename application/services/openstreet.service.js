const axios = require('axios');
const commonConfig = require('../../config/common.config');

module.exports.getAddress = (address) => {
    const options = {
        params: {
            q: address,
            format: 'json'
        }
    };
    return axios.get(commonConfig.openstreet_url, options);
}
