const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: {
        type: String,
        unique:true,
        required:true
    },
    elements:{
        type:[String]
    }
})
const Post = mongoose.model("Post", postSchema)
module.exports = Post