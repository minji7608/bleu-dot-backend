/* Mentor.js */

var mongoose = require('mongoose');
mongoose.set('debug', true);

// Define a schema
var Schema = mongoose.Schema;

// Creating a new mentor
var MentorSchema = new Schema({

    first_name: String,
    last_name: String,

    /* TODO: add birth date */

    highschool: String,

    applied_schools: [String], // TODO: add school schema type

    college: String, 

    major: String,

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

module.exports = mongoose.model('Mentor', MentorSchema);