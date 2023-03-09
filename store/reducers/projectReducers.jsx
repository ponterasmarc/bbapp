import {
  GET_PROJECTS_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_RESET,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_FAIL,
  GET_PROJECT_REQUEST,
  GET_PROJECT_RESET,
  GET_PROJECT_SUCCESS,
  ADD_PROJECT_FAIL,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_RESET,
  ADD_PROJECT_SUCCESS,
  PUT_PROJECT_FAIL,
  PUT_PROJECT_REQUEST,
  PUT_PROJECT_RESET,
  PUT_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_RESET,
  DELETE_PROJECT_SUCCESS,
} from "../constants/projectConstans";

export const getProjectsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PROJECTS_REQUEST:
      return { loading: true };
    case GET_PROJECTS_SUCCESS:
      return {
        loading: false,
        success: true,
        projects: action.payload.projects,
        count: action.payload.count,
      };
    case GET_PROJECTS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_PROJECTS_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const getProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PROJECT_REQUEST:
      return { loading: true };
    case GET_PROJECT_SUCCESS:
      return { loading: false, success: true, project: action.payload };
    case GET_PROJECT_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_PROJECT_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const addProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PROJECT_REQUEST:
      return { loading: true };
    case ADD_PROJECT_SUCCESS:
      return { loading: false, success: true, project: action.payload };
    case ADD_PROJECT_FAIL:
      return { loading: false, success: false, error: action.payload };
    case ADD_PROJECT_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const putProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case PUT_PROJECT_REQUEST:
      return { loading: true };
    case PUT_PROJECT_SUCCESS:
      return { loading: false, success: true, project: action.payload };
    case PUT_PROJECT_FAIL:
      return { loading: false, success: false, error: action.payload };
    case PUT_PROJECT_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const deleteProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PROJECT_REQUEST:
      return { loading: true };
    case DELETE_PROJECT_SUCCESS:
      return { loading: false, success: true };
    case DELETE_PROJECT_FAIL:
      return { loading: false, success: false, error: action.payload };
    case DELETE_PROJECT_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};
