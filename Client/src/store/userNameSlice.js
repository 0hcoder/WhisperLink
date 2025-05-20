import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  userNameVal: {},
};

export const userNameSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    userName: (state, action) => {
      console.log("userNameSlice");
      state.userNameVal = action.payload;
    },
    loadData: (state, action) => {

      console.log("loadDataSlice");
      state.userNameVal = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userName, loadData } = userNameSlice.actions;
export default userNameSlice.reducer;
