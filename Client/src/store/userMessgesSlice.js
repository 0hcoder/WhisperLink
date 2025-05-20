import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userMessgesVal: [],
};

export const userMessgesSlice = createSlice({
  name: "userMessges",
  initialState,
  reducers: {
    // userMess: (state, action) => {
    //   console.log("usermessges");
    //   state.userMessgesVal = action.payload;
    // },
    loadMessData: (state, action) => {
      console.log("usermessgesdata");
      state.userMessgesVal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userMess, loadMessData } = userMessgesSlice.actions;
export default userMessgesSlice.reducer;
