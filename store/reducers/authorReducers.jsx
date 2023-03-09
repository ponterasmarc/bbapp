import {
  GET_AUTHORS_FAIL,
  GET_AUTHORS_REQUEST,
  GET_AUTHORS_RESET,
  GET_AUTHORS_SUCCESS,
  GET_AUTHOR_FAIL,
  GET_AUTHOR_REQUEST,
  GET_AUTHOR_RESET,
  GET_AUTHOR_SUCCESS,
  ADD_AUTHOR_FAIL,
  ADD_AUTHOR_REQUEST,
  ADD_AUTHOR_RESET,
  ADD_AUTHOR_SUCCESS,
  PUT_AUTHOR_FAIL,
  PUT_AUTHOR_REQUEST,
  PUT_AUTHOR_RESET,
  PUT_AUTHOR_SUCCESS,
  DELETE_AUTHOR_FAIL,
  DELETE_AUTHOR_REQUEST,
  DELETE_AUTHOR_RESET,
  DELETE_AUTHOR_SUCCESS,
} from "../constants/authorConstans";

export const getAuthorsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_AUTHORS_REQUEST:
      return { loading: true };
    case GET_AUTHORS_SUCCESS:
      return { loading: false, success: true, authors: action.payload };
    case GET_AUTHORS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_AUTHORS_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const getAuthorReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_AUTHOR_REQUEST:
      return { loading: true };
    case GET_AUTHOR_SUCCESS:
      return { loading: false, success: true, author: action.payload };
    case GET_AUTHOR_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_AUTHOR_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const addAuthorReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_AUTHOR_REQUEST:
      return { loading: true };
    case ADD_AUTHOR_SUCCESS:
      return { loading: false, success: true, author: action.payload };
    case ADD_AUTHOR_FAIL:
      return { loading: false, success: false, error: action.payload };
    case ADD_AUTHOR_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const putAuthorReducer = (state = {}, action) => {
  switch (action.type) {
    case PUT_AUTHOR_REQUEST:
      return { loading: true };
    case PUT_AUTHOR_SUCCESS:
      return { loading: false, success: true, author: action.payload };
    case PUT_AUTHOR_FAIL:
      return { loading: false, success: false, error: action.payload };
    case PUT_AUTHOR_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const deleteAuthorReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_AUTHOR_REQUEST:
      return { loading: true };
    case DELETE_AUTHOR_SUCCESS:
      return { loading: false, success: true };
    case DELETE_AUTHOR_FAIL:
      return { loading: false, success: false, error: action.payload };
    case DELETE_AUTHOR_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};
