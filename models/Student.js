/* Student.js */

var mongoose = require('mongoose');
mongoose.set('debug', true);

// Define a schema
var Schema = mongoose.Schema;

// Creating a new student
var StudentSchema = new Schema({

    first_name: String,
    
    last_name: String,

    highschool: String,

    gpa: {
        type: Number,
        min: 0,
        max: 4
    },

    SAT: {
        type: Number,
        min: 0,
        max: 1800
    },

    ACT: {
        type: Number,
        min: 0,
        max: 36
    },

    gender: String,

    internships: [String],

    address: String,

    age: Number,

    sports: [String],

    hobbies: [String],

    interests: [String],
    
    /* TODO: add resume (what type?) */

});

module.exports = mongoose.model('Student', StudentSchema);