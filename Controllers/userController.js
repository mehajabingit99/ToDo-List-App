const User = require('../Models/userModel')//userModel
const dotenv = require('dotenv').config()

const user = async(req,res)=>{
    const user = req.body;
    const newUser = await User.create(user);

    newUser ? res.status(201).json({msg: "Success", data: newUser}) 
            : res.status(500).json({msg: "Error", data: newUser})
}

//export
module.exports = user;