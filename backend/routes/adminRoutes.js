const express=require("express");
const {Adminmodel}=require("../model/Adminmodel")
const adminRouter=express.Router();
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
require("dotenv").config();
adminRouter.post("/register",async(req,res)=>{
    const {name,password,age,email,gender,city,mobile,secretkey}=req.body;
    if(secretkey==process.env.secretkeyadmin){
        let temp=await Adminmodel.find({email});
            if(temp.length>0){ 
                res.send({"message":"You already have an account, please login"});
            }else{
                try{
                    bcrypt.hash(password, 5,async (err, hash) => {
                        try{
                                const admin=new Adminmodel({name,password:hash,age,email,gender,city,mobile,secretkey});
                                await admin.save();
                                res.send({"message":"Admin Registered successfully"});
                        }
                        catch(err){
                            res.send({"message":err.message})
                        }
                    }); 
                }catch(err){
           
                    res.end({"message":err})
                }
             }
    }else{
        res.send({"message":"wrong key"})
    }
})

adminRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try{
        const admin=await Adminmodel.find({email})
        if(admin.length>0){
            bcrypt.compare(password, admin[0].password, (err, result) => {
                if(result){
                 let token=jwt.sign({adminID:admin[0]._id},process.env.tokenKEYadmin)
                 res.send({"message":'Successfully logged in as admin',"token":token,"admin_details":admin})
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
    adminRouter
}
