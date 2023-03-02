import {
  GET_TEAMS_FAIL,
  GET_TEAMS_REQUEST,
  GET_TEAMS_RESET,
  GET_TEAMS_SUCCESS,
  GET_TEAM_FAIL,
  GET_TEAM_REQUEST,
  GET_TEAM_RESET,
  GET_TEAM_SUCCESS,
  ADD_TEAM_FAIL,
  ADD_TEAM_REQUEST,
  ADD_TEAM_RESET,
  ADD_TEAM_SUCCESS,
  PUT_TEAM_FAIL,
  PUT_TEAM_REQUEST,
  PUT_TEAM_RESET,
  PUT_TEAM_SUCCESS,
  DELETE_TEAM_FAIL,
  DELETE_TEAM_REQUEST,
  DELETE_TEAM_RESET,
  DELETE_TEAM_SUCCESS,
  GET_MEMBERS_REQUEST,
  GET_MEMBERS_SUCCESS,
  GET_MEMBERS_FAIL,
  GET_MEMBERS_RESET,
} from "../constants/teamConstants";

export const getTeamsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TEAMS_REQUEST:
      return { loading: true };
    case GET_TEAMS_SUCCESS:
      return { loading: false, success: true, teams: action.payload };
    case GET_TEAMS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_TEAMS_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const getTeamReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TEAM_REQUEST:
      return { loading: true };
    case GET_TEAM_SUCCESS:
      return { loading: false, success: true, team: action.payload };
    case GET_TEAM_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_TEAM_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const addTeamReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TEAM_REQUEST:
      return { loading: true };
    case ADD_TEAM_SUCCESS:
      return { loading: false, success: true, team: action.payload };
    case ADD_TEAM_FAIL:
      return { loading: false, success: false, error: action.payload };
    case ADD_TEAM_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const putTeamReducer = (state = {}, action) => {
  switch (action.type) {
    case PUT_TEAM_REQUEST:
      return { loading: true };
    case PUT_TEAM_SUCCESS:
      return { loading: false, success: true, team: action.payload };
    case PUT_TEAM_FAIL:
      return { loading: false, success: false, error: action.payload };
    case PUT_TEAM_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const deleteTeamReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TEAM_REQUEST:
      return { loading: true };
    case DELETE_TEAM_SUCCESS:
      return { loading: false, success: true };
    case DELETE_TEAM_FAIL:
      return { loading: false, success: false, error: action.payload };
    case DELETE_TEAM_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const getMembersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MEMBERS_REQUEST:
      return { loading: true };
    case GET_MEMBERS_SUCCESS:
      return { loading: false, success: true, members: action.payload };
    case GET_MEMBERS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_MEMBERS_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};
