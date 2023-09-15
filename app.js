const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/User',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connection established")
})
.catch((err) => {
    console.log("connection rejected",err.message)
})


const express = require('express');
const app = express();

const user = require("./controller/userController")

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));



app.get('/login',(req,res) => {
    res.render('main',{title:"login"});
})

app.post('/login',user.insertUser);




app.listen(5000,() => {
    console.log(`server is runnig at http://127.0.0.1:5000`);
})