const express = require('express');
const app = express();
const mongoose = require('mongoose');
//path
//root
app.get('/',(req,res)=>{
    res.sendFile("./home/views/home.html",{root:__dirname})
})
//port
const port = 3000;
//connect db
mongoose.connect('mongodb+srv://skjccm:Pa$$w0rd@nodejfirst.2hkfz4v.mongodb.net/all-data?retryWrites=true&w=majority&appName=nodejFirst').then(()=>{
app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
}).catch((e)=>{
console.log(e) 
});
