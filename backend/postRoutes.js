const express=require("express");
const { Postmodel } = require("../model/POSTmodel");
const postRouter=express.Router();
const device = require('express-device');
var useragent = require('express-useragent');
postRouter.post("/upload",async(req,res)=>{
    console.log(req)
    const post=new Postmodel({...req.body,device:useragent.isMobile?"mobile":"desktop"});
    await post.save();
    res.send({"msg":"posted successfully"})
})

postRouter.get("/",async(req,res)=>{
    const query=req.query;
    try{
        const userID_in_req=req.body.user;
        const posts=await Postmodel.find({...query,user:userID_in_req});
        res.send(posts)
    }
    catch(err){
        console.log(err)
    }
})

postRouter.get("/top",async(req,res)=>{
    try{
        const userID_in_req=req.body.user;
        const posts=await Postmodel.find({user:userID_in_req}).sort({no_of_comments:-1}).limit(1);
        res.send(posts)
    }
    catch(err){
        console.log(err)
    }
})

postRouter.delete("/delete/:id",async(req,res)=>{
    const postID=req.params.id;
    const post=await Postmodel.findOne({_id:postID});
    const userID_in_post=post.user;
    const userID_in_req=req.body.user;
    try{
        if(userID_in_post!=userID_in_req){
            res.send({"msg":"you are not authorized"});
        }else{
            await Postmodel.findByIdAndDelete({_id:postID})
            res.send({"msg":"post has been deleted successfully"})   
        }
    }catch(err){
       res.send({"msg":err})
    }    
})


postRouter.patch("/update/:id",async(req,res)=>{
    const ID=req.params.id;
    const payload=req.body;
    const post=await Postmodel.findOne({_id:ID});
    const userID_in_post=post.user;
    const userID_in_req=req.body.user;
    try{
        if(userID_in_post!=userID_in_req){
            res.send({"msg":"you are not authorized"});
        }else{
            await Postmodel.findByIdAndUpdate({_id:ID},payload)
            res.setHeader('Content-Type', 'text/html');
            res.send({"msg":"post updated successfully"})
        }
    }catch(err){
       res.send({"msg":err})
    }
})
module.exports={
    postRouter
}
