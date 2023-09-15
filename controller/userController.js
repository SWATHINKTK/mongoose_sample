const userdetails = require("../models/userModel");

const insertUser = async(req,res)=>{
    try {
        const User = new userdetails({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:req.body.password,
        })
        const data = await User.save();
        console.log('Registration Sucessful ....');
        res.send("<h1>Registration Sucessfull ....</h1>"+data)

        
        
    } catch (error) {
        res.send(error.msg);
        console.log('Registration Faild !');
    }
}

module.exports = {insertUser}