const express = require('express');

const router= express.Router();
const Model = require('../models/userModel');

router.get('/home',(req,res)=>{
    res.send('response from user');
})
router.post('/add',(req,res)=>{
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json();
    });
})

module.exports= router;