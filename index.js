

const express =require("express");
const mongoose=require("mongoose");
const app = express();
const port=6000;
const url='mongodb://localhost:27017/testdb';
const serviceModel=require('./Model/services');

mongoose.connect(url);

app.get('/all',(req,res)=>{
    console.log('inside get');
    
    serviceModel.find({}).then((data)=>{
        res.json(data);
    }).catch((err)=>{
        console.log(err);
        
    })
})
app.listen(6001,()=>{
console.log("Server Started at port 6000");
})