const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// MONGOOSE TIME STAMP GOES HERE IF WE WANT IT, USEFUL

const education_schema = new Schema({
    school: {
        type: String,
        required: true
    },
    course_of_study: {
        type: String,
        required: true
    },
    finished: {
        boolean: "",
    },
    additional_info: {
        type: String
    }
})
const Education = mongoose.model('user', education_schema);
module.exports = Education;