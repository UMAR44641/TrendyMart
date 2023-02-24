API's and endpoints



BaseURL=

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

(iii) /admins/register <-----> {method===>POST} <----->  (for registering new admin) 
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

(iv)  /admins/login <-----> {method===>POST} <----->(for logging into the admin account)
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

(v)  /products/ <-----> {method===>GET} <----->(getting all the products)
    
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


(vi) /products/:id    <-----> {method===>GET} <----->(getting a single product)

    ===responses===
     1.res = {}     <---->[object containing tht product]
     2.res = {"message":error}      <----->[if any error happens]


(vii) /products/upload <------> {method===>POST}  <----> (for posting a product)
    
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


(viii) /products/:id <------> {method===>PATCH}  <----> (for updating details of a product)
    
    ===request===
    <-->req.headers.authorization=token<-->
    <-->req.body=object containing updated details<-->

    ===responses===
    1.res = {"message":"product details updated successfully"}   
    2.res = {"message":error}


(ix) /products/:id <------> {method===>DELETE}  <----> (for deleting a particular product)
    
    ===request===
    <-->req.headers.authorization=token<-->

    ===responses===
    1.res = {"message":"The product has been deleted successfully"}
    2.res = {"message":error}




