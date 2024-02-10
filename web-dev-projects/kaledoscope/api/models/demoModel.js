const mongoose = require('mongoose');

const demoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    classType: {
        type: String,
        enum: ['guitar', 'drum', 'vocal', 'violin', 'music production', 'keyboard'],
        required: true
    },
}, { timestamps: true });

const Demo = mongoose.model('Demo', demoSchema);

module.exports = Demo;
