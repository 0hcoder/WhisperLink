import { configureStore } from "@reduxjs/toolkit";
import userName from "./userNameSlice"
import userMessgesSlice  from "./userMessgesSlice";


const store = configureStore({
  reducer: {
    userName: userName,
    userMessgesSlice: userMessgesSlice,  // Add this line to include the slice for user messages.  // userMessgesSlice is defined in userMessgesSlice.js file.  // userMessges is the name of the slice.  // userMessgesSlice is a reducer function that handles the state of user messages.  // The extraReducers option is used to include the userMessgesSlice in the store.  // The userMessgesSlice will be combined with the userName
  },
});

export default store;
