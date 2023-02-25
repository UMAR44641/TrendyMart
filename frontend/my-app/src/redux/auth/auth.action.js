import { LOGIN_ERROR,LOGIN_LOADING,LOGIN_SUCCESS,LOGOUT_SUCCESS,LOGIN_EMAIL_WARNING,LOGIN_PASSWORD_WARNING } from "./auth.types";
import axios from "axios";




export const login=(creds,toast,getOff,setEmail,setPassword)=>async (dispatch)=>{

 dispatch({type:LOGIN_LOADING})
try {
 let response=await axios.post("https://courageous-tuxedo-dog.cyclic.app/users/login",creds);
if(response.data.message=="login successfull"){
 dispatch({type:LOGIN_SUCCESS,payload:response.data});
 toast({
  title: 'Login Successfull.',
  description: "You have successfully logged in.",
  status: 'success',
  duration: 3000,
  isClosable: true,
  position:"top"
});
getOff();
setEmail("");
setPassword("");
}else if(response.data.message=="wrong password"){
 dispatch({type:LOGIN_PASSWORD_WARNING,payload:response.data.message});
 toast({
  title: 'Incorrect Password.',
  description: "Please fill correct password.",
  status: 'warning',
  duration: 3000,
  isClosable: true,
  position:"top"
});
}else if(response.data.message=="Incorrect email"){
 dispatch({type:LOGIN_EMAIL_WARNING,payload:response.data.message});
 toast({
  title: 'Incorrect Email.',
  description: "Please fill correct email.",
  status: 'warning',
  duration: 3000,
  isClosable: true,
  position:"top"
});
}

} catch (error) {
 dispatch({type:LOGIN_ERROR})
}
}

export const logout=()=>{
 return {
  type:LOGOUT_SUCCESS
 }
}