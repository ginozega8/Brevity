const userCtrl = {}

const User = require("../models/User")

userCtrl.getUser = async(req, res) =>{
    const user = await User.find()
    res.json(user)
}

userCtrl.createUser = async(req, res) =>{
    const {title, description, author, imageurl, comments} = req.body
    const newUser = new User({
        title: title,
        description: description,
        author: author,
        imageurl: imageurl,
        comments: comments
    })
    await newUser.save();
    res.json({message: "message created!"})
}

userCtrl.findUser = async(req, res) =>{ //This one is for getting a single directory for an object
    const user = await User.findById(req.params.id)
    res.json(user)
}

userCtrl.deleteUser = async(req, res) =>{
    await User.findByIdAndDelete(req.params.id)
    res.json({message: "message deleted"})
}

userCtrl.updateUser = async(req, res) =>{
    const {title, description, author, imageurl, comments} = req.body;
    await User.findByIdAndUpdate(req.params.id, {
        title,
        description,
        author,
        imageurl,
        comments
    })
    res.json({message: "User Updated"})
}

module.exports = userCtrl;



