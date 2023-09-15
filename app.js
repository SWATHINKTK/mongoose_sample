const express = require('express');
const app = express();

app.set('view engine','ejs');



app.get('/',(req,res) => {
    res.render('main',{title:"login"});
})






app.listen(5000,() => {
    console.log(`server is runnig at http://127.0.0.1:5000`);
})