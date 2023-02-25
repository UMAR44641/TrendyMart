const express=require("express");
const { Cartmodel } = require("../model/Cartmodel");
const cartRouter=express.Router();
cartRouter.post("/upload",async(req,res)=>{
    const {_id}=req.body
    let temp=await Cartmodel.find({_id:_id});
    if(temp.length>=1){
        const cartproduct=await Cartmodel.findOne({_id:_id});
        const userID_in_cartproduct=cartproduct.user;
        const userID_in_req=req.body.user;
        try{
            if(userID_in_cartproduct!=userID_in_req){
                res.send({"message":"No authorization to do this task"});
            }else{
                await Cartmodel.updateOne( { _id:_id  },{ $inc: { quantity: 1 }});
                res.send({"message":"quantity in cart increased by one"})
            }
        }catch(err){
           res.send({"message":err})
        }
    }else{
        const cartproduct=new Cartmodel({...req.body,quantity:1});
        await cartproduct.save();
        res.send({"message":"Product has been added to the cart"})
    }  
})

cartRouter.get("/",async(req,res)=>{
    try{
        const userID_in_req=req.body.user;
        const cartproducts=await Cartmodel.find({user:userID_in_req});
        res.send(cartproducts)
    }
    catch(err){
        res.send({"message":err})
    }
})



cartRouter.delete("/delete/:id",async(req,res)=>{
    const cartID=req.params.id;
    const cartproduct=await Cartmodel.findOne({_id:cartID});
    const userID_in_cartproduct=cartproduct.user;
    const userID_in_req=req.body.user;
    try{
        if(userID_in_cartproduct!=userID_in_req){
            res.send({"message":"No authorization to do this task"});
        }else{
            await Cartmodel.findByIdAndDelete({_id:cartID})
            res.send({"message":"item removed from cart"})   
        }
    }catch(err){
       res.send({"message":err})
    }    
})


cartRouter.patch("/increasequantity/:id",async(req,res)=>{
    const ID=req.params.id;
    const cartproduct=await Cartmodel.findOne({_id:ID});
    const userID_in_cartproduct=cartproduct.user;
    const userID_in_req=req.body.user;
    try{
        if(userID_in_cartproduct!=userID_in_req){
            res.send({"message":"No authorization to do this task"});
        }else{
            await Cartmodel.updateOne( { _id:ID  },{ $inc: { quantity: 1 }});
            res.send({"message":"quantity increased by one"})
        }
    }catch(err){
       res.send({"message":err})
    }
})

cartRouter.patch("/decreasequantity/:id",async(req,res)=>{
    const ID=req.params.id;
    const cartproduct=await Cartmodel.findOne({_id:ID});
    const userID_in_cartproduct=cartproduct.user;
    const userID_in_req=req.body.user;
    try{
        if(userID_in_cartproduct!=userID_in_req){
            res.send({"message":"No authorization to do this task"});
        }else{
            await Cartmodel.updateOne( { _id:ID  },{ $inc: { quantity: -1 }});
            res.send({"message":"quantity decreased by one"})
        }
    }catch(err){
       res.send({"message":err})
    }
})

module.exports={
    cartRouter
}
