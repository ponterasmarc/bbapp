import { configureStore } from "@reduxjs/toolkit";
import {
  addImprintReducer,
  deleteImprintReducer,
  getImprintReducer,
  getImprintsReducer,
  putImprintReducer,
} from "./reducers/imprintReducers";
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
    getImprints: getImprintsReducer,
    getImprint: getImprintReducer,
    addImprint: addImprintReducer,
    putImprint: putImprintReducer,
    deleteImprint: deleteImprintReducer,
  },
});
