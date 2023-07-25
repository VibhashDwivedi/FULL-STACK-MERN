const express = require('express');
const router = express.Router();

router.get('/add',(req,res)=>{
res.send('response from user add')
});
router.get('/getall',(req,res)=>{
res.send('response by getall')
});
router.get('/getbyid',(req,res)=>{
res.send('response by get id')
});



module.exports= router;