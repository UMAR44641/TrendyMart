const express=require("express");
const {Productmodel}=require("../model/Productmodel");
const {adminauthenticate}=require("../middlewares/adminauthentication")
const productRouter=express.Router();
require("dotenv").config();


productRouter.post("/upload",adminauthenticate,async(req,res)=>{
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
    const query={};
    const {category,minprice=1,maxprice=Infinity,sort,search}=req.query
         if(search){
           query.desc={$regex:search,$options:"$i"};
         }
          if(category){
            query.category=category;
         }
         query.price={$gte:minprice,$lte:maxprice};
          if(sort=="asc"){
              let temp=await Productmodel.find(query).sort({price:1})
              res.send(temp)
          }else if(sort=="desc"){
            let temp=await Productmodel.find(query).sort({price:-1})
            res.send(temp)
          }else{
              try{
                  const products=await Productmodel.find(query);
                  res.send(products)
              }
              catch(err){
                  console.log(err)
                  res.send({"message":err})
              }
          }
    
})

productRouter.get("/:id",async(req,res)=>{
    const productID=req.params.id;
    try{
        const product=await Productmodel.findOne({_id:productID});
        res.send(product)
    }
    catch(err){
        console.log(err)
        res.send({"message":err})
    }
})

productRouter.delete("/delete/:id",adminauthenticate,async(req,res)=>{
    const productID=req.params.id;
    try{
        await Productmodel.findByIdAndDelete({_id:productID})
        res.send({"message":"The product has been deleted successfully"})   
    }catch(err){
       res.send({"message":err})
    }    
})


productRouter.patch("/update/:id",adminauthenticate,async(req,res)=>{
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


// productRouter.post("/uploadproducts",async(req,res)=>{
//         // const {url,title,desc,category,price,cutprice,id,stock,save}=req.body
//         // let temp=await Productmodel.find({id});
//         // if(temp.length>0){ 
//             // res.send({"message":"product already exists"});
//         // }else{
//             function check(str){
//                 let s="";
//                 for(let j=0;j<str.length;j++){
//                     if(str[j]!==','){
//                         s+=str[j]
//                     }
//                 }
//                 return +s
//             }
//             let temp=[]
//             for(let i=0;i<products.length;i++){
//                 products[i].price=check(products[i].price)
//                 products[i].cutprice=check(products[i].cutprice)
//                 products[i]["stock"]=100

//                    temp.push(products[i]);
//             }
//             console.log(products)
//             console.log(products.length)
//             try{
//                Productmodel.insertMany(products)
//                .then(function(){
//                 console.log("Data inserted")
//                 res.write({"message":"Product uploaded"});
//             }).catch(function(error){
//                 console.log(error)
//                 // res.send({"message":"Product uploaded"});
//             });
//                 res.send({"message":"Product uploaded"});
//             }catch(err){ 
//             res.send({"message":err})
//             }
//         // }
//         res.end()
//     })

   


  