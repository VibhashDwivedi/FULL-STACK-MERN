//import express
const express = require('express');


//initialize express app
const app = express();
const port = 5000;

//creating routes
app.get('/',(req,res)=>{
    res.send('response from express server');
})
app.get('/home',(req,res)=>{
    res.send('home');
})
app.get('/add',(req,res)=>{
    res.send('add');
})



//starting the server
app.listen(port, ()=>{
    console.log(' express server started successfully');
});
