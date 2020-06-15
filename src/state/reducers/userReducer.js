import { actionTypes } from "../actions/userActions";

const initialState = {
  artist: null,
  listener: null,
  message: "",
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_RESET:
      return {
        ...initialState,
      };
    case actionTypes.ARTIST_REGISTER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case actionTypes.ARTIST_REGISTER_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.ARTIST_LOGIN_SUCCESS:
      return {
        ...state,
        artist: action.payload.artist,
        message: action.payload.message,
      };
    case actionTypes.ARTIST_LOGIN_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.LISTENER_REGISTER_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
      };
    case actionTypes.LISTENER_REGISTER_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    case actionTypes.LISTENER_LOGIN_SUCCESS:
      return {
        ...state,
        listener: action.payload.listener,
        message: action.payload.message,
      };
    case actionTypes.LISTENER_LOGIN_FAIL:
      return {
        ...state,
        message: action.payload.message,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default userReducer;
