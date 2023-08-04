//import express
const express = require('express');
const cors = require('cors');


//initialize express app
const app = express();
const port = 5000;

//import routers
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
const contactRouter = require('./routers/contactRouter');
const addProductRouter = require('./routers/addProductRouter');
const utilRouter = require('./routers/util');
const req = require('express/lib/request');

//middleware to convert json data to javascript object
app.use(cors({
    origin: ['http://localhost:3000']
}));
app.use(express.json());


//middlewares
app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/contact', contactRouter);
app.use('/addproduct', addProductRouter);
app.use('/util', utilRouter);

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
