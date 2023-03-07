import {
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_RESET,
  GET_USERS_SUCCESS,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_RESET,
  GET_USER_SUCCESS,
  ADD_USER_FAIL,
  ADD_USER_REQUEST,
  ADD_USER_RESET,
  ADD_USER_SUCCESS,
  PUT_USER_FAIL,
  PUT_USER_REQUEST,
  PUT_USER_RESET,
  PUT_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_RESET,
  DELETE_USER_SUCCESS,
  SET_SIGNIN_REQUEST,
  SET_SIGNIN_SUCCESS,
  SET_SIGNIN_FAIL,
  SET_SIGNIN_RESET,
  GET_SIGNEDOUT_USER_REQUEST,
  GET_SIGNEDOUT_USER_SUCCESS,
  GET_SIGNEDOUT_USER_FAIL,
  GET_SIGNEDOUT_USER_RESET,
  GET_USERS_BY_TEAM_REQUEST,
  GET_USERS_BY_TEAM_SUCCESS,
  GET_USERS_BY_TEAM_FAIL,
  GET_USERS_BY_TEAM_RESET,
} from "../constants/userConstants";

export const signedInUserReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SIGNIN_REQUEST:
      return { loading: true };
    case SET_SIGNIN_SUCCESS:
      return { loading: false, success: true, signedInUser: action.payload };
    case SET_SIGNIN_FAIL:
      return { loading: false, success: false, error: action.payload };
    case SET_SIGNIN_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const signedOutUserReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SIGNEDOUT_USER_REQUEST:
      return { loading: true };
    case GET_SIGNEDOUT_USER_SUCCESS:
      return { loading: false, success: true };
    case GET_SIGNEDOUT_USER_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_SIGNEDOUT_USER_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const getUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { loading: true };
    case GET_USERS_SUCCESS:
      return {
        loading: false,
        success: true,
        users: action.payload.users,
        entries: action.payload.count,
      };
    case GET_USERS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_USERS_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const getUserReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { loading: true };
    case GET_USER_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case GET_USER_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_USER_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const addUserReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER_REQUEST:
      return { loading: true };
    case ADD_USER_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case ADD_USER_FAIL:
      return { loading: false, success: false, error: action.payload };
    case ADD_USER_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const putUserReducer = (state = {}, action) => {
  switch (action.type) {
    case PUT_USER_REQUEST:
      return { loading: true };
    case PUT_USER_SUCCESS:
      return { loading: false, success: true, user: action.payload };
    case PUT_USER_FAIL:
      return { loading: false, success: false, error: action.payload };
    case PUT_USER_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const deleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return { loading: true };
    case DELETE_USER_SUCCESS:
      return { loading: false, success: true };
    case DELETE_USER_FAIL:
      return { loading: false, success: false, error: action.payload };
    case DELETE_USER_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};
