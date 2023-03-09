import axios from "axios";
import {
  GET_TASKS_FAIL,
  GET_TASKS_REQUEST,
  GET_TASKS_SUCCESS,
  GET_TASK_FAIL,
  GET_TASK_REQUEST,
  GET_TASK_SUCCESS,
  PUT_TASK_REQUEST,
  PUT_TASK_SUCCESS,
  PUT_TASK_FAIL,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAIL,
} from "../constants/taskConstans";

export const getTasks = (pageNo, size) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_TASKS_REQUEST,
    });

    const { data } = await axios.get(
      `/api/tasks?&pageNo=${pageNo}&size=${size}`
    );
    dispatch({
      type: GET_TASKS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TASKS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTask = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_TASK_REQUEST,
    });
    const { data } = await axios.get(`/api/tasks/${id}`);
    dispatch({
      type: GET_TASK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TASK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const putTask = (id, updatedTask) => async (dispatch) => {
  try {
    dispatch({
      type: PUT_TASK_REQUEST,
    });
    const { data } = await axios.put(`/api/tasks/${id}`, updatedTask);
    dispatch({
      type: PUT_TASK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PUT_TASK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_TASK_REQUEST,
    });
    const { data } = await axios.delete(`/api/tasks/${id}`);
    dispatch({
      type: DELETE_TASK_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TASK_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
