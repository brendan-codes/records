const mongoose = require('mongoose');

let recordSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: [true, "Records must have a Subject."],
        minlength: [2, "Subjects must be 2 or more characters."]
    },
    desc: {
        type: String,
    },
    location: {
        type: String,
        required: [true, "Records must have a location"],
        minlength: [2, "Locations must be 2 or more characters."]
    }
}, {timestamps: true});

mongoose.model('Record', recordSchema);