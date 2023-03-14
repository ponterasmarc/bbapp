import axios from "axios";
import {
  GET_PROJECTS_FAIL,
  GET_PROJECTS_REQUEST,
  GET_PROJECTS_SUCCESS,
  GET_PROJECT_FAIL,
  GET_PROJECT_REQUEST,
  GET_PROJECT_SUCCESS,
  PUT_PROJECT_REQUEST,
  PUT_PROJECT_SUCCESS,
  PUT_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAIL,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAIL,
} from "../constants/projectConstans";

export const getProjects = (pageNo, size) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PROJECTS_REQUEST,
    });

    const { data } = await axios.get(
      `/api/projects?&pageNo=${pageNo}&size=${size}`
    );
    dispatch({
      type: GET_PROJECTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROJECTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PROJECT_REQUEST,
    });
    const { data } = await axios.get(`/api/projects/${id}`);
    dispatch({
      type: GET_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROJECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postProject = (project) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_PROJECT_REQUEST,
    });
    const { data } = await axios.post(`/api/projects/`, project);
    dispatch({
      type: ADD_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PROJECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const putProject = (id, updatedProject) => async (dispatch) => {
  try {
    dispatch({
      type: PUT_PROJECT_REQUEST,
    });
    const { data } = await axios.put(`/api/projects/${id}`, updatedProject);
    dispatch({
      type: PUT_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PUT_PROJECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_PROJECT_REQUEST,
    });
    const { data } = await axios.delete(`/api/projects/${id}`);
    dispatch({
      type: DELETE_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PROJECT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
