const express=require("express");
const {Productmodel}=require("../model/Productmodel")
const productRouter=express.Router();
require("dotenv").config();


productRouter.post("/upload",async(req,res)=>{
        try{
            let temp=await Productmodel.findOne().sort({id:-1}).limit(1);
            console.log({...req.body,id:+temp.id+1})
            const product=new Productmodel({...req.body,id:+temp.id+1});
            await product.save();
            res.send({"message":"Product uploaded successfully"});
        }catch(err){
            res.send({"message":err})
            console.log(err)
        }
})

productRouter.get("/",async(req,res)=>{
    try{
        const products=await Productmodel.find();
        res.send(products)
    }
    catch(err){
        console.log(err)
        res.send({"message":err})
    }
})


productRouter.delete("/delete/:id",async(req,res)=>{
    const postID=req.params.id;
    try{
        await Productmodel.findByIdAndDelete({_id:postID})
        res.send({"message":"The product has been deleted successfully"})   
    }catch(err){
       res.send({"message":err})
    }    
})


productRouter.patch("/update/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body;
    try{
        await Productmodel.findByIdAndUpdate({_id:ID},payload)
        res.send({"message":"product details updated successfully"})
    }catch(err){
       res.send({"message":err})
    }
})

module.exports={
    productRouter
}


// productRouter.post("/upload",async(req,res)=>{
    //     // const {url,title,desc,category,price,cutprice,id,stock,save}=req.body
    //     // let temp=await Productmodel.find({id});
    //     // if(temp.length>0){ 
    //         // res.send({"message":"product already exists"});
    //     // }else{
    //         try{
    //            Productmodel.insertMany(req.body)
    //            .then(function(){
    //             console.log("Data inserted")
    //             res.write({"message":"Product uploaded"});
    //         }).catch(function(error){
    //             console.log(error)
    //             // res.send({"message":"Product uploaded"});
    //         });
    //             res.send({"message":"Product uploaded"});
    //         }catch(err){ 
    //         res.send({"message":err})
    //         }
    //     // }
    //     res.end()
    // })


  