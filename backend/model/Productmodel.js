const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    url:{type:String,required:true},
    title:{type:String,required:true},
    desc:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    cutprice:{type:Number,required:true},
    id:Number,
    stock:{type:Number,required:true}
    },{
        versionKey:false
    })
    const Productmodel=mongoose.model("product",productSchema)
    module.exports={
        Productmodel
    }