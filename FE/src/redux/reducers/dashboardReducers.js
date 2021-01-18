import {
    GET_ITEMS
  } from "../actions/constants";

const initialState = {
  itemList:null
}


const dashboardReducers = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_ITEMS:
        return {
          ...state,
          itemList: payload,
        };
      default:
        return state;
    }
  }
  
  export default dashboardReducers

