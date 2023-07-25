const express = require('express');
const router = express.Router();

router.get('/add',(req,res)=>{
res.send('response from product user add')
});
router.get('/getall',(req,res)=>{
res.send('response by product getall')
});
router.get('/getbyid',(req,res)=>{
res.send('response by product get id')
});



module.exports= router;