import axios from "axios";
import {
  GET_AUTHORS_FAIL,
  GET_AUTHORS_REQUEST,
  GET_AUTHORS_SUCCESS,
  GET_AUTHOR_FAIL,
  GET_AUTHOR_REQUEST,
  GET_AUTHOR_SUCCESS,
  PUT_AUTHOR_REQUEST,
  PUT_AUTHOR_SUCCESS,
  PUT_AUTHOR_FAIL,
  DELETE_AUTHOR_REQUEST,
  DELETE_AUTHOR_SUCCESS,
  DELETE_AUTHOR_FAIL,
} from "../constants/authorConstans";

export const getAuthors =
  (pageNo, size, search) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_AUTHORS_REQUEST,
      });

      console.log(search);

      const { data } = await axios.get(
        `/api/authors?&pageNo=${pageNo}&size=${size}&search=${search}`
      );
      dispatch({
        type: GET_AUTHORS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_AUTHORS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getAuthor = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_AUTHOR_REQUEST,
    });
    const { data } = await axios.get(`/api/authors/${id}`);
    dispatch({
      type: GET_AUTHOR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_AUTHOR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const putAuthor = (id, updatedAuthor) => async (dispatch) => {
  try {
    dispatch({
      type: PUT_AUTHOR_REQUEST,
    });
    const { data } = await axios.put(`/api/authors/${id}`, updatedAuthor);
    dispatch({
      type: PUT_AUTHOR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PUT_AUTHOR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteAuthor = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_AUTHOR_REQUEST,
    });
    const { data } = await axios.delete(`/api/authors/${id}`);
    dispatch({
      type: DELETE_AUTHOR_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_AUTHOR_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
