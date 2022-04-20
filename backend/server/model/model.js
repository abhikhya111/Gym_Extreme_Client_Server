const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    tagId : {
        type : String,
    },
    name : {
        type: String,
    },
    title : {
        type: String,
    },
    metaTitle : {
        type: String,
    },
    description : {
        type: String,
    },
    metaDescription : {
        type: String,
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    metaTitle : String,
    status : String
})

const Tagdb = mongoose.model('tagdb', schema);

module.exports = Tagdb;