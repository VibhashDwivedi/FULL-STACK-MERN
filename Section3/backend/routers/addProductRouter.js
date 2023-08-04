const express = require('express');
const router = express.Router();
const Model = require('../models/addProductModel');

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

    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json();
    });
});
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

router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json();
    });
})

router.put('/update/:id',(req,res)=>{
Model.findByIdAndUpdate(req.params.id, req.body,{new:true})
.then((result) => {
    res.json(result);
}).catch((err) => {
    console.log(err);
    res.status(500).json();
});
})



module.exports= router;