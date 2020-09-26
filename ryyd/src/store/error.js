import { createAction, createReducer } from "@reduxjs/toolkit";

const setError = createAction("setError");
const removeError = createAction("removeError");

const initialState = {
  status: "ok",
  data: null,
  message: null,
  error: null,
};

const errorReducer = createReducer(initialState, {
  [setError]: (errors, action) => {
    errors.status = "error";
    errors.data = action.data;
    errors.message = action.message;
    errors.error = action.error;
  },
  [removeError]: (errors, action) => {
    errors.status = "ok";
    errors.data = null;
    errors.message = null;
    errors.error = null;
  },
});

export default errorReducer;
