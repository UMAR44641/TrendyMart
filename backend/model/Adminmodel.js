const mongoose=require("mongoose");
const adminSchema=mongoose.Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    city:{type:String,required:true},
    name:{type:String,required:true},
    mobile:{type:Number,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
    secretkey:{type:String,required:true}
    },{
        versionKey:false
    })
    const Adminmodel=mongoose.model("admins",adminSchema)
    module.exports={
        Adminmodel
    }