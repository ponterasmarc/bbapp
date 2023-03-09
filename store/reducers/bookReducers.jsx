import {
  GET_BOOKS_FAIL,
  GET_BOOKS_REQUEST,
  GET_BOOKS_RESET,
  GET_BOOKS_SUCCESS,
  GET_BOOK_FAIL,
  GET_BOOK_REQUEST,
  GET_BOOK_RESET,
  GET_BOOK_SUCCESS,
  ADD_BOOK_FAIL,
  ADD_BOOK_REQUEST,
  ADD_BOOK_RESET,
  ADD_BOOK_SUCCESS,
  PUT_BOOK_FAIL,
  PUT_BOOK_REQUEST,
  PUT_BOOK_RESET,
  PUT_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_RESET,
  DELETE_BOOK_SUCCESS,
} from "../constants/bookConstans";

export const getBooksReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST:
      return { loading: true };
    case GET_BOOKS_SUCCESS:
      return {
        loading: false,
        success: true,
        books: action.payload.books,
        count: action.payload.count,
      };
    case GET_BOOKS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_BOOKS_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const getBookReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BOOK_REQUEST:
      return { loading: true };
    case GET_BOOK_SUCCESS:
      return { loading: false, success: true, book: action.payload };
    case GET_BOOK_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_BOOK_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const addBookReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_BOOK_REQUEST:
      return { loading: true };
    case ADD_BOOK_SUCCESS:
      return { loading: false, success: true, book: action.payload };
    case ADD_BOOK_FAIL:
      return { loading: false, success: false, error: action.payload };
    case ADD_BOOK_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const putBookReducer = (state = {}, action) => {
  switch (action.type) {
    case PUT_BOOK_REQUEST:
      return { loading: true };
    case PUT_BOOK_SUCCESS:
      return { loading: false, success: true, book: action.payload };
    case PUT_BOOK_FAIL:
      return { loading: false, success: false, error: action.payload };
    case PUT_BOOK_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const deleteBookReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BOOK_REQUEST:
      return { loading: true };
    case DELETE_BOOK_SUCCESS:
      return { loading: false, success: true };
    case DELETE_BOOK_FAIL:
      return { loading: false, success: false, error: action.payload };
    case DELETE_BOOK_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};
