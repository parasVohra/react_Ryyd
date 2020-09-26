import { combineReducers } from "redux";
import authReducer from "./auth";
import errorReducer from "./error";
import rideReducer from "./rides";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  ride: rideReducer,
});
