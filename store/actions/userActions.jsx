import axios from "axios";
import {
  SET_SIGNIN_FAILED,
  SET_SIGNIN_REQUEST,
  SET_SIGNIN_SUCCESS,
  GET_SIGNOUT_USER_FAILED,
  GET_SIGNOUT_USER_REQUEST,
  GET_SIGNOUT_USER_SUCCESS,
  GET_USERS_FAILED,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
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

    // console.log(data);
    localStorage.setItem("signedInUser", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SET_SIGNIN_FAILED,
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
    // localStorage.setItem("loggedUser", JSON.stringify({ data: "data" }));
  } catch (error) {
    dispatch({
      type: GET_SIGNOUT_USER_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const getUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USERS_REQUEST,
    });
    const {
      signedInUser: { signedInUser },
    } = getState();

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
