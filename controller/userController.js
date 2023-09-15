const userdetails = require("../models/userModel");

const insertUser = async(req,res)=>{
    try {
        console.log("insert")
        console.log(req.body)
        const User = new userdetails({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
        })
        console.log(User)
        console.log('Before saving user');
        const data = await User.save();
        console.log('After saving user');

        
        
    } catch (error) {
        res.send(error.msg)
    }
}

module.exports = {insertUser}