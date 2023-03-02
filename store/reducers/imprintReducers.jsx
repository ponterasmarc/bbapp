import {
  GET_IMPRINTS_FAIL,
  GET_IMPRINTS_REQUEST,
  GET_IMPRINTS_RESET,
  GET_IMPRINTS_SUCCESS,
  GET_IMPRINT_FAIL,
  GET_IMPRINT_REQUEST,
  GET_IMPRINT_RESET,
  GET_IMPRINT_SUCCESS,
  ADD_IMPRINT_FAIL,
  ADD_IMPRINT_REQUEST,
  ADD_IMPRINT_RESET,
  ADD_IMPRINT_SUCCESS,
  PUT_IMPRINT_FAIL,
  PUT_IMPRINT_REQUEST,
  PUT_IMPRINT_RESET,
  PUT_IMPRINT_SUCCESS,
  DELETE_IMPRINT_FAIL,
  DELETE_IMPRINT_REQUEST,
  DELETE_IMPRINT_RESET,
  DELETE_IMPRINT_SUCCESS,
} from "../constants/imprintConstans";

export const getImprintsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_IMPRINTS_REQUEST:
      return { loading: true };
    case GET_IMPRINTS_SUCCESS:
      return { loading: false, success: true, imprints: action.payload };
    case GET_IMPRINTS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_IMPRINTS_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const getImprintReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_IMPRINT_REQUEST:
      return { loading: true };
    case GET_IMPRINT_SUCCESS:
      return { loading: false, success: true, imprint: action.payload };
    case GET_IMPRINT_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_IMPRINT_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const addImprintReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_IMPRINT_REQUEST:
      return { loading: true };
    case ADD_IMPRINT_SUCCESS:
      return { loading: false, success: true, imprint: action.payload };
    case ADD_IMPRINT_FAIL:
      return { loading: false, success: false, error: action.payload };
    case ADD_IMPRINT_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const putImprintReducer = (state = {}, action) => {
  switch (action.type) {
    case PUT_IMPRINT_REQUEST:
      return { loading: true };
    case PUT_IMPRINT_SUCCESS:
      return { loading: false, success: true, imprint: action.payload };
    case PUT_IMPRINT_FAIL:
      return { loading: false, success: false, error: action.payload };
    case PUT_IMPRINT_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const deleteImprintReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_IMPRINT_REQUEST:
      return { loading: true };
    case DELETE_IMPRINT_SUCCESS:
      return { loading: false, success: true };
    case DELETE_IMPRINT_FAIL:
      return { loading: false, success: false, error: action.payload };
    case DELETE_IMPRINT_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};
