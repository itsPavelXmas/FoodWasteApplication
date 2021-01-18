import {
    GET_ALL_REQUESTS, UPDATE_REQUEST,
    GET_PERSONAL_DATA,
    GET_CATEGORIES,
} from "./constants";
import axios from "axios";
import authHeader from '../authHeader'
const API_URL = "http://localhost:3000/api/";

export const updateRequest = (id) => (dispatch) => {
    const headerAuth =  authHeader();
    const url = API_URL + "profile/update-status/" + id;
    return  axios({
      method : 'put',
      url: url,
      headers: headerAuth,
    }).then(
        (response) => {
          console.log(id)
          dispatch({
            type: UPDATE_REQUEST,
          });
          return Promise.resolve();
        }).catch(
        (error) => {
          return Promise.reject();
        }
      );
};

export const getRequests = (id) => (dispatch) => {
  const headerAuth =  authHeader();
  return axios.get(API_URL + "profile/get-all-requests/" + id,{ headers:headerAuth }).then(
      (response) => {
        dispatch({
          type: GET_ALL_REQUESTS,
          payload: response.data.data,
        });
  
        return Promise.resolve();
      }).catch(
      (error) => {
        return Promise.reject();
      }
    );
};

export const getPersonalData = () => (dispatch) => {
  const headerAuth =  authHeader();
  const email = JSON.parse(localStorage.getItem('user')).email;
  return axios.get(API_URL + "users/retrieve-data/" + email,{ headers:headerAuth }).then(
      (response) => {
        dispatch({
          type: GET_PERSONAL_DATA,
          payload: response.data.data,
        });
  
        return Promise.resolve();
      }).catch(
      (error) => {
        return Promise.reject();
      }
    );
};

export const getCategories = () => (dispatch) => {
  const headerAuth =  authHeader();
  console.log('aici');
  return axios.get(API_URL + "filters/categories/",{ headers:headerAuth }).then(
      (response) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: response.data.data,
        });
  
        return Promise.resolve();
      }).catch(
      (error) => {
        return Promise.reject();
      }
    );
};

export const createRequest = (requestBody) => (dispatch) => {
  const headerAuth =  authHeader();
  return axios.post(API_URL + "request/create-request",requestBody,{ headers:headerAuth }).then(
      (response) => {
        return Promise.resolve();
      }).catch(
      (error) => {
        return Promise.reject();
      }
    );
};