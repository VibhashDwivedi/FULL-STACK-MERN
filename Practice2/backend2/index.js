//import express
const express= require('express');

//initalize express app
const app= express();
const port=5001;

//import routers
const userRouter = require('./routers/userRouter');

//middleware to convert json data to javascript object
app.use(express.json());

//middleware
app.use('/user',userRouter)

//creating routes
app.get('/',(req,res)=>{
    res.send('Welcome!')
})
app.get('/home',(req,res)=>{
    res.send('response from home new');
})
app.get('/add',(req,res)=>{
    res.send('response from add');
})

//start server
app.listen(port,()=>{
    console.log(`server started on port ${port} successfully once again`);
