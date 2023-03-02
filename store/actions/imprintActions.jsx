import axios from "axios";
import {
  GET_IMPRINTS_FAILED,
  GET_IMPRINTS_REQUEST,
  GET_IMPRINTS_SUCCESS,
  GET_IMPRINT_FAILED,
  GET_IMPRINT_REQUEST,
  GET_IMPRINT_SUCCESS,
} from "../constants/imprintConstans";

export const getImprints = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_IMPRINTS_REQUEST,
    });
    const { data } = await axios.get(`/api/imprints`);
    dispatch({
      type: GET_IMPRINTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_IMPRINTS_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getImprint = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_IMPRINT_REQUEST,
    });
    const { data } = await axios.get(`/api/imprints/${id}`);
    dispatch({
      type: GET_IMPRINT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_IMPRINT_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
