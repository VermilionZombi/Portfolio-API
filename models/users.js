const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// MONGOOSE TIME STAMP GOES HERE IF WE WANT IT, USEFUL

// This creates a new Schema
const user_schema = new Schema({
    email: {
        type: String,
        required: true,
        // validate: [validateEmail, 'Please fill a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    // New to me but the above line of code requires email symbols and format.
    },
    phone_number: {
        type: String,
        required: false
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    
})

const User = mongoose.model('user', user_schema);
module.exports = User;