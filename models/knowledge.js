const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// MONGOOSE TIME STAMP GOES HERE IF WE WANT IT, USEFUL

const knowledge_schema = new Schema({
    term: {
        type: String,
        required: true
    },
    definition: {
        type: String,
        required: true
    },
    tags: {
        type: String,
        required: true
    },
})
const User = mongoose.model('user', knowledge_schema);
module.exports = User;