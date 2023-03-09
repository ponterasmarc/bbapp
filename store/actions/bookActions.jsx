import axios from "axios";
import {
  GET_BOOKS_FAIL,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOK_FAIL,
  GET_BOOK_REQUEST,
  GET_BOOK_SUCCESS,
  PUT_BOOK_REQUEST,
  PUT_BOOK_SUCCESS,
  PUT_BOOK_FAIL,
  DELETE_BOOK_REQUEST,
  DELETE_BOOK_SUCCESS,
  DELETE_BOOK_FAIL,
} from "../constants/bookConstans";

export const getBooks = (pageNo, size) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_BOOKS_REQUEST,
    });

    const { data } = await axios.get(
      `/api/books?pageNo=${pageNo}&size=${size}`
    );
    dispatch({
      type: GET_BOOKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BOOKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getBook = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_BOOK_REQUEST,
    });
    const { data } = await axios.get(`/api/books/${id}`);
    dispatch({
      type: GET_BOOK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BOOK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const putBook = (id, updatedBook) => async (dispatch) => {
  try {
    dispatch({
      type: PUT_BOOK_REQUEST,
    });
    const { data } = await axios.put(`/api/books/${id}`, updatedBook);
    dispatch({
      type: PUT_BOOK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PUT_BOOK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteBook = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_BOOK_REQUEST,
    });
    const { data } = await axios.delete(`/api/books/${id}`);
    dispatch({
      type: DELETE_BOOK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BOOK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
