const express = require('express');
const app = express();
//path

//root
app.get('/',(req,res)=>{
    res.sendFile("./home/views/home.html",{root:__dirname})
})


//port
const port = 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
//address
