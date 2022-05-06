const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    jobs_posted: {
        type: [mongoose.SchemaTypes.ObjectId] // job ids
    },
    status: {
        type: String // verified | unverified
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

module.exports = mongoose.model("Company", CompanySchema);





