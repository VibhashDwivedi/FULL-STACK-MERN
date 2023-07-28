const express = require('express');
const router = express.Router();
const Model = require('../models/userModel');

router.post('/add',(req,res)=>{
    console.log(req.body);
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
res.send('response by getall')
});
router.get('/getbyid',(req,res)=>{
res.send('response by get id')
});



module.exports= router;