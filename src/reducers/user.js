import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../actions/UserAction';

const initialState = {
  name: '',
  error: '',
  isFetching: false,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true };
    case LOGIN_SUCCESS:
      return { ...state, name: action.payload, isFetching: false };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.message,
        isFatching: false,
      };
    default:
      return state;
  }
}
