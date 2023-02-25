const express=require("express");
const { adminauthenticate } = require("../middlewares/adminauthentication");
const { Cartmodel } = require("../model/Cartmodel");
const { Ordermodel } = require("../model/Ordermodel");
const orderRouter=express.Router();
orderRouter.post("/upload/:user",async(req,res)=>{
    const user=req.params.user
    let temp=await Cartmodel.find({user:user});
        try{
            Ordermodel.insertMany(temp)
            .then(function(){
             res.send({"message":"Your order has been placed"});
         }).catch(function(error){
             res.send({"message":error});
         });
        }catch(err){
            res.send({"message":err})
        } 
        await Cartmodel.deleteMany({user:user});
})

orderRouter.get("/",adminauthenticate,async(req,res)=>{
    try{
        const orders=await Ordermodel.find();
        res.send(orders)
    }
    catch(err){
        res.send({"message":err})
    }
})


orderRouter.delete("/delete/:id",adminauthenticate,async(req,res)=>{
    const productID=req.params.id;
    try{
        await Ordermodel.findByIdAndDelete({_id:productID})
        res.send({"message":"The order has been deleted successfully"})   
    }catch(err){
       res.send({"message":err})
    }    
})




module.exports={
    orderRouter
}


// // 63f5a6dfa4133d0247ae86c0