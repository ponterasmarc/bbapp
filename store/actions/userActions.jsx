import axios from "axios";
import {
  SET_SIGNIN_FAIL,
  SET_SIGNIN_REQUEST,
  SET_SIGNIN_SUCCESS,
  GET_SIGNOUT_USER_FAIL,
  GET_SIGNOUT_USER_REQUEST,
  GET_SIGNOUT_USER_SUCCESS,
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  PUT_USER_REQUEST,
  PUT_USER_SUCCESS,
  PUT_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
} from "../constants/userConstants";

export const signedInUser = (email) => async (dispatch) => {
  try {
    dispatch({
      type: SET_SIGNIN_REQUEST,
    });
    const { data } = await axios.post(`/api/users/signedin/`, { email });

    dispatch({
      type: SET_SIGNIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SET_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const verifyUserEmail = (email) => async (dispatch) => {
  try {
    dispatch({
      type: SET_SIGNIN_REQUEST,
    });
    const { data } = await axios.post(`/api/users/signedin/`, { email });

    dispatch({
      type: SET_SIGNIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SET_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const signOutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_SIGNOUT_USER_REQUEST,
    });
    const { data } = await axios.get(`/api/users`);
    dispatch({
      type: GET_SIGNOUT_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SIGNOUT_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getUsers = (pageNo, size) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USERS_REQUEST,
    });

    const { data } = await axios.get(
      `/api/users?pageNo=${pageNo}&size=${size}`
    );
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_REQUEST,
    });
    const { data } = await axios.get(`/api/users/${id}`);
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const putUser = (id, updatedUser) => async (dispatch) => {
  try {
    dispatch({
      type: PUT_USER_REQUEST,
    });
    const { data } = await axios.put(`/api/users/${id}`, updatedUser);
    dispatch({
      type: PUT_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PUT_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_USER_REQUEST,
    });
    const { data } = await axios.delete(`/api/users/${id}`);
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
