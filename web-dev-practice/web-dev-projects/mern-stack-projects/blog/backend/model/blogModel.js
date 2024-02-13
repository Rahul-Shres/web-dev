const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type : String,
    },
    subtitle: {
        type: String,
    },
    description: {
        type: Date
    },
},{
    timestamps: true
})

const Blog = mongoose.model('blog', blogSchema);
//Alternative
//module.exports = mongoose.model('blog',blogSchema)
module.exports = Blog;