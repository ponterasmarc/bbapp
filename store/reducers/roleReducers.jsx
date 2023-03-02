import {
  GET_ROLES_FAIL,
  GET_ROLES_REQUEST,
  GET_ROLES_RESET,
  GET_ROLES_SUCCESS,
  GET_ROLE_FAIL,
  GET_ROLE_REQUEST,
  GET_ROLE_RESET,
  GET_ROLE_SUCCESS,
  ADD_ROLE_FAIL,
  ADD_ROLE_REQUEST,
  ADD_ROLE_RESET,
  ADD_ROLE_SUCCESS,
  PUT_ROLE_FAIL,
  PUT_ROLE_REQUEST,
  PUT_ROLE_RESET,
  PUT_ROLE_SUCCESS,
  DELETE_ROLE_FAIL,
  DELETE_ROLE_REQUEST,
  DELETE_ROLE_RESET,
  DELETE_ROLE_SUCCESS,
} from "../constants/roleConstants";

export const getRolesReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ROLES_REQUEST:
      return { loading: true };
    case GET_ROLES_SUCCESS:
      return { loading: false, success: true, roles: action.payload };
    case GET_ROLES_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_ROLES_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const getRoleReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ROLE_REQUEST:
      return { loading: true };
    case GET_ROLE_SUCCESS:
      return { loading: false, success: true, role: action.payload };
    case GET_ROLE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_ROLE_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const addRoleReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ROLE_REQUEST:
      return { loading: true };
    case ADD_ROLE_SUCCESS:
      return { loading: false, success: true, role: action.payload };
    case ADD_ROLE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case ADD_ROLE_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const putRoleReducer = (state = {}, action) => {
  switch (action.type) {
    case PUT_ROLE_REQUEST:
      return { loading: true };
    case PUT_ROLE_SUCCESS:
      return { loading: false, success: true, role: action.payload };
    case PUT_ROLE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case PUT_ROLE_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const deleteRoleReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ROLE_REQUEST:
      return { loading: true };
    case DELETE_ROLE_SUCCESS:
      return { loading: false, success: true };
    case DELETE_ROLE_FAIL:
      return { loading: false, success: false, error: action.payload };
    case DELETE_ROLE_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};
