import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_EMAIL_WARNING,
  LOGIN_PASSWORD_WARNING,
} from "./auth.types"
const adminLoginData = JSON.parse(localStorage.getItem("adminLoginData")) || "";

const initialState={
    isAuth:!! adminLoginData.token,
    loading:false,
    error:false,
    token:adminLoginData?adminLoginData.token:"",
    name:adminLoginData?adminLoginData.name:"",
    message:""
}

export const authReducer=(state=initialState,{type,payload})=>{
    switch (type) {
      case LOGIN_LOADING: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case LOGIN_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case LOGIN_SUCCESS: {
        localStorage.setItem(
          "adminLoginData",
          JSON.stringify({
            token: payload.token,
            name: payload.admin_details[0].name,
          })
        );
        return {
          ...state,
          loading: false,
          error: false,
          isAuth: true,
          token: payload.token,
          name: payload.admin_details[0].name,
          message: "",
        };
      }
      case LOGIN_EMAIL_WARNING: {
        return {
          ...state,
          loading: false,
          error: false,
          isAuth: false,
          token: "",
          name: "",
          message: payload,
        };
      }
      case LOGIN_PASSWORD_WARNING: {
        return {
          ...state,
          loading: false,
          error: false,
          isAuth: false,
          token: "",
          name: "",
          message: payload,
        };
      }
      case LOGOUT_SUCCESS:
        localStorage.removeItem("adminLoginData");
        return {
          ...state,
          loading: false,
          error: false,
          isAuth: false,
          token: "",
          name: "",
        };
      default:
        return state;
    }

}