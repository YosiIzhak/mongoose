const express = require('express');
const router = express.Router();
const productControler = require('../controllers/products.controller');


router.get('/',(req,res)=>{
   productControler.getAll(req,res);
}).get('/:id',(req,res)=>{
    const id = req.params.id
    productControler.getId(req,res);
 }).patch('/:id',(req,res)=>{
    const id = req.params.id
    productControler.updateId(req,res);
 }).get('/:active',(req,res)=>{
    productControler.getActive(req,res);
 }).get('/:range',(req,res)=>{
    productControler.getPrice(req,res);
 }).post('/',(req,res)=>{
    productControler.create(req,res);
}).delete('/:id',(req,res)=>{
    productControler.deleteId(req,res);
})

module.exports = router;
