import { configureStore } from "@reduxjs/toolkit";
import {
  addAuthorReducer,
  deleteAuthorReducer,
  getAuthorReducer,
  getAuthorsReducer,
  putAuthorReducer,
} from "./reducers/authorReducers";
import {
  addBookReducer,
  deleteBookReducer,
  getBookReducer,
  getBooksReducer,
  putBookReducer,
} from "./reducers/bookReducers";
import {
  addImprintReducer,
  deleteImprintReducer,
  getImprintReducer,
  getImprintsReducer,
  putImprintReducer,
} from "./reducers/imprintReducers";
import {
  addProjectReducer,
  deleteProjectReducer,
  getProjectReducer,
  getProjectsReducer,
  putProjectReducer,
} from "./reducers/projectReducers";
import {
  addRoleReducer,
  deleteRoleReducer,
  getRoleReducer,
  getRolesReducer,
  putRoleReducer,
} from "./reducers/roleReducers";
import {
  addTaskReducer,
  deleteTaskReducer,
  getTaskReducer,
  getTasksReducer,
  putTaskReducer,
} from "./reducers/taskReducers";
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
  getAssigneesReducer,
  getUserReducer,
  getUsersByTeamReducer,
  getUsersReducer,
  putUserReducer,
  signedInUserReducer,
  signedOutUserReducer,
} from "./reducers/userReducers";

export const store = configureStore({
  reducer: {
    //User Reducers
    signedInUser: signedInUserReducer,
    signedOut: signedOutUserReducer,
    getUsers: getUsersReducer,
    getUser: getUserReducer,
    addUser: addUserReducer,
    putUser: putUserReducer,
    deleteUser: deleteUserReducer,
    getAssignees: getAssigneesReducer,

    //Imprint Reducers
    getImprints: getImprintsReducer,
    getImprint: getImprintReducer,
    addImprint: addImprintReducer,
    putImprint: putImprintReducer,
    deleteImprint: deleteImprintReducer,

    //Team Reducers
    getTeams: getTeamsReducer,
    getTeam: getTeamReducer,
    addTeam: addTeamReducer,
    putTeam: putTeamReducer,
    deleteTeam: deleteTeamReducer,
    getMembers: getMembersReducer,

    //Role Reducers
    getRoles: getRolesReducer,
    getRole: getRoleReducer,
    addRole: addRoleReducer,
    putRole: putRoleReducer,
    deleteRole: deleteRoleReducer,

    //Author Reducers
    getAuthors: getAuthorsReducer,
    getAuthor: getAuthorReducer,
    addAuthor: addAuthorReducer,
    putAuthor: putAuthorReducer,
    deleteAuthor: deleteAuthorReducer,

    //Book Reducers
    getBooks: getBooksReducer,
    getBook: getBookReducer,
    addBook: addBookReducer,
    putBook: putBookReducer,
    deleteBook: deleteBookReducer,

    //Project Reducers
    getProjects: getProjectsReducer,
    getProject: getProjectReducer,
    addProject: addProjectReducer,
    putProject: putProjectReducer,
    deleteProject: deleteProjectReducer,

    //Task Reducers
    getTasks: getTasksReducer,
    getTask: getTaskReducer,
    addTask: addTaskReducer,
    putTask: putTaskReducer,
    deleteTask: deleteTaskReducer,
  },
});
