import axios from "axios";
import {
  ADD_TEAM_FAIL,
  ADD_TEAM_REQUEST,
  ADD_TEAM_SUCCESS,
  DELETE_TEAM_FAIL,
  DELETE_TEAM_REQUEST,
  DELETE_TEAM_SUCCESS,
  GET_TEAMS_FAIL,
  GET_TEAMS_REQUEST,
  GET_TEAMS_SUCCESS,
  GET_TEAM_FAIL,
  GET_TEAM_REQUEST,
  GET_TEAM_SUCCESS,
  UPDATE_TEAM_FAIL,
  UPDATE_TEAM_REQUEST,
  UPDATE_TEAM_SUCCESS,
} from "../constants/teamConstants";

export const addTeam = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ADD_TEAM_REQUEST,
    });

    const {
      signedInUser: { signedInUser },
    } = getState();

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.post(`/api/team`);

    dispatch({
      type: ADD_TEAM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_TEAM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTeams = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_TEAMS_REQUEST,
    });

    const {
      signedInUser: { signedInUser },
    } = getState();

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    // const { data } = await axios.get(
    //   `/api/team?page=${pageCount}&limit=7&s=${search}`
    // );
    const { data } = await axios.get("/api/teams");

    dispatch({
      type: GET_TEAMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TEAMS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTeam = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_TEAM_REQUEST,
    });

    const {
      signedInUser: { signedInUser },
    } = getState();

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.get(`/api/team/${id}`, config);

    dispatch({
      type: GET_TEAM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TEAM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateTeam = () => async (dispatch, getState) => {
  console.log(id, projectData);
  try {
    dispatch({
      type: UPDATE_TEAM_REQUEST,
    });

    const {
      signedInUser: { signedInUser },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/team/${id}`, projectData, config);

    dispatch({
      type: UPDATE_TEAM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TEAM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteTeam = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_TEAM_REQUEST,
    });

    const {
      signedInUser: { signedInUser },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`//api/team/${id}`, config);

    dispatch({ type: DELETE_TEAM_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_TEAM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
