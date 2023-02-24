const express=require("express")
const {connection}=require("./configs/db")
const { userRouter } = require("./routes/userRoutes");
const cors=require("cors");
const { productRouter } = require("./routes/productRoutes");
const {adminRouter} = require('./routes/adminRoutes')
const bodyParser=require("body-parser");
const { adminauthenticate } = require("./middlewares/adminauthentication");
require("dotenv").config();
const app=express()
app.use(express.json({limit: '25mb'}))
app.use(bodyParser({limit: '1000mb'}));
app.use(bodyParser.urlencoded({limit: '1000mb', extended: true}));
app.use(cors());
app.use('/users',userRouter);
app.use('/products',productRouter);
app.use('/admins',adminRouter);
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
