const mongoose = require('mongoose');

let candidateSchema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    address: {
        type: String,
    },
    number: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.model('Candidate', candidateSchema);
