/**
 * NOT USED
 */
import { createSlice } from "@reduxjs/toolkit";
import { addUserReducer, getUsersReducer } from "../reducers/userReducers";

const initialState = {
  loading: false,
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: getUsersReducer,
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;

export default userSlice.reducer;
