import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
  CLEAR_MESSAGE,
  GET_PERSONAL_DATA} from "./constants";
import axios from "axios";
import authHeader from '../authHeader'

const API_URL = "http://localhost:3000/api/";


export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

export const register = ( email, password) => (dispatch) => {
  return axios.post(API_URL + "auth/register", {
    email:email,
    password:password,
  }).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
        return Promise.resolve();
      }).catch(
      (error) => {
        const message = "Register failed."
  
        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };

  export const completePersonalData = (personalData) => (dispatch) => {
    const headerAuth =  authHeader();
    return axios.post(API_URL + "users/create-personal-data", personalData,{ headers:headerAuth }).then(
        (response) => {
          dispatch({
            type: REGISTER_SUCCESS,
          });
    
          dispatch({
            type: GET_PERSONAL_DATA,
            payload: response.data.data,
          });
    
          return Promise.resolve();
        }).catch(
        (error) => {
          const message = "Register failed."
    
          dispatch({
            type: REGISTER_FAIL,
          });
    
          dispatch({
            type: SET_MESSAGE,
            payload: message,
          });
    
          return Promise.reject();
        }
      );
    };
    
  
  export const login = (email, password) => (dispatch) => {
    const data = { email:email,password:password };
    return axios
    .post(API_URL + "auth/login", data)
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify({token: response.data.token, email:email}));
      }
      return response.data;
    }).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        return Promise.resolve();
      }).catch(
      (error) => {
        const message = "Login failed."
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
        return Promise.reject();
      }
    );
  };
  
  export const logout = () => (dispatch) => {
    localStorage.removeItem("user");
  
    dispatch({
      type: LOGOUT,
    });
  };