const mongoose=require('mongoose');

const serviceSchema=new mongoose.Schema({
    service_id:Number,
    image:String,
    title:String,
    description:String
});

 const serviceModel=mongoose.model('services',serviceSchema);
module.exports=serviceModel;
