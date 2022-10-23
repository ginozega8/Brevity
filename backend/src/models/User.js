const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    title: String,
    description: String,
    author: String,
    imageurl: String,
    comments: Array
},
{
    timestamps: true
})

module.exports = model("User", userSchema)