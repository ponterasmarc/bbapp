import { configureStore } from "@reduxjs/toolkit";
import {
  addImprintReducer,
  deleteImprintReducer,
  getImprintReducer,
  getImprintsReducer,
  putImprintReducer,
} from "./reducers/imprintReducers";
import {
  addTeamReducer,
  deleteTeamReducer,
  getMembersReducer,
  getTeamReducer,
  getTeamsReducer,
  putTeamReducer,
} from "./reducers/teamReducers";
import {
  addUserReducer,
  deleteUserReducer,
  getUserReducer,
  getUsersByTeamReducer,
  getUsersReducer,
  putUserReducer,
  signedInUserReducer,
  signedOutUserReducer,
} from "./reducers/userReducers";

export const store = configureStore({
  reducer: {
    signedInUser: signedInUserReducer,
    signedOut: signedOutUserReducer,
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
    getTeams: getTeamsReducer,
    getTeam: getTeamReducer,
    addTeam: addTeamReducer,
    putTeam: putTeamReducer,
    deleteTeam: deleteTeamReducer,
    getMembers: getMembersReducer,
  },
});
