const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add',(req,res)=>{
    console.log(req.body);
    res.send('response from product add')
    //saving the data to mongodb
    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json();
    });
});
router.get('/getall',(req,res)=>{

    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json();
    });
});

//colon denotes a url parameter
router.get('/getbyid/:id',(req,res)=>{
console.log(req.params.id);
Model.findById(req.params.id)
.then((result) => {
    res.json(result);
}).catch((err) => {
    console.log(err);
    res.status(500).json();
});
});

router.get('/getbyemail/:email',(req,res)=>{
    Model.find({email: req.params.email})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json();
    });
});


module.exports= router;