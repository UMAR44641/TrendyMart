import {LOGIN_LOADING,LOGIN_ERROR,LOGIN_SUCCESS,LOGIN_EMAIL_WARNING,LOGIN_PASSWORD_WARNING,LOGOUT_SUCCESS} from "./auth.types"
import axios from "axios"
export const login=(creds,toast,setEmail,setPassword)=>async(dispatch)=>{
    dispatch({type:LOGIN_LOADING})
    try{
        let res = await axios.post(
          "https://courageous-tuxedo-dog.cyclic.app/admins/login",
          creds
        );
        console.log(res)
        if (res.data.message == "Successfully logged in as admin") {
           toast({
             title: "Login Successfull.",
             description: "You have successfully logged in.",
             status: "success",
             duration: 3000,
             isClosable: true,
             position: "top",
           });
          setEmail("");
          setPassword("");
          dispatch({ type: LOGIN_SUCCESS, payload: res.data });
         
          
        } else if (res.data.message == "wrong password") {
          dispatch({
            type: LOGIN_PASSWORD_WARNING,
            payload: res.data.message,
          });
          toast({
            title: "Incorrect Password.",
            description: "Please fill correct password.",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        } else if (res.data.message == "Incorrect email") {
          dispatch({
            type: LOGIN_EMAIL_WARNING,
            payload: res.data.message,
          });
          toast({
            title: "Incorrect Email.",
            description: "Please fill correct email.",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top",
          });
        }
    }catch(err){
        dispatch({type:LOGIN_ERROR})
    }

}

export const logout=()=>{
    return{
        type:LOGOUT_SUCCESS
    }
}

