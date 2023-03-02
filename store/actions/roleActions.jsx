import axios from "axios";
import {
  GET_ROLES_FAILED,
  GET_ROLES_REQUEST,
  GET_ROLES_SUCCESS,
  GET_ROLE_FAILED,
  GET_ROLE_REQUEST,
  GET_ROLE_SUCCESS,
} from "../constants/roleConstants";

export const getRoles = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ROLES_REQUEST,
    });
    const { data } = await axios.get(`/api/roles`);
    dispatch({
      type: GET_ROLES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ROLES_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getRole = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ROLE_REQUEST,
    });
    const { data } = await axios.get(`/api/roles/${id}`);
    dispatch({
      type: GET_ROLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ROLE_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
