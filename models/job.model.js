const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    posted_by_company: {
        type: mongoose.SchemaTypes.ObjectId // job belongs to which company
    },
    applicants: {
        type: [mongoose.SchemaTypes.ObjectId] // user ids of applicants
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now(),
        immutable: true
    },
    updatedAt: {
        type: Date,
    }
});

module.exports = mongoose.model("Job", JobSchema);





