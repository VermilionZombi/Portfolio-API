const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// MONGOOSE TIME STAMP GOES HERE IF WE WANT IT, USEFUL

const reference_schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    letter: {
        type: String,
        required: false
    }
})

const Reference = mongoose.model('user', reference_schema);
module.exports = Reference;