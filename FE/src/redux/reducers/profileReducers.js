import {
    UPDATE_REQUEST,
    GET_ALL_REQUESTS,
    GET_PERSONAL_DATA,
    GET_CATEGORIES
  } from "../actions/constants";

const initialState = {
  requestList:null,
  personalData:null,
  categories:null,
}


const profileReducers = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_ALL_REQUESTS:
        return {
          ...state,
          requestList:payload
        }
      case GET_PERSONAL_DATA:
        return {
          ...state,
          personalData:payload
        }
      case GET_CATEGORIES:
          return{
            ...state,
            categories: payload
          }
      case UPDATE_REQUEST:
      default:
        return state;
    }
  }
  
  export default profileReducers

