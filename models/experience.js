const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// MONGOOSE TIME STAMP GOES HERE IF WE WANT IT, USEFUL

const experience_schema = new Schema({
    job_title: {
        type: String,
        required: true
    },
    company_name: {
        type: String,
        required: true
    },
    start_date: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: false
    },
    summary: {
        type: String,
        required: true
    },
})
const Experience = mongoose.model('user', experience_schema);
module.exports = Experience;