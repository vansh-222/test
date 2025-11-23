const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    title: {
        type : String ,
        required : true,
        minlength: [5, "length must be more then 5 letters"]
    },
    author:{
        type : String,
    },

    email: {
         type : String
    },

    thumbnail: {
        type: String,
        default: null
    },

    dateTime:{
        type: Date,
        default : Date.now

    }
})

const Post = mongoose.model("post" , postSchema )
module.exports = Post;