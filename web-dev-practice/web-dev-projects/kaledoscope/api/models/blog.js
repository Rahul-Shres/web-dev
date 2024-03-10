// userModel.js
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: { // Update field name to 'imageUrl'
        type: String,
        required: true,
    },
}, { timestamps: true });

const Blog = mongoose.model('Blogs', blogSchema);

module.exports = Blog;