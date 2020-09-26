import { createAction, createReducer } from "@reduxjs/toolkit";
import { getCurrentUser } from "../services/authService";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  isLoading: true,
  user: getCurrentUser(),
};

const loginSuccess = createAction("loginSuccess");
const logoutSuccess = createAction("logoutSuccess");

const authReducer = createReducer(initialState, {
  [loginSuccess]: (state, action) => {
    state.isAuthenticated = true;
    state.isLoading = false;
    return state;
  },
  [logoutSuccess]: (state, action) => {
    state.token = null;
    state.isAuthenticated = false;
    state.user = null;
    return state;
  },
});

export default authReducer;
