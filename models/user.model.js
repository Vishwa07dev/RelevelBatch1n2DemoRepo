const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        minLength: 10
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        required: true,
        default: "ASPIRANT"
    },
    applied_jobs: {
        type: [mongoose.SchemaTypes.ObjectId] // job ids applied by user 
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

module.exports = mongoose.model("User", UserSchema);





