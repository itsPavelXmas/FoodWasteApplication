import {
    GET_ITEMS
} from "./constants";
import axios from "axios";
import authHeader from '../authHeader'

const API_URL = "http://localhost:3000/api/";

export const getItems = () => (dispatch) => {
    const headerAuth =  authHeader();
    return axios.get(API_URL + "dashboard/get-data",{ headers:headerAuth }).then(
        (response) => {
          dispatch({
            type: GET_ITEMS,
            payload: response.data.data,
          });
    
          return Promise.resolve();
        }).catch(
        (error) => {
          return Promise.reject();
        }
      );
    };