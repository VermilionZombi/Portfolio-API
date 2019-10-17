const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// MONGOOSE TIME STAMP GOES HERE IF WE WANT IT, USEFUL

const skills_schema = new Schema({
    rank: {
        type: Number, default: 0,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String
    }
})
const User = mongoose.model('user', skills_schema);
module.exports = User;