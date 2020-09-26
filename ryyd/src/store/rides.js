import { createAction, createReducer } from "@reduxjs/toolkit";

const searchedRide = createAction("searchedRide");
const requestedRide = createAction("requestedRide");
const selectedRide = createAction("selectedRide");

const initialState = {
  searchedRide: null,
  requestedRide: false,
  selectedRide: null,
};

const rideReducer = createReducer(initialState, {
  [searchedRide]: (state, action) => {
    state.searchedRide = action.payload.message;
    return state;
  },
  [requestedRide]: (state, action) => {
    state.requestedRide = true;
    return state;
  },
  [selectedRide]: (state, action) => {
    state.selectedRide = action.payload;
    return state;
  },
});

export default rideReducer;
