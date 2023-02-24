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
     1.res = {""message":'Successfully logged in as admin',"token":token,"admin_details":[{email,name...}]}---->[successfull login]
     2.res = {"message":error}----->[if any error happens]
     4.res = {"message":"wrong password"}----->[correct email & wrong password]
     5.res = {"message":"Incorrect email"}----->[correct password & wrong email]