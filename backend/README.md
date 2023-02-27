API's and endpoints



BaseURL = https://courageous-tuxedo-dog.cyclic.app

-----API ENDPOINTS-----

(i)  /users/register <-----> {method===>POST} <----->  (for registering new user) 
   ==request body==
   {
    email:String,
    password:String,
    city:String,
    name:String,
    mobile:Number,
    age:Number,
    gender:String
    }
   ==responses==
     1.res = {"message":"Registered successfully"}---->[successfull registration]
     2.res = {"message":error}----->[if any error happens]
     3.res = {"message":"User already exists, please login"}----->if user already exists


(ii)  /users/login <-----> {method===>POST} <----->(for logging into the account)
   ==request body==
   {
    email:String,
    password:String
    }
   ==responses==
     1.res = {"message":'login successfull',"token":token,"user_details":[{email,name...}]}---->[successfull login]
     2.res = {"message":error}----->[if any error happens]
     4.res = {"message":"wrong password"}----->[correct email & wrong password]
     5.res = {"message":"Incorrect email"}----->[correct password & wrong email]


(iii)  /users <-----> {method===>GET} <----->(to get all the users)


   ===request headers===
    <-->req.headers.authorization=token<-->[admin authorization]


   ==responses==
     1.res = [{},{},---]     <---->[array containg objects]
     2.res = {"message":error}----->[if any error happens]


(iv) /admins/register <-----> {method===>POST} <----->  (for registering new admin) 
   ==request body==
   {
    email:String,
    password:String,
    city:String,
    name:String,
    mobile:Number,
    age:Number,
    gender:String,
    secretkey:String
    }
   ==responses==
     1.res = {"message":"Admin Registered successfully"}---->[successfull registration]
     2.res = {"message":error}----->[if any error happens]
     3.res = {"message":"You already have an account, please login"}----->if user already exists

(v)  /admins/login <-----> {method===>POST} <----->(for logging into the admin account)
   ==request body==
   {
    email:String,
    password:String
    }
   ==responses==
     1.res = {"message":'Successfully logged in as admin',"token":token,"admin_details":[{email,name...}]}---->[successfull login]
     2.res = {"message":error}----->[if any error happens]
     4.res = {"message":"wrong password"}----->[correct email & wrong password]
     5.res = {"message":"Incorrect email"}----->[correct password & wrong email]

(vi)  /admins <-----> {method===>GET} <----->(to get all the admins)


   ===request headers===
    <-->req.headers.authorization=token<-->[admin authorization]


   ==responses==
     1.res = [{},{},---]     <---->[array containg objects]
     2.res = {"message":error}----->[if any error happens]

(vii)  /products/ <-----> {method===>GET} <----->(getting all the products)
    
    ===queries===
     search=String  [it will get the items which include the string passed in search query]
     category=mens || womens || kids [filters on the basis of category]
     sort=asc [ascending order on price basis]
     sort=desc [descending order on price basis]
     minprice=Number [gets products having price larger than minprice]
     maxprice=Number [gets products having price larger than maxprice]
     
     ===responses===
     1.res = [{},{},---]     <---->[array containg objects]
     2.res = {"message":error}      <----->[if any error happens]


(viii) /products/:id    <-----> {method===>GET} <----->(getting a single product)

    ===responses===
     1.res = {}     <---->[object containing tht product]
     2.res = {"message":error}      <----->[if any error happens]


(ix) /products/upload <------> {method===>POST}  <----> (for posting a product)
    
    ==request body==
   {
    url:String,
    title:String,
    desc:String,
    category:String,
    price:Number,
    cutprice:Number,
    id:Number,
    stock:Number
    }
    ===request headers===
    <-->req.headers.authorization=token<-->

    ===responses===
    1.res = {"message":"Product uploaded successfully"}
    2.res = {"message":error}


(x) /products/:id <------> {method===>PATCH}  <----> (for updating details of a product)
    
    ===request===
    <-->req.headers.authorization=token<-->
    <-->req.body=object containing updated details<-->

    ===responses===
    1.res = {"message":"product details updated successfully"}   
    2.res = {"message":error}


(xi) /products/:id <------> {method===>DELETE}  <----> (for deleting a particular product)
    
    ===request===
    <-->req.headers.authorization=token<-->

    ===responses===
    1.res = {"message":"The product has been deleted successfully"}
    2.res = {"message":error}


(xii) /cart   <------>  {method====>GET}   <----> (for getting all the products in the cart of the user who is logged in)

     ===request===
    <-->req.headers.authorization=token<-->

    ===responses===
    1.res = [{},{},---]     <---->[array containg objects]
    2.res = {"message":error}     <----->[if any error happens]



(xiii) /cart/upload   <------>  {method====>POST}   <----> (to add product to the cart)

     ===request===
    <-->req.headers.authorization=token<-->
      <--->req.body={all the product keys}

    ===responses===
    1.res = {"message":"quantity in cart increased by one"}    <---->[if product is already in the cart]
    2.res = {"message":"No authorization to do this task"}  
    3.res = {"message":"Product has been added to the cart"}  <-->[product added to the cart]
    4.res = {"message":error}     <----->[if any error happens]


(ix) /cart/delete/:id   <------>  {method====>DELETE}   <----> (to remove product from the cart)

     ===request===
    <-->req.headers.authorization=token<-->

    ===responses===
    1.res = {"message":"No authorization to do this task"}
    3.res = {"message":"item removed from cart"}  <-->[product removed from the cart]
    4.res = {"message":error}     <----->[if any error happens]




(x) /cart/increasequantity/:id   <------>  {method====>PATCH}   <----> (to increase quantity of the product)

     ===request===
    <-->req.headers.authorization=token<-->

    ===responses===
    1.res = {"message":"No authorization to do this task"}
    3.res = {"message":"quantity increased by one"}  <-->[to increase quantity]
    4.res = {"message":error}     <----->[if any error happens]



(xi) /cart/decreasequantity/:id   <------>  {method====>PATCH}   <----> (to decrease quantity of the product)

     ===request===
    <-->req.headers.authorization=token<-->

    ===responses===
    1.res = {"message":"No authorization to do this task"}
    3.res = {"message":"quantity decreased by one"}  <-->[to decrease quantity]
    4.res = {"message":error}     <----->[if any error happens]


(xii) /orders/    <------>  {method====>GET}   <----> (to get all the orders)


   ===request===
    <-->req.headers.authorization=token<-->

    ===responses===
    1.res = {"message":"No authorization to do this task"}
    2.res = [{},{},---]     <---->[array containg objects]
    3.res = {"message":error}     <----->[if any error happens]



(xiii) /orders/delete/:id   <------>  {method====>DELETE}   <----> (to delete an order)

     ===request===
    <-->req.headers.authorization=token<-->

    ===responses===
    1.res = {"message":"No authorization to do this task"}
    {"message":"The order has been deleted successfully"}
    4.res = {"message":error}     <----->[if any error happens]


(xiv) /orders/upload/:userID  <------>  {method====>POST}   <----> (to checkout from cart and place order. everything in cart is deleted)

    ===responses===
   1. res = {"message":"Your order has been placed"}
    4.res = {"message":error}     <----->[if any error happens]
