const express=require("express")
const {connection}=require("./configs/db")
const { userRouter } = require("./routes/userRoutes");
const cors=require("cors");
require("dotenv").config();
const app=express()
app.use(express.json())
app.use(cors());
app.use('/users',userRouter);
app.get("/",(req,res)=>{
    res.send("TrendyMart")
})
app.listen(process.env.PORT,async ()=>{
   try{
       await connection
       console.log("connected to db")
    }catch(err){
       console.log(err)
    }
     console.log(`Running at ${process.env.PORT}`)
})
