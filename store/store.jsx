import { configureStore } from "@reduxjs/toolkit";
import {
  addUserReducer,
  deleteUserReducer,
  getUserReducer,
  getUsersReducer,
  putUserReducer,
} from "./reducers/userReducers";

export const store = configureStore({
  reducer: {
    getUsers: getUsersReducer,
    getUser: getUserReducer,
    addUser: addUserReducer,
    putUser: putUserReducer,
    deleteUser: deleteUserReducer,
  },
});
