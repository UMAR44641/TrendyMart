const jwt=require("jsonwebtoken");
require("dotenv").config();

const userauthenticate=(req,res,next)=>{
    const token=req.headers.authorization;
    if(token){
        jwt.verify(token,process.env.tokenKEY,(err,decoded)=>{
            if(decoded){
                req.body.user=decoded.userID;
                next();
            }else{
                res.send({"message":"please login"});
            }
        })
    }else{
        res.send({"message":"please login"});
    }
}

module.exports={
    userauthenticate
}