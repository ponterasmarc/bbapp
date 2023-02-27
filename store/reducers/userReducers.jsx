import {
  GET_USERS_FAILED,
  GET_USERS_REQUEST,
  GET_USERS_RESET,
  GET_USERS_SUCCESS,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_RESET,
  GET_USER_SUCCESS,
  ADD_USER_FAILED,
  ADD_USER_REQUEST,
  ADD_USER_RESET,
  ADD_USER_SUCCESS,
  PUT_USER_FAILED,
  PUT_USER_REQUEST,
  PUT_USER_RESET,
  PUT_USER_SUCCESS,
  DELETE_USER_FAILED,
  DELETE_USER_REQUEST,
  DELETE_USER_RESET,
  DELETE_USER_SUCCESS,
} from "../constants/userContants";

export const getUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { loading: true };
    case GET_USERS_SUCCESS:
      return { loading: false, success: true, users: action.payload };
    case GET_USERS_FAILED:
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
    case GET_USER_FAILED:
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
    case ADD_USER_FAILED:
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
    case PUT_USER_FAILED:
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
    case DELETE_USER_FAILED:
      return { loading: false, success: false, error: action.payload };
    case DELETE_USER_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};
