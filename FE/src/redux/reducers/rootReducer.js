import { combineReducers } from "redux";
import authReducers  from "./authReducers";
import messageReducers from "./messageReducers";
import dashboardReducers from './dashboardReducers'
import profileReducers from './profileReducers'
export default combineReducers({
    authReducers,
    messageReducers,
    dashboardReducers,
    profileReducers,
});