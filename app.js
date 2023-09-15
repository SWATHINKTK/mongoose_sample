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

const userroute = require("./routres/userRouter");
app.use('/',userroute)

app.listen(5000,() => {
    console.log(`server is runnig at http://127.0.0.1:5000`);
})