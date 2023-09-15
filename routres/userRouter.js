const express = require('express');
const userroute = express();

const user = require("../controller/userController");

userroute.set('view engine','ejs');
userroute.use(express.urlencoded({extended:true}));



userroute.get('/login',(req,res) => {
    res.render('main',{title:"login"});
})

userroute.post('/login',user.insertUser);


module.exports = userroute;