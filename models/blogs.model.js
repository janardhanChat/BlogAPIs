const mongoose = require("mongoose")


const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    isApproved : {
        type : Boolean,
        default : false
        
    }
} , { timestamps : true})

const blog = mongoose.model("blog", blogSchema);
module.exports = blog;