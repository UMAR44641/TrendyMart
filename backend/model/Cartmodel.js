const mongoose=require("mongoose");
const cartSchema=mongoose.Schema({
    url:{type:String,required:true},
    title:{type:String,required:true},
    desc:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    cutprice:{type:Number,required:true},
    id:Number,
    quantity:{type:Number,required:true},
    user:String
    },{
        versionKey:false
    })
    const Cartmodel=mongoose.model("cartProduct",cartSchema)
    module.exports={
        Cartmodel
    }