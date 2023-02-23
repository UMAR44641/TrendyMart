const express=require("express");
const {Usermodel}=require("../model/Usermodel")
const userRouter=express.Router();
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
require("dotenv").config();
userRouter.post("/register",async(req,res)=>{
    const {name,password,age,email,gender,city,mobile}=req.body;
    let temp=await Usermodel.find({email});
    if(temp.length>0){ 
        res.send({"message":"User already exists, please login"});
    }else{
        try{
            bcrypt.hash(password, 5,async (err, hash) => {
                try{
                    const user=new Usermodel({name,password:hash,age,email,gender,city,mobile});
                    await user.save();
                    res.send({"message":"Registered successfully"});
                }
                catch(err){
                    res.send({"message":err.message})
                }
            }); 
        }catch(err){
           
            res.end({"message":err})
        }
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await Usermodel.find({email})
        if(user.length>0){
            bcrypt.compare(password, user[0].password, (err, result) => {
                if(result){
                 let token=jwt.sign({userID:user[0]._id},process.env.tokenKEY)
                
                 res.send({"message":'login successfull',"token":token,"user_details":user})
                }else{                   
                    res.send({"message":"wrong password"});
                }
             });
        }else{         
            res.send({"message":"Incorrect email"})
        }
    }catch(err){     
       res.send({"message":err})
    }
})

module.exports={
    userRouter
}
