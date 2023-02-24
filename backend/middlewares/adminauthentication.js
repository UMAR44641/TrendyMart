const jwt=require("jsonwebtoken");
require("dotenv").config();

const adminauthenticate=(req,res,next)=>{
    const token=req.headers.authorization;
    if(token){
        jwt.verify(token,process.env.tokenKEYadmin,(err,decoded)=>{
            if(decoded){
                req.body.admin=decoded.adminID;
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
    adminauthenticate
}