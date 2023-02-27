import axios from "axios";
import {
  GET_USERS_FAILED,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../constants/userContants";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USERS_REQUEST,
    });
    const { data } = await axios.get(`/api/users`);
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAILED,
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
      type: GET_USER_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
