import {
  GET_TASKS_FAIL,
  GET_TASKS_REQUEST,
  GET_TASKS_RESET,
  GET_TASKS_SUCCESS,
  GET_TASK_FAIL,
  GET_TASK_REQUEST,
  GET_TASK_RESET,
  GET_TASK_SUCCESS,
  ADD_TASK_FAIL,
  ADD_TASK_REQUEST,
  ADD_TASK_RESET,
  ADD_TASK_SUCCESS,
  PUT_TASK_FAIL,
  PUT_TASK_REQUEST,
  PUT_TASK_RESET,
  PUT_TASK_SUCCESS,
  DELETE_TASK_FAIL,
  DELETE_TASK_REQUEST,
  DELETE_TASK_RESET,
  DELETE_TASK_SUCCESS,
} from "../constants/TaskConstans";

export const getTasksReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TASKS_REQUEST:
      return { loading: true };
    case GET_TASKS_SUCCESS:
      return { loading: false, success: true, tasks: action.payload };
    case GET_TASKS_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_TASKS_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const getTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_TASK_REQUEST:
      return { loading: true };
    case GET_TASK_SUCCESS:
      return { loading: false, success: true, task: action.payload };
    case GET_TASK_FAIL:
      return { loading: false, success: false, error: action.payload };
    case GET_TASK_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const addTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TASK_REQUEST:
      return { loading: true };
    case ADD_TASK_SUCCESS:
      return { loading: false, success: true, task: action.payload };
    case ADD_TASK_FAIL:
      return { loading: false, success: false, error: action.payload };
    case ADD_TASK_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const putTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case PUT_TASK_REQUEST:
      return { loading: true };
    case PUT_TASK_SUCCESS:
      return { loading: false, success: true, task: action.payload };
    case PUT_TASK_FAIL:
      return { loading: false, success: false, error: action.payload };
    case PUT_TASK_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};

export const deleteTaskReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_TASK_REQUEST:
      return { loading: true };
    case DELETE_TASK_SUCCESS:
      return { loading: false, success: true };
    case DELETE_TASK_FAIL:
      return { loading: false, success: false, error: action.payload };
    case DELETE_TASK_RESET:
      return { loading: false, state: {} };
    default:
      return state;
  }
};
