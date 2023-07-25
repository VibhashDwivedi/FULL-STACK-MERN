//import express
const express = require('express');


//initialize express app
const app = express();
const port = 5000;

//import routers
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');

//middlewares
app.use('/user', userRouter);
app.use('/product', productRouter);

//creating routes
app.get('/',(req,res)=>{
    res.send('response from express server');
})
app.get('/home',(req,res)=>{
    res.send('response from home');
})
app.get('/add',(req,res)=>{
    res.send('response from add');
})



//starting the server
app.listen(port, ()=>{
    console.log(' express server started successfully');
});
